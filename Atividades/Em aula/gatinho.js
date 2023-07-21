let gatinho1 = {
  nome: "Marshmallow da Silva",
  dataNascimento: new Date(2021, 1, 4),
  cor: "branco e amarelo",
  historicoMedico: {
    consultas: [],
    vacinas: [],
  },
  comunicar: () => console.log("miau miau"),
};

let consultas = [];
let vacinas = [];

let gatinho2 = new Object();
gatinho2.nome = "Cenoura Paixão";
gatinho2.dataNascimento = new Date(2022, 11, 6);
gatinho2.cor = "amarelo";
gatinho2.historicoMedico = new Object();
gatinho2.historicoMedico.consultas = consultas;
gatinho2.historicoMedico.vacinas = vacinas;
gatinho2.comunicar = () => console.log("miau miau");

dog = {
  nome: "Faruk",
  dataNascimento: new Date(2008, 12, 17),
  cor: "Amarelo",
  historicoMedico: {
    consultas: [],
    vacinas: [],
  },
  comunicar: () => console.log("au au"),
  get idade() {
    const dif = new Date() - this.dataNascimento.getTime();
    return dif / (1000 * 60 * 60 * 24 * 30);
  },
};
