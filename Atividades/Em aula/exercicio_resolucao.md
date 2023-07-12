````1- criar objeto, objeto com lista e método``
let gato = {
    nome: "Garfield",
    dataNascimento = new Date(2010, 10, 6), 
    cor: "laranja",
    comidaFavorita: "lasanha",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },
    comunicar: () => console.log("Miauu")
};

```idade```
let gato = {
    nome: "Garfield",
    dataNascimento = new Date(2010, 10, 6), 
    cor: "laranja",
    comidaFavorita: "lasanha",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },
    comunicar: () => console.log("Miauu"),
    get idade () {
        const diferenca = new Date() - this.dataNascimento.getTime();
        return diferenca / (1000 * 60 * 60 * 24 * 30)
    }
};

```criar novos gatos```
function FazedoraDeGatos(nome) {
    const novoGato = {
        nome,
        miar: function() {
            console.log("Miau")}
    }
    return novoGato
};

let tobias =  FazedoraDeGatos("Tobias")
console.log(tobias)

//copio um gato que já existe
//const outroGato = {...gato}


````construtor funcional: ocupa espaço na memória com objetos iguais porque crio função nova``
function FazedoraDeGatos(nomeDoGato) {
    const novoGato = {}
    novoGato.nome = nomeDoGato,
    novoGato.miar = function() {
        console.log("Miau")}                
        return novoGato
};

let princeso =  FazedoraDeGatos("Princeso")
console.log(princeso)

`````construtor prototipal, parei de duplicar``
function FazedoraDeGatos(nome, cor) {
    const novoGato = Object.create(metodosGatos)
    novoGato.nome = nome
    novoGato.cor = cor
    return novoGato
}

tobias = FazedoraDeGatos("Tobias", "laranja")
tobias.__proto__

metodosGatos.miar = () => console.log("miauzinho")
tobias.miar() //miauzinho