
function Salvar() {
const imputNome = document.querySelector("#nomedoaluno")

    if (imputNome.value == "") {
        alert("preencha esse campo");
        imputNome.focus();
        // Se o campo estiver vazio, exibe um alerta e foca no campo. 
        // O return é para caso tenha dois campos nao preenchidos
        // o foco vai para o primeiro campo vazio
        // tambem, quando executar isso por causa de um atributo submit o site vai recarregar e se tiver o return e o campo estiver vazio
        // preenchido nao ira apagar o qeu estiver escrito. Nao ira perder o progresso do que ja esta preenchido. 
        return;
    }    
}
let media1;
let media2;
let resultado;

function  CriarMedia1() {
    media1 = Number(document.querySelector("#media1").value);

}

function  CriarMedia2(valor2) {
    media2 = Number(document.querySelector("#media2").value);

}

function CalcularMedia() {
    resultado = (media1 + media2) / 2;
    document.querySelector("#resultado").innerHTML = resultado;
}


