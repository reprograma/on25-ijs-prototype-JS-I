// function HistoricoMedico(){
//     this.consultas = [];
//     this.vacinas = [];
//     this.procedimentos = [{
//         tipo: [],
//         motivo: []
//     }]};

function HistoricoMedico(){
    this.consultas = [];

};

// instanciação funcional -  desafio 4

function FunGatificadora(nomeGato, dataString) {
    const novoGato = {
        get vacinas() { return this.historico.vacinas },
        set vacinas(valor) { this.historico.vacinas.push(valor)}
    }
    novoGato.nome = nomeGato
    novoGato.dataNascimento = new Date(dataString)
    novoGato.cor = cor
    novoGato.historico = new HistoricoMedico()
    novoGato.comunicar = () => console.log("ron ron ron")
    novoGato.examinar = function examinar() {
        this.historico.consultas.push(new Date())
    }

    return novoGato;
}

tobias = FunGatificadora("Tobias", "2000-06=20", "cinza")

tobias.examinar()
tobias.historico
tobias.vacinas
tobias.vacinas = ["raiva"]

// instanciação pseudoclássica - desafio 6

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
};

function PseuGatificadora(nomeGato, dataString) {
    
    this.nome = nomeGato
    this.dataNascimento = new Date(dataString)
    this.cor = cor
    this.historico = new HistoricoMedico()
    // this.comunicar = () => console.log("ron ron ron")
    // this.examinar = function examinar(dataConsulta) {
    //     this.historico.consultas.push(dataConsulta)
    // }

}
// Adcicionamos os metodos aos prototype

tobias = new PseuGatificadora("Tobias", "2000-06=20", "cinza")

tobias.examinar(new Date());

PseuGatificadora.prototype.comunicar = () => console.log("ron ron ron")

PseuGatificadora.prototype.examinar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

Object.defineProperty(PseuGatificadora.prototype, "vacina", { get: function() {
    return this.historico.vacinas
}})

tobias = new PseuGatificadora("Tobias", "2003-06-20", "cinza")

tobias.vacinas = ["raiva"]
