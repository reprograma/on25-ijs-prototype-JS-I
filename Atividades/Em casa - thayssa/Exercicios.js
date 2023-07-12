function HistoricoMedico(){
    this.consultas = [],
    this.vacinas = [],
    this.procedimentos = [{
        tipo: "",
        motivo: ""
    }]
};

function addVacinasToPrototype(prototype){
    prototype.addVacinas = function(vacina){
      this.historico.vacinas.push(vacina)
    }
};

function addConsultasToPrototype(prototype){
    prototype.addConsultas = function(consultas){
        let dataSplit = consultas.split("-");
        let dia = dataSplit[1];
        let mes = dataSplit[0];
        let ano = dataSplit[2];
        let dataConsulta = `${dia}/${mes}/${ano}`;
    
        this.historico.consultas.push(dataConsulta);
    
        this.historico.consultas.sort((consulta1, consulta2) => {
            const [diaConsulta1, mesConsulta1, anoConsulta1] = consulta1.split("/");
            const [diaConsulta2, mesConsulta2, anoConsulta2] = consulta2.split("/");
        
            if (anoConsulta1 !== anoConsulta2) {
              return parseInt(anoConsulta2) - parseInt(anoConsulta1);
            } else if (mesConsulta1 !== mesConsulta2) {
              return parseInt(mesConsulta2) - parseInt(mesConsulta1);
            } else {
              return parseInt(diaConsulta2) - parseInt(diaConsulta1);
            }
        })
    }
}

//Gatos
function Gatificadora(nome, idadeMeses, cor, castrado, externo){
    this.nome = nome;
    this.idade = idadeMeses;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico();
}

addVacinasToPrototype(Gatificadora.prototype);
addConsultasToPrototype(Gatificadora.prototype);
Gatificadora.prototype.metodoMiar = () => console.log("miau miau");

const sininho = new Gatificadora("Sininho", 14, "rajada", true, false);
sininho.addVacinas("v8");
sininho.addVacinas("v10");
sininho.addConsultas("10-18-2022");


//Cachorros
function Dogficadora(nome, idadeMeses, cor, castrado, raça){
    this.nome = nome;
    this.idade = idadeMeses;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = new HistoricoMedico();
}

Dogficadora.prototype.metodoLatir = () => console.log("au au au au");
addVacinasToPrototype(Dogficadora.prototype);
addConsultasToPrototype(Dogficadora.prototype);

const lajotinha = new Dogficadora("Lajotinha", 9, "ruivo", true, "SDR");
lajotinha.addConsultas("07-20-2022");
lajotinha.addConsultas("07-21-2022");
lajotinha.addConsultas("07-09-2023");


//Exóticos
function Exoticos(nome, idadeMeses, cor, especie){
    this.nome = nome,
    this.idade = idadeMeses,
    this.cor = cor,
    this.especie = especie,
    this.historico = new HistoricoMedico()
}

Object.defineProperty(Exoticos.prototype, "adulto", {
    get: function(){
        let getAdulto;
        if(this.especie == "hamster"){
            getAdulto = this.idade >= 2 ? true : false;
        } else if (this.especie == "papagaio"){
            getAdulto = this.idade >= 36 ? true : false;
        } else if (this.especie == "calopsita"){
            getAdulto = this.idade >= 18 ? true : false;
        }
        return getAdulto;
    }
})

const adolfo = new Exoticos("Adolfo", 7, "preto", "hamster");
addVacinasToPrototype(Exoticos.prototype);
adolfo.addVacinas('raiva');

addConsultasToPrototype(Exoticos.prototype);
adolfo.addConsultas("01-13-2023");
adolfo.addConsultas("02-08-2022");