document.addEventListener('DOMContentLoaded', () => {
    const pacienteForm = document.getElementById('pacienteForm');
    const pacienteTable = document.getElementById('pacienteTable').querySelector('tbody');

    // Função para carregar pacientes do servidor
    function loadPacientes() {
        fetch('pacientes.php')
            .then(response => response.json())
            .then(data => {
                pacienteTable.innerHTML = '';
                data.forEach(paciente => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${paciente.id}</td>
                        <td>${paciente.cpf}</td>
                        <td>${paciente.nome}</td>
                        <td>${paciente.id_endereco}</td>
                        <td>
                            <button onclick="editPaciente(${paciente.id})">Editar</button>
                            <button onclick="deletePaciente(${paciente.id})">Excluir</button>
                        </td>
                    `;
                    pacienteTable.appendChild(row);
                });
            });
    }

    // Função para salvar ou atualizar paciente
    pacienteForm.addEventListener('submit', event => {
        event.preventDefault();
        const id = document.getElementById('pacienteId').value;
        const cpf = document.getElementById('cpf').value;
        const nome = document.getElementById('nome').value;
        const id_endereco = document.getElementById('id_endereco').value;

        const method = id ? 'PUT' : 'POST';
        const url = id ? `pacientes.php?id=${id}` : 'pacientes.php';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, cpf, nome, id_endereco })
        })
            .then(response => response.json())
            .then(() => {
                loadPacientes();
                pacienteForm.reset();
            });
    });

    // Função para editar paciente
    window.editPaciente = id => {
        fetch(`pacientes.php?id=${id}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('pacienteId').value = data.id;
                document.getElementById('cpf').value = data.cpf;
                document.getElementById('nome').value = data.nome;
                document.getElementById('id_endereco').value = data.id_endereco;
            });
    };

    // Função para excluir paciente
    window.deletePaciente = id => {
        if (confirm('Tem certeza que deseja excluir este paciente?')) {
            fetch('pacientes.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
                .then(response => response.json())
                .then(() => {
                    loadPacientes();
                });
        }
    };

    // Carregar lista de pacientes ao carregar a página
    loadPacientes();
});
