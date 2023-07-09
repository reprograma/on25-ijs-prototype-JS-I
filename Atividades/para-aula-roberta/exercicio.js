/* 1. Comece criando um objeto `gato` com notação literal. Ele deve ter propriedades para `nome`, `dataNascimento` (um objeto `Date`), `cor`, e um objeto de historicoMedico (com uma listagem de consultas e outra de vacinas), e um método `comunicar()` que faz o gatinho miar ou ronronar. Você também pode adicionar outras propriedades que quiser. Crie dois gatinhos seguindo esse modelo.
 */

/* const gato = {
  nome: "Jade",
  cor: "garfield",
  dataNascimento: new Date(1989, 9, 23),
  historicoMedico: {
    listagemConsultas: [],
    listagemVacinas: [],
  },
  comunicar: () => console.log("au au"),
}; */

/* 
2. Modifique o objeto definido na questão anterior para ter uma nova propriedade `idade`. Ela deve ser um `getter` que utiliza a data de nascimento. */

const gato = {
  nome: "Jade",
  cor: "garfield",
  dataNascimento: new Date(2019, 9, 23),
  historicoMedico: {
    listagemConsultas: [],
    listagemVacinas: [],
  },
  comunicar: () => console.log("miaaaaau"),
  get idade() {
    const dif = new Date() - this.dataNascimento.getTime();
    return dif / (1000 * 60 * 60 * 24 * 30);
  },
};

console.log(gato.idade);
