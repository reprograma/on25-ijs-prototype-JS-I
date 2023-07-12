function Gatos(nomeDoGato, idade, cor) {
    this.nome = nomeDoGato
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.castrado = true
    this.externo = false
}

Gatos.prototype.miar = () => console.log("miaauu")

function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
}

Gatos.prototype.examinar = function (dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

function Cachorros(nomeDocachorro, idade, cor, raca) {
    this.nome = nomeDoGato
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.castrado = true
    this.raca = raca
}

Cachorros.prototype.latir = () => console.log("auu auu")

Cachorros.prototype.examinar = function (dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

function Exoticos(nomeDoBichinho, idade, cor, respecie) {
    this.nome = nomeDoBichinho
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.adulto = true
}

Exoticos.prototype.examinar = function (dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}


