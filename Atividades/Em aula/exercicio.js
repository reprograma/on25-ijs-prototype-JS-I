let gato = {
    nome: "Klaus",
    dataNascimento: new Date(2016, 5, 26),
    cor: "preto",
    historicoMedico: {
        consultas: [],
        vacinas: []
    },
    comunicar: () => 
        console.log(meow)
}

gato = {
   ...gato,
    get idade () {
        const dif = new Date () - this.dataNascimento.getTime();
        return dif / (1000 * 60 * 60 * 24 * 30)
    }
}

console.log(gato["nome"])