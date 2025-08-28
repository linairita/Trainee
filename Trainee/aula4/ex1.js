function saudacao(nome,hora) {
    let mensagem = "";

    if(hora>= 5 && hora < 12){
        mensagem = `Bom dia, ${nome}!`;
    } else if (hora >= 12 && hora<18){
        mensagem = `Boa tarde, ${nome}!`;
    } else{
        mensagem = `Boa noite, ${nome}!`
    }
    return mensagem;
}
const nome = "Ana";
const hora = new Date().getHours();
const texto = saudacao(nome,hora)
document.getElementById("mensagem").textContent = texto;

const btn = document.querySelector("button");
const hiddenState = "hidden";

const arrowFunction = () => {
    console.log("Arrow Function");
}

btn.addEventListener("click", () =>{
    const div = document.querySelector("div");

    console.log(div.classList);

    if(div.classList.contains(hiddenState)){
        div.classList.contains(hiddenState);
    }else{
        div.classList.add(hiddenState);
    }
});