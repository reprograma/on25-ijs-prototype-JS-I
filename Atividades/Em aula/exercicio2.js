const gato = {
    nome: "Abel",
    dataNascimento: new Date("2021-11-15"),
    cor: ["branco", "preto"],
    historicoMedico: {
        consultas: ["2022-03-20", "2022-06-14", "2022-08-10"],
        vacinas: ["2022-08-16", "2022-09-20"]
    },
    comunicar: () => {
        const sonsDoGato = ["Miau!", "Rauwww!"];
        const somAleatorio = sonsDoGato[Math.floor(Math.random() * sonsDoGato.length)];
        return somAleatorio; 
        
    },
    peso: 5,
    dono: "Deborah",
    brincar: () => {
      const bebelel= "O gato está brincando!";
      return bebelel;
    },
    get idade() {
        const dataAtual = new Date();
        const diferenca = dataAtual.getTime() - this.dataNascimento.getTime();
        const idadeEmMilissegundos = Math.abs(diferenca);
        const idadeEmAnos = (idadeEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)
        return idadeEmAnos
    }
}

console.log(gato.comunicar())
console.log(gato.brincar())
console.log(gato.idade)



const gata = {
    nome: "Frajola",
    dataNascimento: new Date("2021-12-15"),
    cor: ["preto", "branco"],
    historicoMedico: {
        consultas: ["2022-03-20", "2022-06-14", "2022-08-10"],
        vacinas: ["2022-08-16", "2022-09-20"]
    },
    comunicar: () => {
        const sonsDoGato = ["Miau!", "Rauwww!"];
        const somAleatorio = sonsDoGato[Math.floor(Math.random() * sonsDoGato.length)];
        return somAleatorio; 
    },
    peso: 3.5,
    dono: "Deborah",
    brincar: () => {
      const fasjojola = "A gata não está brincando!";
      return fasjojola;
    },
    get idade() {
        const dataAtual = new Date();
        const diferenca = dataAtual.getTime() - this.dataNascimento.getTime();
        const idadeEmMilissegundos = Math.abs(diferenca);
        const idadeEmAnos = (idadeEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)
        return idadeEmAnos
    }
}

console.log(gata.comunicar())
console.log(gata.brincar())
console.log(gata.idade)