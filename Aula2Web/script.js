function getlogin(){
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    if(login === "admin" && password === "123"){
        let url = "./home.html"
        window.open(url)
    }else{
        alert("Login ou senha invalidos")
    }
}