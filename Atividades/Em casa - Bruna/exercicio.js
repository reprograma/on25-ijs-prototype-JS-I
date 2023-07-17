//Historico médico
function historicoMedico() {
    this.consultas = []
    this.vacinas = []
    this.procedimentos = []
}
//construtor cat
function gerandoGatos(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new historicoMedico();
}

gerandoGatos.prototype.miar = function() {
    console.log("miau")
}
gerandoGatos.prototype.fazerConsulta = function(consulta) {
    this.historico.consultas.unshift(consulta)
}
gerandoGatos.prototype.fazerVacina = function(vacina) {
    this.historico.vacinas.push(vacina)
}
gerandoGatos.prototype.fazerProcedimentos = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo: tipo, motivo: motivo })
}

let agatha = new gerandoGatos("agatha", 1, "branca", true, true)
agatha.fazerConsulta("16/07/2023")
agatha.fazerVacina("A5")
agatha.fazerProcedimentos("exame de sangue", "falta de apetite")

//construtor dog
function gerandoCachorros(nome, idade, cor, castrado, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = new historicoMedico();
}

gerandoCachorros.prototype.latir = function() {
    console.log("Au")
}
gerandoCachorros.prototype.fazerConsulta = function(consulta) {
    this.historico.consultas.unshift(consulta)
}
gerandoCachorros.prototype.fazerVacina = function(vacina) {
    this.historico.vacinas.push(vacina)
}
gerandoCachorros.prototype.fazerProcedimentos = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo: tipo, motivo: motivo })
}

let asia = new gerandoCachorros("asia", 4, "bege", false, "pug")
asia.fazerConsulta("15/07/2023")
asia.fazerVacina("raiva")
asia.fazerProcedimentos("exame de sangue", "falta de apetite")