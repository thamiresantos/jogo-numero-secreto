const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br' //idioma
recognition.start()

recognition.addEventListener('result', onSpeak) 

//função para aparecer o resultado do reconhecimento de voz
function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido (chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

//evento. Quando a função acabar ele ligar mais uma vez o reconhecimento de voz
recognition.addEventListener('end', () => recognition.start())


