function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.vacinar = function(vacina) {
    return this.vacinas.push(vacina)
  }
  // Não consegui fazer a função
  this.consultar = function (data) {
    return this.consultas.push(new Date(data));
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

mingau.historico.vacinar("raiva");

console.log(mingau.historico.consultar("2008-05-25"));
console.log(mingau.historico.consultas);


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
  this.especie = especieDoAnimalExotico,
  this.nome = nomeDoAnimalExotico,
  this.nascimento = new Date(dataString),
  this.cor = corDoAnimalExotico,
  this.historico = new HistoricoMedico(),
  this.adulto = false

  Object.defineProperty(this, "idade", {
    get: function () {
      const diferenca = new Date() - this.nascimento;
      const milisegundosPorMes = 30 * 24 * 60 * 60 * 1000;
      return this.idade = Math.round(diferenca/milisegundosPorMes)
    }
  })

  Object.defineProperty(this, 'adulto', {
    get: function() {

      if(this.especie === "hamster" && this.idade >= 2 || this.especie === "papagaio" && this.idade >= 36 || this.especie === "calopsita" && this.idade >= 18  ) {
        return this.adulto = true
      }else {
        return this.adulto = false
      }
    }
  })

}

let hamtaro = new AnimaisExoticos(
  "hamster",
  "Hamtaro",
  "2023-07-01",
  "amarelo"
);

console.log(hamtaro);
console.log(hamtaro.idade);
console.log(hamtaro.adulto);


let loro = new AnimaisExoticos("papagaio", "Loro", "1996-02-28", "vermelho");
console.log(loro);
console.log(loro.idade);
console.log(loro.adulto);

let sofia = new AnimaisExoticos("calopsita", "Sofia", "2022-08-18", "azul")

console.log(sofia);
console.log(sofia.idade);
console.log(sofia.adulto);