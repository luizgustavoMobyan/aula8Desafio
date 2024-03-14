const simulador = {
    selecioneVeiculo: 'car',
    nome: '',
    cor: '',
    ano: '',
    constructor: function() {
        this.selecioneVeiculo = 'car';
        this.nome = '';
        this.cor = '';
        this.ano = '';
        this.atualizarVeiculo();
    },
    atualizarVeiculo: function() {
        this.selecioneVeiculo = document.getElementById("selecioneVeiculo").value;
        this.nome = document.getElementById("nomeInput").value;
        this.cor = document.getElementById("corInput").value;
        this.ano = document.getElementById("anoInput").value;
        this.mostrarVeiculo();
    },
    mostrarVeiculo: function() {
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
};

simulador.constructor();