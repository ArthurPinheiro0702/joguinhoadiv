const campoInput = document.getElementById(`inputField`);
const botaoEnviar = document.getElementById(`submitButton`);
const textoA = document.getElementById(`meuH3`)
const btnSim = document.getElementById(`btnSim`);
const btnNao = document.getElementById(`btnNão`);
const btnJogarDeNovo = document.getElementById(`jogardeNovo`);
const container = document.querySelector(`.container`)
const numMin = 1;
const numMax = 100;
running = true;
let resposta = Math.floor(Math.random() * 100) + 1;
console.log(resposta);


botaoEnviar.onclick = function() {
    if(campoInput.value == resposta) {
        textoA.innerHTML = (`Parabéns! Você acertou o número ${resposta}! 
        🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉`)
        campoInput.value = ``;
        textoA.style.backgroundColor = `#00FF00`;
        campoInput.style.display = `none`
        botaoEnviar.style.display = `none`;
        btnNao.style.display = `block`;
        btnSim.style.display = `block`;
        btnJogarDeNovo.style.display = `block`;
    }
    else if (campoInput.value < numMin || campoInput.value > numMax) {
        textoA.innerHTML = `Por favor, insira um número entre ${numMin} e ${numMax}.`
        campoInput.value = ``;
    }
    else if (campoInput.value != Number(campoInput.value)) {
        textoA.innerHTML = `Por favor, insira um número válido.`
        campoInput.value = ``;
    }
    else if (campoInput.value < resposta) {
        textoA.innerHTML = `Tente um número MAIOR!`
        campoInput.value = ``;
    } 
    else if(campoInput.value > resposta) {
        textoA.innerHTML = `Tente um número MENOR!`
        campoInput.value = ``;
    }
}

campoInput.onclick = function() {
    textoA.innerHTML = `Digite um número de 1 a 100!`
}

btnSim.onclick = function() {
    resposta = Math.floor(Math.random() * 100) + 1;
    console.log(resposta);
    textoA.innerHTML = `Digite um número de 1 a 100!`
    campoInput.value = ``;
    campoInput.style.display = `block`;
    botaoEnviar.style.display = `block`;
    btnNao.style.display = `none`;
    btnSim.style.display = `none`;
    btnJogarDeNovo.style.display = `none`;
    textoA.style.backgroundColor = `#FFFFFF`;
}

btnNao.onclick = function() {
    textoA.innerHYML = `Obrigado por jogar!`;
    campoInput.value = ``;
}








