const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

function btnClick(){
    if(email == ""){
        alert("Email obrigatório");
    }

    if(password == ""){
        alert("Senha obrigatória");
    }

};