// NOME: Priscila Baer Gomes Vieira


/*
Imagine que você está criando o sistema para uma clínica veterinária. 
Para isso, precisamos de construtores pseudoclássicos para quatro tipos e objeto diferentes: `Gatos`, `Cachorros`, `Exóticos` e `HistoricoMedico`.
*/



function HistoricoMedico(){
  this.consultas= [],
  this.vacinas= []
}

function Gatificadora(nomeDoGato, dtNasc, cor) {
  this.nome = nomeDoGato
  this.dataNascimento = new Date(dtNasc)
  this.cor = cor
  this.historico = new HistoricoMedico()
}

HistoricoMedico.prototype.vacinar = function(vacina) {
  this.historico.vacinas.push(vacina)
}

Gatificadora.prototype.comunicar = function() {
  console.log("ron ron ron")
}
Gatificadora.prototype.examinar = function(dataConsulta) {
   this.historico.consultas.unshift(dataConsulta)
}


lola = new Gatificadora("Lola", "2011-01-20", "branca")

lola.historico.consultas("2015-03-15")

lola.historico.vacinas("raiva")


function Dogficadora(nomeDoCao, dtNasc, cor) {
  this.nome = nomeDoCao
  this.dataNascimento = new Date(dtNasc)
  this.cor = cor
  this.historico = new HistoricoMedico()
}

Dogficadora.prototype.comunicar = function() {
  console.log("auf auf auf")
}
Dogficadora.prototype.examinar = function(dataConsulta) {
   this.historico.consultas.unshift(dataConsulta)
}


mike = new Dogficadora("Mike", "2011-01-20", "tigrado")

mike.historico.consultas("2019-10-05")

mike.historico.vacinas("raiva")


function Exoticos(nomeDoExotico, dtNasc, cor) {
  this.nome = nomeDoExotico
  this.dataNascimento = new Date(dtNasc)
  this.cor = cor
  this.historico = new HistoricoMedico()
}


Exoticos.prototype.comunicar = function() {
  console.log("paco paco")
}
Exoticos.prototype.examinar = function(dataConsulta) {
   this.historico.consultas.unshift(dataConsulta)
}


paco = new Exoticos("Paco", "2001-11-18", "bandeira")

paco.historico.consultas("2009-12-05")

paco.historico.vacinas("raiva")