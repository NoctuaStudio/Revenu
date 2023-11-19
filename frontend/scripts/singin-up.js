const loginCard = document.getElementById('login-card');
const cadastroCard = document.getElementById('cadastro-card');
const buttonLogin = document.getElementById('login-button');
const buttonCadastro = document.getElementById('cadastro-button');
const title = document.getElementsByTagName('title')[0];
const textocadastro = document.getElementById('texto-cadastro');
const textologin = document.getElementById('texto-login');
const erroLogin = document.getElementById('loginErro');

function mostrarErroLogin(){
    erroLogin.style.display = "block";
}   

function showLoginCard() {
cadastroCard.classList.add('rotate-cross');
setTimeout(() => {
    loginCard.style.display = 'block';
    cadastroCard.style.display = 'none';
    setTimeout(() => {
    cadastroCard.classList.remove('rotate-cross');
    //buttonCadastro.disabled = "false";  //queria fazer isso funcionar para não bugar quando clica muitas vezes, porem não consegui	
    }, 1500); 
}, 750);
//buttonLogin.disabled = "true";
textocadastro.style.opacity = 0;
textologin.style.opacity = 1;
title.textContent = 'Login';
buttonLogin.classList.remove('inactive');
buttonCadastro.classList.add('inactive');
buttonCadastro.classList.remove('active');
buttonLogin.classList.add('active');
}

function showCadastroCard() {
loginCard.classList.add('rotate-cross');
setTimeout(() => {
    cadastroCard.style.display = 'block';
    loginCard.style.display = 'none';
    setTimeout(() => {
    loginCard.classList.remove('rotate-cross');
    // buttonLogin.disebled = "false";    
    }, 1500);
}, 750);
//buttonCadastro.disebled = "true";
textologin.style.opacity = 0;
textocadastro.style.opacity = 1;
title.textContent = 'Cadastro';
buttonLogin.classList.add('inactive');
buttonLogin.classList.remove('active');
buttonCadastro.classList.add('active');
buttonCadastro.classList.remove('inactive');
}

loginCard.addEventListener('animationend', () => {
loginCard.classList.remove('rotate-login'); // Remove a classe de rotação do cartão de login
});

cadastroCard.addEventListener('animationend', () => {
cadastroCard.classList.remove('rotate-cadastro'); // Remove a classe de rotação do cartão de cadastro
});

buttonLogin.addEventListener('click', showLoginCard);
buttonCadastro.addEventListener('click', showCadastroCard);

function mostrarOcultarConfirmarSenha() {
    var senhaConfirmarInput = document.getElementById("confirmarCadastro");
    var icon1 = document.getElementById("eye-dismissed2");
    var icon2 = document.getElementById("eye-vissible2");

    if (senhaConfirmarInput.type === "password") {
        icon1.style.display = "none";
        icon2.style.display = "block";
        senhaConfirmarInput.type = "text";
    } else if (senhaConfirmarInput.type === "text"){
        icon1.style.display = "block";
        icon2.style.display = "none";
        senhaConfirmarInput.type = "password";
    }

} 

function mostrarOcultarSenha() {
    var senhaInput = document.getElementById("senhaCadastro");
    var icon1 = document.getElementById("eye-dismissed1");
    var icon2 = document.getElementById("eye-vissible1");
    if (senhaInput.type === "password") {
        icon1.style.display = "none";
        icon2.style.display = "block";
        senhaInput.type = "text";
    } else if (senhaInput.type === "text") {
        icon1.style.display = "block";
        icon2.style.display = "none";
        senhaInput.type = "password";
    }
}
function mostrarOcultarSenhaLogin() {
    var senhaInput = document.getElementById("senhaLogin");
    var icon1 = document.getElementById("eye-dismissed3");
    var icon2 = document.getElementById("eye-vissible3");
    if (senhaInput.type === "password") {
        icon1.style.display = "none";
        icon2.style.display = "block";
        senhaInput.type = "text";
    } else if (senhaInput.type === "text") {
        icon1.style.display = "block";
        icon2.style.display = "none";
        senhaInput.type = "password";
    }
}

