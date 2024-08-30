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
    let nomeProduto1 = document.getElementById("prod_havaianas").textContent;
    let qntProduto1 = document.getElementById("prod_havaianas_qnt").textContent;
    let precoProduto1 = document.getElementById("prod_havaianas_preco").textContent;

    alert('nomeProduto1')

    sessionStorage.setItem("prod_havaianas", nomeProduto1)
    sessionStorage.setItem("prod_havaianas_qnt", qntProduto1)
    sessionStorage.setItem("prod_havaianas_preco", precoProduto1)

    let nomeProduto2 = document.getElementById("prod_alpargatas").textContent;
    let qntProduto2 = document.getElementById("prod_alpargatas_qnt").textContent;
    let precoProduto2 = document.getElementById("prod_alpargatas_preco").textContent;

    sessionStorage.setItem("prod_alpargatas", nomeProduto2)
    sessionStorage.setItem("prod_alpargatas_qnt", qntProduto2)
    sessionStorage.setItem("prod_alpargatas_preco", precoProduto2)
}

function carregarProdutos(){
    let np1 = sessionStorage.getItem("prod_havaianas");
    let qp1 = sessionStorage.getItem("prod_havaianas_qnt");
    let pp1 = sessionStorage.getItem("prod_havaianas_preco");

    let np2 = sessionStorage.getItem("prod_alpargatas");
    let qp2 = sessionStorage.getItem("prod_alpargatas_qnt");
    let pp2 = sessionStorage.getItem("prod_alpargatas_preco");

    document.getElementById("prod_havaianas").textContent = np1;
    document.getElementById("prod_havaianas_qnt").textContent = qp1;
    document.getElementById("prod_havaianas_preco").textContent = pp1;

    document.getElementById("prod_alpargatas").textContent = np2;
    document.getElementById("prod_alpargatas_qnt").textContent = qp2;
    document.getElementById("prod_alpargatas_preco").textContent = pp2;
}