function PegarNumero() {
    let numero = 0;
    numero = Number(prompt());
    return numero;
}

function CalcularSoma(n1,n2){
    n1 = PegarNumero();
    n2 = PegarNumero();

    let soma = 0;
    soma = n1 + n2;
    return soma;
}

function CalcularSubtracao(n1,n2){
    n1 = PegarNumero();
    n2 = PegarNumero();

    let subtracao = 0;
    subtracao = n1 - n2;
    return subtracao;
}

function CalcularMultiplicacao(n1,n2){
    n1 = PegarNumero();
    n2 = PegarNumero();

    let multiplicacao = 0;
    multiplicacao = n1 * n2;
    return multiplicacao;
}

function CalcularDivisao(n1,n2){
    n1 = PegarNumero();
    n2 = PegarNumero();

    let divisao = 0;
    divisao = n1 / n2;
    return divisao;
}

function ValidarSeTextoRecebidoEVasio(textoRecebido) {
        let eVasio = true; 
    if (textoRecebido != "") {
        return textoRecebido;
    } else{
        PegarTexto();
    }
}

/*Prof version*/
function ValidarTextoVasio() {
const texto = prompt("Please algo");
if (texto == "") [
    console.log("Vasio")
]
console.log(texto);
}

function ValidarNumeroEEntre1e10() {
const texto = prompt("Please algo");
if (!isNaN(texto) && texto >= 1 && texto <= 10) {
    let numero = Number(texto);
    console.log(texto);
    EPar();
} else {
    console.log("Não atende os requisitos");    
}

function EPar(numero)
{
if (numero % 2 == 0) {
    console.log("É Par.");
} else{
    console.log("É Impar.");
}    
}


}

function PegarTexto() {
    let pegartexto = "";
    pegartexto = prompt();
    ValidarSeTextoRecebidoEVasio(pegartexto);
    console.log(pegartexto);
    return pegartexto;

}

function NumeroDeMedianas() {
    let numero = 0;
    numero = PegarNumero();
}

