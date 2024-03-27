const valorConversao = {
    real: {
        euro: 0.19,
        dólar: 0.20
    },
    dólar: {
        real: 4.99,
        euro: 0.92
    },
    euro: {
        real: 5.40,
        dólar: 1.08
    }
}

function converter() {

    let valorUsuário = document.getElementById("valorEntrada").value;

    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    if(moeda1 == moeda2) {
        alert("As moedas são iguais!!!");
        return;
    }

    let resultado = valorUsuário * valorConversao[moeda1][moeda2];
    
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = resultado;
}

function limpar() {
    let paragrafoResultado = document.getElementById("resultado")
    paragrafoResultado.textContent = "";

    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";
}

function inverter(){
    let valorMoeda1 = document.getElementById("moeda1").value;
    let valorMoeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = valorMoeda2;
    document.getElementById("moeda2").value = valorMoeda1;
}