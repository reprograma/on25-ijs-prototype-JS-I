function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}

let gatos = new Gato("Kissa", 17, "preta", true, false);
function Gato(nome, idade, cor, castrado, externo) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.externo = externo;
  this.historico = new HistoricoMedico();
}
Gato.miar = function () {
  console.log("Miau");
};

let cachorros = new Cachorro("Mel", 18, "branca", true, "estopinha");
function Cachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = new HistoricoMedico();
}
Cachorro.latir = function () {
  console.log("AuAu");
};

let exóticos = new Exótico("Filó", "24", "marrom", "capivara", true);
function Exótico(nome, idade, cor, especie, adulto) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico();
}

Object.defineProperty(exóticos.prototype, "adulto", {
  get() {
    if (this.especie === "hamster") {
      return this.idade >= 2;
    } else if (this.especie === "papagaio") {
      return this.idade >= 36;
    } else if (this.especie === "capivara") {
      return this.idade >= 15;
    } else {
      return false;
    }
  },
});

function vacinar(Vacinas) {
  this.historico.vacinas.push(Vacinas);
}

vacinar.call(gatos, "raiva");
vacinar.call(cachorros, "vacina Dog");
vacinar.call(exóticos, "vacina Carrapato Estrela");

function procedimento(exames) {
  this.historico.procedimento.puch(exames);
}
procedimento.call(gatos, "Ultrasson");
procedimento.call(cachorros, "Raio X");
procedimento.call(exóticos, "Emograma completo");

function consulta(dataConsulta) {
  this.historico.consultas.push(dataConsulta);
}
consulta.call(gatos, "12/07/23");
consulta.call(cachorros, "11/07/23");
consulta.call(exóticos, "13/07/23");

/*function consultaEncaixe(dataString) {
  const encaixe = new Date(dataString);
  return encaixe;
}*/
