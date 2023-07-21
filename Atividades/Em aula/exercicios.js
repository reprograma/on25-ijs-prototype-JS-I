let gato = {
    nome: "Nida",
    dataNascimento: new Date(2022, 2, 10),
    cor: "bicolor",
    historicoMedico: {
        consultas: [],
        vacinas: ["raiva"],
    },
    comunicar: () => console.log("ron ron ron")
};

let gato2 = {
    nome: "Marrie",
    dataNascimento: new Date(2021, 6, 25),
    cor: "branco",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },
    comunicar: () => console.log("Miau")
};

gato = {
    nome: "Nida",
    dataNascimento: new Date(2022, 2, 10),
    cor: "bicolor",
    historicoMedico: {
        consultas: [],
        vacinas: ["raiva"],
    },
    comunicar: () => console.log("ron ron ron"),
    get idade () {
        const dif = new Date() - this.dataNascimento.getTime();
        return dif / (1000 * 60 * 60 * 24 * 30)
    }
};
