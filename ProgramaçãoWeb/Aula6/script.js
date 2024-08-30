function salvarEndereco(){
    sessionStorage.setItem("end_rua",document.getElementById("end_rua").value);
    sessionStorage.setItem("end_cidade", document.getElementById("end_cidade").value);
    sessionStorage.setItem("end_estado", document.getElementById("end_estado").value);
    sessionStorage.setItem("end_cep", document.getElementById("end_cep").value);
}

function carregarEndereco(){
    let rua = sessionStorage.getItem("end_rua");
    let cidade = sessionStorage.getItem("end_cidade");
    let estado = sessionStorage.getItem("end_estado");
    let cep = sessionStorage.getItem("end_cep");

    document.getElementById("end_rua").textContent = rua;
    document.getElementById("end_cidade").textContent = cidade;
    document.getElementById("end_estado").textContent = estado;
    document.getElementById("end_cep").textContent = cep;
}

function salvarProdutos(){
    let idNomeProduto1 = document.getElementById('prod_havaianas');

    let nomeProduto1 = document.getElementById('prod_havaianas').textContent;
    let qntProduto1 = document.getElementById('prod_havaianas_qnt').textContent;
    let precoProduto1 = document.getElementById('prod_havaianas_preco').textContent;

    sessionStorage.setItem(idNomeProduto1, nomeProduto1)
    sessionStorage.setItem("prod_havaianas_qnt", nomeProduto1)
    sessionStorage.setItem("prod_havaianas_preco", nomeProduto1)

    let idNomeProduto2 = document.getElementById('prod_alpargatas');

    let nomeProduto2 = document.getElementById('prod_alpargatas').textContent;
    let qntProduto2 = document.getElementById('prod_alpargatas_qnt').textContent;
    let precoProduto2 = document.getElementById('prod_alpargatas_preco').textContent;

    sessionStorage.setItem(idNomeProduto1, nomeProduto1)
    sessionStorage.setItem("prod_alpargatas_qnt", nomeProduto1)
    sessionStorage.setItem("prod_alpargatas_preco", nomeProduto1)

}