let validaçõesLogin = [false, false]

const emailLogin = document.getElementById("emailLogin")
const erroEmailLogin = document.getElementById("erroEmailLogin")
const MensagemEmailLogin = document.getElementById("MensagemEmailLogin")

emailLogin.addEventListener("keyup", () => {
    const valor = emailLogin.value;
    validaçõesLogin[0] = validateEmail(valor);

    if (validaçõesLogin[0]) {
        erroEmailLogin.classList.remove("invalid-feedback")
        erroEmailLogin.classList.add("valid-feedback")
        emailLogin.style.border = "2px solid green"
        MensagemEmailLogin.innerText = "Email válido"
    }
    else {
        erroEmailLogin.style.display = "block"
        erroEmailLogin.classList.remove("valid-feedback")
        erroEmailLogin.classList.add("invalid-feedback")
        emailLogin.style.border = "2px solid red"
        MensagemEmailLogin.innerText = "Email inválido"
    }
})

const senhaLogin = document.getElementById("senhaLogin")
const erroSenhaLogin = document.getElementById("erroSenhaLogin")
const MensagemSenhaLogin = document.getElementById("MensagemSenhaLogin")

senhaLogin.addEventListener("keyup", () => {
    const valor = senhaLogin.value;
    validaçõesLogin[1] = valor.length >= 8 && valor.length <= 20 && /[0-9]/.test(valor) && /[a-z]/.test(valor) && /[A-Z]/.test(valor) && /[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valor);

    if (validaçõesLogin[1]) {
        erroSenhaLogin.classList.remove("invalid-feedback")
        erroSenhaLogin.classList.add("valid-feedback")
        senhaLogin.style.border = "2px solid green"
        MensagemSenhaLogin.innerText = "Senha válida"
    }
    else {
        erroSenhaLogin.style.display = "block"
        erroSenhaLogin.classList.remove("valid-feedback")
        erroSenhaLogin.classList.add("invalid-feedback")
        senhaLogin.style.border = "2px solid red"
        MensagemSenhaLogin.innerText = "Senha inválida"
    }
})





formLogin.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log("Login interrompido...")

    let validado4 = true;
    validaçõesLogin.forEach(validação => {
        if (!validação) {
            validado4 = false;
        }
    });
    if (!validado4) {
        console.log("Email ou senha inválida")
        // NAO PASSOU DE VALIDAÇÕES BASICAS
        console.log(emailLogin.value)
        console.log(senhaLogin.value)
        mostrarErroLogin();
        return;         
    }
    
     

    console.log("Indo verificar usuario");

    buscarUsuario(emailLogin.value, senhaLogin.value)
        .then(passou => {
            console.log("RESULTADO DO METODO: " + passou);


            if (!passou){
                console.log(emailLogin.value)
                console.log(senhaLogin.value)
                mostrarErroLogin();
                event.stopPropagation()
                console.log("Login Incorreto")
                
            }
            else{
                console.log("Login Passou!!!!!")
                // EXISTE NO BANCO
                // TODO FAZER O LOGIN PELO SESSION E COOKIES AQUI!!
            }
        })

        
        .catch(erro => {
            mostrarErroLogin();
            console.error("Erro ao buscar usuário:", erro);
        });
    })
    


function buscarUsuario(email, senha) {

    let dados = {
        Email: email,
        Senha: senha       
    }
    console.log(JSON.stringify(dados))

    
        return fetch("http://localhost:8010/usuario/login", {
            method: "POST",
            body: JSON.stringify(dados),           
            headers:{
                "Content-Type": "application/json"
            }}) 
        .then(resposta => resposta.json())
        .then(resultado => {
            console.log("RETORNANDO:" + resultado );
            return (resultado);
        })        
    }

    
