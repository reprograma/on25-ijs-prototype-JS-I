// NOME: Brena O'Dwyer

function FazedoraGatos(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico();
}

FazedoraGatos.prototype.miar = function() {
    console.log("Miau")
    return "Miau"
    
}

function FazedoraCachorros(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico();
}

FazedoraCachorros.prototype.latir = function() {console.log("Au au")}

function FazedoraExoticos(nome, idade, cor, especie, adulto) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;
    this.historico = new HistoricoMedico();
}

FazedoraExoticos.prototype = {
    get function() {
        if (this.especie === "hamster") {
            return this.idade >= 2;
        } else if (this.especie === "papagaio") {
            return this.idade >= 36;
        } else if (this.especie === "calopsita") {
            return this.idade >= 18;
        } else {
            return false;
        }
    }
}

function HistoricoMedico() {
    this.consultas =[]
    this.vacinas = []
    this.procedimentos = []
}

HistoricoMedico.prototype.vacinar = function(vacina) {this.vacinas.push(vacina)}

HistoricoMedico.prototype.consultar = function(consulta) {this.consultas.unshift(consulta)}

let nina = new FazedoraGatos("Nina", 18, "frajola", true, false)

nina.miar()

nina.historico.vacinar("raiva")

let iogurte = new FazedoraExoticos("iogurte", 19, "branco", "hamster", true)

console.log(iogurte.adulto)

module.exports = {FazedoraGatos, FazedoraCachorros, FazedoraExoticos, HistoricoMedico}