const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

const lancamento = "17 oct 2023"

function countDown() {
    const dataLancamento = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLancamento - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; 
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `${finalDias}D`
    hora.innerHTML = formatoTempo(`${finalHoras}H`)
    minuto.innerHTML = formatoTempo(`${finalMinutos}M`)
    segundo.innerHTML = formatoTempo(`${finalSegundos}S`)
}

const formatoTempo = (tempo) => {return tempo < 10? `0${tempo}` : tempo;}

countDown();
setInterval(countDown, 1000);

function Selector(selector) {
    let element = document.querySelector(selector)
    element.classList.toggle("card-highlight")
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key
        var code = event.code
        //Alert the key name and key code  on keydown
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`)
    }, false)
}

function AddKeyboardEventListeners(){
    document.addEventListener('keydown', (event) => {
        
        let ingresso1 = document.getElementById("quinta")
        let ingresso2 = document.getElementById("sexta")
        let ingresso3 = document.getElementById("sabado")
        let ingresso4 = document.getElementById("domingo")

        let code = event.code
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit4') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }
    }, false)
}
AddKeyboardEventListeners();