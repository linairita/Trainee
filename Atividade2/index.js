function alterarTexto(){
const paragrafo = document.getElementById("mensagem");
paragrafo.textContent = "Adicione itens no próximo passo!"
}

function adicionarItem(){
    const input = document.getElementById("itemInput");
    const valor = input.value.trim();

    if(valor !== ""){
        const novaLista = document.createElement("li");
        novaLista.textContent = valor;

        document.getElementById("lista").appendChild(novaLista);
        input.value = "";
        input.focus();
    }
}

const imagens = document.querySelectorAll('.galeria img')
let indiceAtual = 1;


function mover(direcao){
    imagens[indiceAtual].classList.remove('ativa');

    if (direcao === 'esquerda'){
        indiceAtual = Math.max(0, indiceAtual-1);
    } else if(direcao === 'direita'){
        indiceAtual = Math.min(imagens.length - 1, indiceAtual + 1);
    }

    imagens[indiceAtual].classList.add('ativa');
}