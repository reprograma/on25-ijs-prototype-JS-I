function historicoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

Animais.prototype.miar = function() {  
    (this.especie === 'felina') ? console.log('Miau') : console.log('Não é um gato');  
};

Animais.prototype.latir = function() {  
    (this.especie === 'canina') ? console.log('Au au') : console.log('Não é um cachorro');  
};

Animais.prototype.vacinar = function(nome_vacina) {  
    this.historico.vacinas.push(nome_vacina); 
};

Animais.prototype.consultar = function(data_consulta, tipo, motivo) {  
    this.historico.consultas.unshift(data_consulta); 
    this.historico.procedimentos.unshift({tipo: tipo, motivo: motivo}); 
};

function Animais(nome, idade, cor, castrado, raca, especie) { 
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.especie = especie;
    this.historico = new historicoMedico();
    this.adulto; 
} 

Object.defineProperty(Animais.prototype, "adulto", {
    get: function(){
        if (this.especie === "hamster" && this.idade >= 2) {
            return true;
        } else if (this.especie === "papagaio" && this.idade >= 36) {
            return true;
        } else if (this.especie === "calopsita" && this.idade >= 18) {
            return true;
        } else {
            return false;
        }
    }
}) 

//Exercicio 1 a 3
const animal1 = new Animais('Dorinha', 18, 'branca', true, 'persa', 'felina',);
const animal2 = new Animais('Valentina', 5, 'preto e branco', false, 'vira-lata', 'canina');
console.log(animal1)
animal1.miar();
animal2.latir();
animal1.vacinar('vacina 1');
animal2.vacinar('vacina 2');
animal1.consultar('11/07/2023','ultrassom','dores');
animal1.consultar('12/07/2023','raio-x','dores');
animal2.consultar('09/07/2023','raio-x','dores');
animal2.consultar('11/07/2023','exame de sangue','dores');
animal2.consultar('12/07/2023','exame','dores');
console.log(animal1.historico);
console.log(animal2.historico);


//Exercicio 4
const animal3 = new Animais('Hamtaro', 1, 'branco e laranja', false, 'sírio', 'hamster'); 
const animal4 = new Animais('Louro José', 40, 'verde', false, 'papagaio verdadeiro', 'papagaio');
const animal5 = new Animais('Pipoca', 2, 'amarela', false, 'arlequim', 'calopsita');
console.log(animal3.adulto);
console.log(animal4.adulto);
console.log(animal5.adulto);