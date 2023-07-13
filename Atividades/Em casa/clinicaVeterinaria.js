function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.vacinar = function(vacina) {
    return this.vacinas.push(vacina)

  }
}

function FormaDeGatos(nomeDoGato, dataString, corDoGato) {
  this.nome = nomeDoGato;
  this.nascimento = new Date(dataString);
  this.cor = corDoGato;
  this.historico = new HistoricoMedico();
  this.miar = function () {
    return console.log("Miau!");
  };
}

let mingau = new FormaDeGatos("Mingau", "2005-07-25", "branca");

console.log(mingau.historico.vacinas);

mingau.historico.vacinar("raiva");

console.log(mingau.historico.vacinas);



function FormaDeCachorros(nomeDoCachorro, dataString, corDoCachorro) {
  this.nome = nomeDoCachorro;
  this.nascimento = new Date(dataString);
  this.cor = corDoCachorro;
  this.historico = new HistoricoMedico();
  this.latir = function () {
    return console.log("Au Au!");
  };
}

let toto = new FormaDeCachorros("Totó", "2018-4-23", "preto");

toto.historico.vacinar("gripe");

console.log(mingau.historico.vacinas, toto.historico.vacinas);

function AnimaisExoticos(especieDoAnimalExotico, nomeDoAnimalExotico,dataString,corDoAnimalExotico) {
  this.especie = especieDoAnimalExotico;
  this.nome = nomeDoAnimalExotico;
  this.nascimento = new Date(dataString);
  this.cor = corDoAnimalExotico;
}

let hamtaro = new AnimaisExoticos(
  "hamster",
  "Hamtaro",
  "2023-07-01",
  "amarelo"
);

console.log(hamtaro);
