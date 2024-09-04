function getlogin(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if(login === "admin" && password === "123"){
        let url = "/Aula2Web/templates/home.html"
        window.location.href=url
    }else{
        alert("Login ou senha invalidos")
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    const username = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    if(username === "admin" && password === "123"){
        let url = "/Aula2Web/templates/home.html"
        window.location.href=url
    }else{
        alert("Login ou senha invalidos")
    }
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success || (login === "admin" && password === "123")) {
            let url = "/Aula2Web/templates/home.html"
            window.open(url)
            window.location.href = "/dashboard"; // Redireciona para o dashboard
        } else {
            alert("Login falhou. Verifique seu usuário e senha.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
    });
});
