//aqui estamos recuperando nosso ID que esta no HTML

let meuElemento = document.getElementById("meuElemento");


function tornarCirculo() {
    meuElemento.classList.add("circle");//adiciono uma class para arredondar o quadrado
    meuElemento.classList.remove("square");// removo uma class para arredondar a caixa
}

function tornarQuadrado() {
    meuElemento.classList.add("square")//adiciono uma class para arredondar o quadrado
    meuElemento.classList.remove("circle")// removo uma class para arredondar a caixa
}