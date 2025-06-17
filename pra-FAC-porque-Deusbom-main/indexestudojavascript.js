/*var saudacaoInicial = "oi";

console.log(saudacaoInicial)
console.log(typeof(saudacaoInicial));*/



/*var nomeAluno = "Gabriel";
var notaPrimeiroBimestreDoAluno = 100;
var notaSegundoBimestreDoAluno = 100;

console.log("nome:" + nomeAluno);
console.log("A nota ficticia do 1ºBimestre:", notaPrimeiroBimestreDoAluno);
console.log("A nota ficticia do 2ºBimestre:", notaSegundoBimestreDoAluno);

console.log("nome:" + typeof(nomeAluno));
console.log("A nota ficticia do 1ºBimestre:", typeof(notaPrimeiroBimestreDoAluno));
console.log("A nota ficticia do 2ºBimestre:", typeof(notaSegundoBimestreDoAluno));

var mediaDoAluno = 0;

mediaDoAluno = (notaPrimeiroBimestreDoAluno + notaSegundoBimestreDoAluno) / 2;

console.log("A media ficticia:", mediaDoAluno);*/



/*
JEITO DO PROFESSOR

var nomeAluno = "Gabriel";
var notaPrimeiroBimestreDoAluno = 100;
var notaSegundoBimestreDoAluno = 100;
mediaDoAluno = (notaPrimeiroBimestreDoAluno + notaSegundoBimestreDoAluno) / 2;

console.log("nome:" + nomeAluno);
console.log("A nota ficticia do 1ºBimestre:", notaPrimeiroBimestreDoAluno);
console.log("A nota ficticia do 2ºBimestre:", notaSegundoBimestreDoAluno);

console.log("nome:" + typeof(nomeAluno));
console.log("A nota ficticia do 1ºBimestre:", typeof(notaPrimeiroBimestreDoAluno));
console.log("A nota ficticia do 2ºBimestre:", typeof(notaSegundoBimestreDoAluno));

console.log("A media ficticia:", mediaDoAluno);

OU

var nomeAluno = "Gabriel";
var notaPrimeiroBimestreDoAluno = 100;
var notaSegundoBimestreDoAluno = 100;
var somaDasNotas = notaPrimeiroBimestreDoAluno + notaSegundoBimestreDoAluno;
var mediaDoAluno = somaDoAluno / 2

console.log("nome:" + nomeAluno);
console.log("A nota ficticia do 1ºBimestre:", notaPrimeiroBimestreDoAluno);
console.log("A nota ficticia do 2ºBimestre:", notaSegundoBimestreDoAluno);

console.log("nome:" + typeof(nomeAluno));
console.log("A nota ficticia do 1ºBimestre:", typeof(notaPrimeiroBimestreDoAluno));
console.log("A nota ficticia do 2ºBimestre:", typeof(notaSegundoBimestreDoAluno));

console.log("A media ficticia:", mediaDoAluno);
*/

/*var numeroDigitado = 0;
var querTerminar = "";

while (querTerminar == "sim"){
    numeroDigitado = MediaQueryList(Number);
    console.log(numeroDigitado);
    console.log("Quer continuar:");
    querTerminar = MediaQueryList(Text);
    console.log(querTerminar);
}*/



/*let minhaVariavel = "18";
console.log ("minhaVariavel", typeof(minhaVariavel));
console.log("minhavariavel", minhaVariavel);


let minhaVariavel1 = "15";
console.log("minhavariavel", minhaVariavel);*/


var nomeAluno = prompt("Dite o nome do aluno");
var notaPrimeiroBimestreDoAluno = Number(prompt("Dite a primeira media"));
var notaSegundoBimestreDoAluno = Number(prompt("Dite a segunda media"));
var somaDasNotas = notaPrimeiroBimestreDoAluno + notaSegundoBimestreDoAluno;
var mediaDoAluno = somaDasNotas / 2

console.log("nome:" + nomeAluno);
console.log("A nota ficticia do 1ºBimestre:" + notaPrimeiroBimestreDoAluno);
console.log("A nota ficticia do 2ºBimestre:" + notaSegundoBimestreDoAluno);

console.log("nome:" + typeof(nomeAluno));
console.log("A nota ficticia do 1ºBimestre:" + typeof(notaPrimeiroBimestreDoAluno));
console.log("A nota ficticia do 2ºBimestre:" + typeof(notaSegundoBimestreDoAluno));

console.log("A media ficticia:", mediaDoAluno);

console.log("A media ficticia de " + nomeAluno + "para as ficticias notas " + notaSegundoBimestreDoAluno + "e" + notaSegundoBimestreDoAluno + "é " + mediaDoAluno )


