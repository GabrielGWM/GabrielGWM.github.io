
function ExibirMensagem(mensagem) {
    alert(mensagem)
}

function ValidaFormulario(nome, m1, m2) {
    if (nome == "" ) {
        ExibirMensagem("Preencha nome.");
        let nomeParaFocar = document.querySelector("#campoDeNome");
        nomeParaFocar.focus();
        return false;
    }
        if (nome == "" || isNaN(m1)) {
        ExibirMensagem("Preencha media 1.");
        let media1ParaFocar = document.querySelector("#campoDeMedia1");
        media1ParaFocar.focus();
        return false;
    }
        if (nome == "" || isNaN(m2)) {
        ExibirMensagem("Preencha media 2.");
        let media2ParaFocar = document.querySelector("#campoDeMeida2");
        media2ParaFocar.focus();
        return false;
    }
    
    return true;
}

function ResultadoDoBotaoMedia() {
    let nomeAluno = document.querySelector("#campoDeNome").value;
    console.log(nomeAluno);

    let campoMedia1 = document.querySelector("#campoDeMedia1").value;
    console.log(campoMedia1);

    let campoMedia2 = document.querySelector("#campoDeMedia2").value;
    console.log(campoMedia2);

    if (ValidaFormulario(nomeAluno, campoMedia1, campoMedia2) == false) {
        return;
    }

    media1 = Number(campoMedia1);
    media2 = Number(campoMedia2);
    let mediaDoAluno = CalcularMedia(media1, media2);

    let resultado = VerificarMedia(mediaDoAluno)
    console.log(resultado);

    let mostrarNoSite = document.querySelector("div");
    console.log(mostrarNoSite);

    mostrarNoSite.innerHTML = `<p class="${resultado}">O aluno ${nomeAluno} esta ${resultado} </p>`;
        console.log(mostrarNoSite);

}

function VerificarMedia(resultado) {
    let resposta = "aprovado";

    if (resultado >= 70) {
        return resposta;
    } else if (resultado < 70) {
        resposta = "reprovado";
        return resposta;
    }
}

function CalcularMedia(media1, media2) {
    resultado = media1 + media2;
    return resultado;
}