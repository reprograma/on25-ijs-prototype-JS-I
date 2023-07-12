const gato = {
    nome: "chule",
    dataNascimento: new Date(1991, 10, 8),
    cor: "gold",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },
    comunicar: () => { console.log("Miauuu")}
}

const cat = {
    nome: "chule",
    dataNascimento: new Date(1991, 10, 8),
    cor: "gold",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },
    comunicar: () => { console.log("Miauuu")},
    get idade () {
        const dif = new Date() - this.dataNascimento.getTime();
        return dif / (1000 * 60 * 60 * 24 * 30)

    }
}

// Crie um construtor funcional para seu modelo de gato da questão 1. Ele deve incluir duas modificações: um método `examinar`, que adiciona a data de uma nova consulta ao histórico médico, e uma propriedade "fantasma" `vacinas` que na verdade é composta por um `getter` que lê do histórico médico e um `setter` que escreve no histórico.

function FuncGatificadora(nomeDoGato, dataString, cor,) {
    const novoGato = {
        get vacinas() { return this.historico.vacinas},
        set vacinas(valor) {this.historico.vacinas.push(valor) }
    }

    novoGato.nome = nomeDoGato
    novoGato.dataNascimento = new Date(dataString)
    novoGato.cor = cor
    novoGato.historico = new HistoricoMedico()
    novoGato.comunicar = () => console.log("ron ron ron")
    novoGato.examinar = function examinar(){
        this.historico.consultas.push(new Date())
    }

    return novoGato 
}

tobias = FuncGatificadora("Tobias", "2003-06-20", "cinza")
tobias.examinar()
tobias.historico
tobias.vacinas
tobias.vacinas = ["raiva"]

//6. **[Desafio]** Converta seu construtor da questão 5 para a estrutura pseudoclássica, mas modificando o histórico médico para ser seu próprio modelo também com um construtor pseudoclássico.

function PseudoGatificadora(nomeDoGato, dataString, cor,) {

    this.nome = nomeDoGato
    this.dataNascimento = new Date(dataString)
    this.cor = cor
    this.historico = new HistoricoMedico()
}

PseudoGatificadora.prototype.comunicar = () => {
    console.log("ron ron ron")
}
PseudoGatificadora.prototype.examinar = function(dataConsulta){this.historico.consultas.push(dataConsulta)}

Object.defineProperty(PseuGatificadora.prototype, "vacina", { get: function() {
    return this.historico.vacinas
}})
Object.defineProperty(PseuGatificadora.prototype, "vacina", { set: function(value) {
    return this.historico.vacinas.push(value)
}})

tobias = new PseuGatificadora("Tobias", "2003-06-20", "cinza")
tobias.examinar(new Date())
tobias.historico.consultas
tobias.vacinar = ["gripe"]