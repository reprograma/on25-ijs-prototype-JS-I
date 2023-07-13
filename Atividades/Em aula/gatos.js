let gato = { 
  nome = "Lola",
  dataNascimento = new Date(2003, 05, 01),
  cor = "Caramelo",
  historicoMedico : {
    consultas: [],
    vacinas: [],
  },
  comunicar: () => console.log("miauuu"),
  get idade (){
    const dif = new Date() - this.dataNascimento.getTime();
    return dif / (1000 * 60 * 24 * 30)
  }
}



