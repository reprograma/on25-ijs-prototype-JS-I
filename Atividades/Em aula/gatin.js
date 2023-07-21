const gato = {
    nome: "Cookie",
    dataNascimento: new Date(1963, 11, 2),
    cor: "marrom",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },

    get idade() {
        const dataAtual = new Date();
        return dataAtual - this.dataNascimento;
    },

    comunicar: function() {
        console.log("miau");       
    }
}

