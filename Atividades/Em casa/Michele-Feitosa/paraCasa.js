
function historicoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

function vacinas(valor){
    this.historico.vacinas.push(valor)
}

function consultas(dataDaConsulta){
   this.historico.consultas.push(dataDaConsulta)
}

function Gatificadora (nome, cor, idade, castrado){
    this.nome = nome,
    this.cor = cor,
    this.idade = idade, 
    this.castrado = castrado,
    this.historico = new historicoMedico()
}

let marciaTeresa = new Gatificadora("Marcia Teresa", "tigrada", 16, true);

Gatificadora.prototype.miar = function() { console.log("Miau")};
Gatificadora.prototype.vacinar= vacinas("raiva");


function Doguinhos(nome, cor, idade, castrado, raça){
    this.nome = nome,
    this.cor = cor,
    this.idade = idade, 
    this.castrado = castrado,
    this.raça = raça,
    this.historico = new historicoMedico()
}

 let safira = new doguinhos ("safira", "preto e cinza", 20, false, "vira lata"); //chamando a função

Doguinhos.prototype.latir= function() { console.log("Au Au")};

function Exoticos (nome, idade, cor, especie, adulto){
    this.nome = nome,
    this.idade = idade, 
    this.cor = cor,
    this.especie = especie,
    this.adulto = adulto,
    this.historico = new historicoMedico()
}

let franklin = new Exoticos("Franklin", 7, "cinza", "coelho", true);

// NÃO CONSEGUI FAZER ESSA PARTE - Animais exóticos precisam de um `getter` para a propriedade `adulto`, que retorne `true` caso o animal já seja um adulto para a espécie dele e `false` caso contrário. Sua implementação pode cobrir apenas as seguintes espécies: hamster (adulto aos 2 meses), papagaio (aos 3 anos) e calopsita (18 meses). 