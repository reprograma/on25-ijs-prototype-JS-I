// Nome: Laíssa Saraiva

const gato = {
  nome:"Mimi",
  dataDeNascimento: new Date(1998, 7, 12),
  cor: "amarelo",
  historicoMedico: {
    consultas: [],
    vacinas: []
  },
  miar() {
    console.log("Miau!")
  }
}


console.log(gato.miar());

gato = {
  nome:"Mimi",
  dataDeNascimento: new Date(1998, 7, 12),
  cor: "amarelo",
  historicoMedico: {
    consultas: [],
    vacinas: []
  },
  miar() {
    console.log("Miau!")
  },
  get idade(){
    const diferenca = new Date() - this.dataDeNascimento.getTime();
    return new Date(diferenca);
  }
}