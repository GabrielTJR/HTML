// Função para gerar nó do grafo
document.getElementById('adicionarLinha').addEventListener('click', function() {
    const corpoAtividades = document.getElementById('corpoAtividades');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td><input type="text" class="atividade"></td>
        <td><input type="number" class="duracao"></td>
        <td><input type="text" class="precedentes"></td>
    `;

    corpoAtividades.appendChild(novaLinha);
});

// Função para calcular caminho critico, começos, finais e folga
document.getElementById('calcular').addEventListener('click', function() {
    const atividades = document.getElementsByClassName('atividade');
    const duracoes = document.getElementsByClassName('duracao');
    const precedentes = document.getElementsByClassName('precedentes');
    
    const dados = [];

    for (let i = 0; i < atividades.length; i++) {
        const atividade = atividades[i].value.trim();
        const duracao = parseInt(duracoes[i].value.trim());
        const preds = precedentes[i].value.trim().split(',').map(p => p.trim()).filter(p => p !== '');
        dados.push({ atividade, duracao, precedentes: preds });
    }

    const resultado = calcularPERT(dados);
    exibirResultados(resultado);
});

function calcularPERT(dados) {
    const grafo = {};
    dados.forEach(({ atividade, duracao, precedentes }) => {
        if (!grafo[atividade]) {
            grafo[atividade] = { duracao, precedentes, sucessores: [] };
        } else {
            grafo[atividade].duracao = duracao;
            grafo[atividade].precedentes = precedentes;
        }

        precedentes.forEach(pred => {
            if (!grafo[pred]) {
                grafo[pred] = { duracao: 0, precedentes: [], sucessores: [atividade] };
            } else {
                grafo[pred].sucessores.push(atividade);
            }
        });
    });

    const { tempos, caminhoCritico } = calcularTempos(grafo);

    return { grafo, tempos, caminhoCritico };
}

function calcularTempos(grafo) {
    const tempos = {};
    const fila = [];
    const caminhoCritico = [];
    
    Object.keys(grafo).forEach(no => {
        if (grafo[no].precedentes.length === 0) {
            fila.push(no);
        }
    });

    while (fila.length > 0) {
        const atual = fila.shift();
        const dadosAtuais = grafo[atual];

        if (!tempos[atual]) {
            tempos[atual] = { inicioMinimo: 0, fimMinimo: dadosAtuais.duracao };
        }

        dadosAtuais.sucessores.forEach(sucessor => {
            if (!tempos[sucessor]) {
                tempos[sucessor] = { inicioMinimo: 0, fimMinimo: 0 };
            }

            tempos[sucessor].inicioMinimo = Math.max(tempos[sucessor].inicioMinimo, tempos[atual].fimMinimo);
            tempos[sucessor].fimMinimo = tempos[sucessor].inicioMinimo + grafo[sucessor].duracao;

            fila.push(sucessor);
        });
    }

    let maiorFim = 0;
    Object.keys(tempos).forEach(no => {
        if(tempos[no].fimMinimo > maiorFim){
            maiorFim = tempos[no].fimMinimo;
        }
    });

    const grafoReverso = reverterGrafo(grafo);
    Object.keys(grafoReverso).forEach(no => {
        if (grafoReverso[no].sucessores.length === 0) {
            fila.push(no);
            tempos[no].fimMaximo = maiorFim;
            tempos[no].inicioMaximo = maiorFim - grafo[no].duracao;
        }
    });

    while (fila.length > 0) {
        const atual = fila.shift();
        const dadosAtuais = grafoReverso[atual];

        dadosAtuais.precedentes.forEach(pred => {
            if (!tempos[pred].fimMaximo) {
                tempos[pred].fimMaximo = tempos[atual].inicioMaximo;
                tempos[pred].inicioMaximo = tempos[pred].fimMaximo - grafo[pred].duracao;
            } else {
                tempos[pred].fimMaximo = Math.min(tempos[pred].fimMaximo, tempos[atual].inicioMaximo);
                tempos[pred].inicioMaximo = tempos[pred].fimMaximo - grafo[pred].duracao;
            }

            fila.push(pred);
        });
    }

    Object.keys(tempos).forEach(no => {
        tempos[no].folga = tempos[no].fimMaximo - tempos[no].fimMinimo;
        if (tempos[no].folga === 0) {
            caminhoCritico.push(no);
        }
    });

    return { tempos, caminhoCritico };
}

function reverterGrafo(grafo) {
    const reverso = {};

    Object.keys(grafo).forEach(no => {
        if (!reverso[no]) {
            reverso[no] = { precedentes: [], sucessores: [] };
        }

        grafo[no].sucessores.forEach(sucessor => {
            if (!reverso[sucessor]) {
                reverso[sucessor] = { precedentes: [no], sucessores: [] };
            } else {
                reverso[sucessor].precedentes.push(no);
            }
            reverso[no].sucessores.push(sucessor);
        });
    });

    return reverso;
}

function exibirResultados(resultado) {
    const { grafo, tempos, caminhoCritico } = resultado;
    
    const containerGrafo = document.getElementById('grafo');
    const containerTabelas = document.getElementById('tabelas');
    
    containerGrafo.innerHTML = '';
    containerTabelas.innerHTML = '';

    /*const grafoDiv = document.createElement('div');
    grafoDiv.innerText = JSON.stringify(grafo, null, 2);
    containerGrafo.appendChild(grafoDiv);*/

    // Exibir a tabela de tempos
    const tabelaTempos = document.createElement('table');
    tabelaTempos.innerHTML = `
        <thead>
            <tr>
                <th>Atividade</th>
                <th>Início Mínimo</th>  
                <th>Fim Mínimo</th>              
                <th>Início Máximo</th>
                <th>Fim Máximo</th>
                <th>Folga</th>
            </tr>
        </thead>
        <tbody>
            ${Object.keys(tempos).map(atividade => `
                <tr>
                    <td>${atividade}</td>
                    <td>${tempos[atividade].inicioMinimo}</td>
                    <td>${tempos[atividade].fimMinimo}</td>                    
                    <td>${tempos[atividade].inicioMaximo}</td>
                    <td>${tempos[atividade].fimMaximo}</td>
                    <td>${tempos[atividade].folga}</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    containerTabelas.appendChild(tabelaTempos);

    // Exibir o caminho crítico
    const divCaminhoCritico = document.createElement('div');
    divCaminhoCritico.innerText = `Caminho Crítico: ${caminhoCritico.join(' -> ')}`;
    containerTabelas.appendChild(divCaminhoCritico);
}
