//aqui estamos recuperando nosso ID que esta no HTML

// estamos criando funciones

let meuElemento = document.getElementById("meuElemento");


function tornarCirculo() {
    meuElemento.classList.add("circle");//adiciono uma class para arredondar o quadrado, os puntos es para juntar os elementos (concatenar elementos)
    meuElemento.classList.remove("square");// removo uma class para arredondar a caixa, puntos es para juntar os elementos (concatenar elementos)
}

function tornarQuadrado() {
    meuElemento.classList.add("square");//adiciono uma class para arredondar o quadrado
    meuElemento.classList.remove("circle");// removo uma class para arredondar a caixa
}

function alternarFormato() {
    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("scuadre");

}

// toggle é responsável por vereficar o elemento atual (fubciona como se)