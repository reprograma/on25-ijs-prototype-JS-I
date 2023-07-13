
 // let
const pato = {
    nome: "JavaScript",
    dataNascimento: new Date(2011, 05, 15),
    cor: "preta",
    historicoMedico: {
        consultas:[],
        vacinas:[],
    },
    miar: () => console.log("miau"),
    idade: 15,
    comidaFavorita: "pipoca"
}

// gato.historicoMedico = {vacinas: [], castrado: false}
// gato.miar = function() { console.log("Miau")}


const gato = {
    nome: "JavaScript",
    dataNascimento: new Date(2011, 05, 15),
    cor: "preta",
    historicoMedico: {
        consultas:[],
        vacinas:[],
    },
    miar: () => console.log("miau"),
    idade: 12,
    comidaFavorita: "atum"
}
    get idade(){
        const dif = new Date() - this.dataNascimento.getTime();
        return dif /(1000 * 60 * 4 *30)
    }





function HistoricoMedico(){
this.consultas = []
}

function FazedoraDeGatos(nomeDoGato, dataString) {
    const novoGato = {}
        novoGato.nome = nomeDoGato
        novoGato.dataNascimento = newDate(dataString)
        novoGato.cor = cor
        novoGato.comunicar = () => console.log("ron ron ron")
        return novoGato
    }
   
xaxado = FazedoraDeGatos("Xaxado", "2003-02-17", "Cinza")


// FazedoraDeGatos.prototype.miar = function() { console.log("Miau")}






function PseuGatificadora(nomeDoGato, dataString, cor) {
    this.nome = nomeDoGato
    this.dataNascimento = new Date(dataString)
    this.cor = cor
    this.historico = new HistoricoMedico()
}

// Adicionamos os métodos ao Prototype
PseuGatificadora.prototype.comunicar = () => console.log("ron ron ron")
PseuGatificadora.prototype.examinar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

Object.defineProperty(PseuGatificadora.prototype, "vacina", { get: function() {
    return this.historico.vacinas
}})

tobias = new PseuGatificadora("Tobias", "2003-06-20", "cinza")


