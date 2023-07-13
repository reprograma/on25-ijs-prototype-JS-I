function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
}

function Gatos(nomeDoGato, idade, cor) {
    this.nome = nomeDoGato
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.castrado = true
    this.externo = false
}

function Cachorros(nomeDocachorro, idade, cor, raca) {
    this.nome = nomeDocachorro
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.castrado = true
    this.raca = raca
}

function Exoticos(nomeDoBichinho, idade, cor, respecie) {
    this.nome = nomeDoBichinho
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.adulto = true
}

Gatos.prototype.miar = () => console.log("miaauu")
Gatos.prototype.vacinar = function vacinar(vacina) {
    this.historico.vacinas.push(vacina)
}
Gatos.prototype.consultar = function (dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

Cachorros.prototype.latir = () => console.log("auu auu")
Cachorros.prototype.vacinar = function vacinar(vacina) {
    this.historico.vacinas.push(vacina)
}
Cachorros.prototype.consultar = function (dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

Exoticos.prototype.consultar = function (dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}
Exoticos.prototype.vacinar = function vacinar(vacina) {
    this.historico.vacinas.push(vacina)
}


