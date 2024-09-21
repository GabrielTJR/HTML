function consultarCep(){
    let cep = document.getElementById('cep').value.replace(/\D/g,'')
    if(cep.length !== 8){
        alert('cep invalido');
        return;
    }

    let url = "https://viacep.com.br/ws/" + cep +"/json/";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cep = data.cep;
            const uf = data.uf;
            const localidade = data.localidade;
            const bairro = data.bairro;
            const logradouro = data.logradouro;

            document.getElementById('resultado').innerHTML = 
            `CEP: ${cep}<br>
            UF: ${uf}<br>
            Localidade: ${localidade}<br>
            Bairro: ${bairro}<br>
            Rua: ${logradouro}<br>`
        })
}