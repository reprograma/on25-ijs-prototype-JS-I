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

function Exoticos(nomeDoBichinho, idade, cor, especie) {
    this.nome = nomeDoBichinho
    this.idade = idade
    this.cor = cor
    this.historico = new HistoricoMedico()
    this.especie = especie
    this.adulto = true
}

let novoGato = new Gatos("Charmoso", 36, "branco" ) //idade em meses
let novoCachorro = new Cachorros("Bóris", 36, "branco","shitzu") //idade em meses
let novoExotico = new Exoticos("rex", 26, "marrom", "hamster" ) //idade em meses

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

Exoticos.prototype.getAdulto = function () {
    if (this.especie === "hamster") {
        return this.idade >= 2;
    }
    if (this.especie === "papagaio") {
        return this.idade >= 36;//considerando receber em meses
    }
    if (this.especie === "calopsita") {
        return this.idade >= 18;
    }
}
