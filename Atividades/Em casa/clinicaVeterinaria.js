function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
}

function FormaDeGatos(nomeDoGato, dataString, corDoGato) {
  this.nome = nomeDoGato;
  this.nascimento = new Date(dataString);
  this.cor = corDoGato;
  this.miar = function () {
    return console.log("Miau!");
  };
  this.historico = new HistoricoMedico();
}

let mingau = new FormaDeGatos("Mingau", "2005-07-25", "branca");

console.log(mingau.miar());

function FormaDeCachorros(nomeDoCachorro, dataString, corDoCachorro) {
  this.nome = nomeDoCachorro;
  this.nascimento = new Date(dataString);
  this.cor = corDoCachorro;
  this.latir = function () {
    return console.log("Au Au!");
  };
}

let toto = new FormaDeCachorros("Totó", "2018-4-23", "preto");

console.log(toto.latir());
console.log(mingau, toto);

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
