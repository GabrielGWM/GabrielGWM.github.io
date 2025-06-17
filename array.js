/*let numeros = [15, 26, 89];
numeros[99] = 135;

console.log(`primeiro : ${numeros[0]}`);
console.log(`segundo : ${numeros[1]}`);
console.log(`terceiro : ${numeros[99]}`);

let indice = 0;
let total = numeros.length;
while (indice <= total) {
console.log(`#${indice} : ${numeros[0]}`);
indice = indice + 1;
}

let arrays = [3,24,82];
console.log(arrays.length);*/

/*let classe = ".numeros"

let i = 0;
while (i <= 1000) {
    if (i % 2 == 0) {
        let numerosPares = document.querySelector(`${classe}`);
    numerosPares.innerHTML += `<p>${i}.</p>`;
    }
        i++;
}
        
AO INVES DE FAZER ASSIM, FAZER ASSIM PARA NAO
FICAR CAHAMANDO TODA HORA A CLASSE E FICAR GASTANDO RECURSOS SE DEUS QUISER*/

/*let classe = ".numeros"
let numerosPares = document.querySelector(`${classe}`)
let i = 0;
while (i <= 1000) {
    if (i % 5 == 0) {
        numerosPares.innerHTML += `<p>${i}.</p>`;
    }
        i++;
}

versão com for

let classe = ".numeros"
let numerosPares = document.querySelector(`${classe}`)

for (let i = 0;i <= 1000; i++) {
    if (i % 5 == 0) {
        numerosPares.innerHTML += `<p>${i}.</p>`;
    }
}*/

function Executar() {
    let divisivel = Number(document.getElementById("divisivel-por-resposta").value);
    let min = Number(document.getElementById("quantidade-de-numeros-resposta-min").value);
    let max = Number(document.getElementById("quantidade-de-numeros-resposta-max").value);
    console.log("min: ", min, "max:", max);
    let classe = ".numeros";
    let numerosPares = document.querySelector(`${classe}`);
    let contagemParaBlocos = 

    numerosPares.innerHTML = ""
    for (let i = min;i <= max; i++) {
        if (i % divisivel == 0) {
            numerosPares.innerHTML += `<p>${i}.</p>`;
        }
    }
}