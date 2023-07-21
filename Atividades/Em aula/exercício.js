const gato1 = {
    nome: "Cute",
    dataNascimento: new Date(2020, 5, 1),
    cor: "Mesclado",
    historicoMedico = {
        consultas: [],
        vacinas: []
    },
    comunicar: => () {
        console.log("Miau!")
    },
    get idade(){
        const dif = new Date - this.dataNascimento.getTime();
            return new Date(dif)
    }
}
 
const gato2 = {
    nome: "Fofinho",
    dataNascimento: new Date(2021, 5, 1),
    cor: "Preto",
    historicoMedico = {
        consultas: [],
        vacinas: []
    },
    comunicar: => () {
        console.log("Miau!")
    },
    get idade() {
        const dif = new Date - this.dataNascimento.getTime();
            return new Date(dif)
    }
}