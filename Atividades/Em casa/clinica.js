function AnimalDomestico(tipo, nome, idade, cor) {
    this.tipo = tipo,
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.historico = new HistoricoMedico(),
    this.tipo === "cachorro"?this.comunicar = () => console.log("Au au")
    :this.comunicar = () => console.log("Miau");
}

function AnimalExotico(tipo, nome, idade, cor) {
    this.tipo = tipo,
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.historico = new HistoricoMedico();
    const idadeAdulto = {
        hamster: 2,
        papagaio: 36,
        calopsita: 18
    }
    Object.defineProperty(this, "adulto", {
        get: function() {
            return this.idade >= idadeAdulto[this.tipo]? true : false
        }
    })
}

function HistoricoMedico(){
    this.consulta = [];
    this.vacina = [];
}

AnimalDomestico.prototype.vacinar =  function(vacina) {this.historico.vacina.push(vacina)}
AnimalDomestico.prototype.consultar = function(ano, mes, dia) {
    this.historico.consulta.unshift(new Date(ano, mes - 1, dia))}

AnimalExotico.prototype.vacinar =  function(vacina) {this.historico.vacina.push(vacina)}
AnimalExotico.prototype.consultar = function(ano, mes, dia) {
    this.historico.consulta.unshift(new Date(ano, mes - 1, dia))}


