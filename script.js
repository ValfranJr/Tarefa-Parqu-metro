//Definir classe Parquimetro
class Parquimetro {
    valor;
    constructor() {
        this.valor = 0;
    }
    //Calcula o tempo disponível
    calcularTempo() {
        if (this.valor < 1) {
            return {
                tempo: 0,
                troco: 0,
                mensagem: "Valor inserido é inválido"
            }
        } else if (this.valor < 1.75) {
            return {
                tempo: 30,
                troco: this.valor - 1.00,
                mensagem: "Você tem 30 minutos"
            }
        } else if (this.valor < 3.00) {
            return {
                tempo: 60,
                troco: this.valor - 1.75,
                mensagem: "Você tem 60 minutos"
            }
        } else {
            (this.valor >= 3.00)
            return {
                tempo: 120,
                troco: this.valor - 3.00,
                mensagem: "Você tem 120 minutos"
            }

        }
    }
}
//Define um painel parquimetro
class painelParquimetro {
    constructor(parquimetro) {
        this.parquimetro = parquimetro;
        this.valorInserido = document.getElementById("valor");
        this.campoTempo = document.getElementById("tempo");
        this.campoTroco = document.getElementById("troco");
    }
    //Pega valor e exibe resultado
    inserirValor() {
        let valor = parseFloat(this.valorInserido.value);
        this.parquimetro.valor = valor;
        let resultadoTempo = this.parquimetro.calcularTempo();
        //Exibe o resultado do tempo de acordo com valor e o Troco
        this.campoTempo.textContent = `Seu tempo é: ${resultadoTempo.tempo} minutos`;
        if (resultadoTempo.tempo > 0) {
            this.campoTroco.textContent = `Troco: R$ ${resultadoTempo.troco.toFixed(2)}`;
        } else {
            this.campoTroco.textContent = ""; // limpa se for valor inválido
        }
    }
}
const parquimetro = new Parquimetro();
const painel = new painelParquimetro(parquimetro);