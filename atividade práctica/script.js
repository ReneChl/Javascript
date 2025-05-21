// getAttribute - Obter o valor do atributo (valor da linha)

// setAttribute - Definir ou modificar o valor

function changeImage() {
    const img = document.getElementById("myImage");//Aqui consiguimos armazenar o conteúdo da imagem

    const currentSrc = img.getAttribute("src");// Aqui pagamos o atributo SRC da imagem, responsável pela alteração da img.



    if (currentSrc === "imagem01.jpg") { // Se (if) a origem atual da imegem for igual a imagem "of cost1.jpg"
        img.setAttribute("src", "imagen02.jpg") //usando o setAttribute vamos modificar o valor de src, especificando a outra img.
        img.setAttribute("alt", "imagem oficina Verdade");
    } else { // se não. fazer o proceso inverso basicamente}
        img.setAttribute("src", "imagem01.jpg");
        img.setAttribute("alt", "imagem oficina preto");


}

//if = se a condição for válida execute algo 
//else = caso contrário / se não