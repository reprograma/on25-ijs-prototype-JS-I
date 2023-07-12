// liçao da aula

const gato = {
  nome: "Crystal",
  dataNacimento: new Date(2000, 10, 07),
  get idade() {
    const dif = new Date() - this.dataNacimento.getTime();
    return dif / (100 * 60 * 60 * 24 * 30);
  }, // getter é do ex 2
  cor: "cinza",
  historicoMedico: { consultas: [], vacina: [] },
  comunicar: () => {
    console.log("miau");
  },
};

const vacinacao = (nomeDaVacina) => {
  this.historicoMedico.vacina.push(nomeDaVacina);
};

// aula

function Gatificador(nomeDoGato) {
  let novoGato = {};
  novoGato.nome = nomeDoGato;
  novoGato.miar = function () {
    console.log("miau");
  };
  return novoGato;
}

let tobias = Gatificador("Tobias");

console.log(tobias);

//////////////////////////////////////////////////

const metodosGatos = {
  miar: function () {
    console.log("miau");
  },
  ronronar: function () {
    console.log("ron ron ron");
  },
};

function FazedoraDeGatos(nome) {
  const novoGato = {
    nome,
    cor,
  };
  Object.assign(novoGato, metodosGatos);
  return novoGato;
}

////////////////////////////////////////////////

const metodosGatos2 = {
  miar: function () {
    console.log("miau");
  },
  ronronar: function () {
    console.log("ron ron ron");
  },
};

function FazedoraDeGatos2(nome) {
  const novoGato = Object.create(metodosGatos2);
  novoGato.nome = nome;

  return novoGato;
}
