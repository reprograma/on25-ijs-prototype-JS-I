
const gato = {
    nome: "Saturno",
    dataNascimento: new Date(2002, 11, 2),
    cor: "Caramelo",
    historicoMedico: { consultas: [], vacinas: [] },
    miar: () => { console.log("Miauuu") },

    get idade() {
         const dif = new Date() - this.dataNascimento;
         return dif / (1000 * 60 * 60 * 24 * 30)
    },
};

