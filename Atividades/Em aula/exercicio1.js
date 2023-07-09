const gato1 = {
    nome: "Garfield",
    dataNascimento: new Date(2020, 6, 8), 
    cor: "tigrado laranja",
    historioMedico: {
        consultas: [],
        vacinas: ['raiva']
    },
    comunicar: function() {
        console.log("rrrrrr")
    }
};

const gato2 = {
    nome: "Frajola",
    dataNascimento: new Date(2021, 6, 8), 
    cor: "preto e branco",
    historioMedico: {
    consultas: [],
    vacinas: ['raiva']
    },
    comunicar: function() {
        console.log("miiiiaaauuu")
    },
    get idade() {
        hoje = new Date();
        return (hoje - this.dataNascimento)/(1000*60*60*24*30)
    }
}

console.log(gato1)
console.log(gato2)

Object.defineProperty(gato1, 'idade', {
    get: function() { 
        hoje = new Date();
        return (hoje - this.dataNascimento)/(1000*60*60*24*30)
    }
  });

console.log(gato1.idade)
console.log(gato2.idade)