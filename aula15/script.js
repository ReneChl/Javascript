// Criamos um objeto chamado "options" com as configurações para o efeito de digotação
const options = {

    strings: [
        "Bem-vindo ao Obra Social Dom Bosco",
        "Desemvolvimento Front-end",
        "Desemvolvimento Back-end",
        "Catastre-se aqui!"
    ],

    typeSpeed: 60, //Velocidade da digitação (em milisegundos por caractere)
    backSpeed: 40,//Velocidade em apagar os textos
    loop: true, //Faz ccon que as frases se repitam indifinidamente
    backDelay: 1500,//Temppo de espera (em milisegundos)antes de começar a apagar da proxima frase
    smartBackspace: true //Ptimiza o a´pagamento: apaga apenas os catacteres diferentes da próxima frase

};
//cria uma nova instância do Typed.js
//"#typed" é  o seletor do elemento HTML onde o texto será digitado
//"options" é o objeto com as configurações acima
new Typed("#typed", options); // Typed no se pode errar
