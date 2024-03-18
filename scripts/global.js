class Simulador {
    constructor(nome, cor, ano) {
        this.selecioneVeiculo = 'Carro';
        this.nome = 'nome';
        this.cor = 'cor';
        this.ano = 'ano';
        this.atualizarVeiculo();
    }

    atualizarVeiculo() {
        this.selecioneVeiculo = document.getElementById("selecioneVeiculo").value;
        this.nome = document.getElementById("nomeInput").value;
        this.cor = document.getElementById("corInput").value;
        this.ano = document.getElementById("anoInput").value;
        this.mostrarVeiculo();
    }

    mostrarVeiculo() {
        let veiculoIcon;
        switch(this.selecioneVeiculo) {
            case "carro":
                veiculoIcon = "🚗";
                break;
            case "bicicleta":
                veiculoIcon = "🚲";
                break;
            case "caminhao":
                veiculoIcon = "🚚";
                break;
            default:
                veiculoIcon = "";
        }

        const imagemVeiculo = document.getElementById("imagemVeiculo");
        imagemVeiculo.innerHTML = `<p>${veiculoIcon}</p><p>Nome: ${this.nome}</p><p>Cor: <span style="color:${this.cor};">${this.cor}</span></p><p>Ano: ${this.ano}</p>`;
    }
}

const simulador = new Simulador();