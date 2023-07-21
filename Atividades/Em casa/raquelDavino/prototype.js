
const ComunicacaoGatos = {
    miar: function() {
      console.log("minhau");
    },
    ronronar: function() {
      console.log("ron ron ron");
    }
}

const ComunicacaoCachorros = {
    latir: function() {
      console.log("au au au");
    },
    rosnar: function() {
      console.log("grrrrrr");
    }
}

//os construtores não funcionam e eu não entendo o motivo

function HistoricoMedico() {

    this.vacinas = [];
    this.consultas = [];
    this. procedimentos = [{
        tipo: '', 
        motivo: ''
    }];

}

HistoricoMedico.prototype.vacinar = function vacinar(vacina) {
    this.historicoMedico.vacinas.push(vacina)
};

HistoricoMedico.prototype.consultar = function consultar(dataConsulta) {
    this.historicoMedico.consultas.unshift(dataConsulta)
};

HistoricoMedico.prototype.realizarProcedimento = function procedimento(tipo, motivo) {
    this.historicoMedico.procedimento.tipo.push({
        tiop: tipo,
        motivo: motivo
    });
};
    
function Gato(nome, idade, cor, castrado, externo) {
  
    this.gato.nome = nome;
    this.gato.idade = idade;
    this.gato.cor = cor;
    this.gato.castrado = castrado;
    this.gato.externo = externo;
    this.gato.historicoMedico = new HistoricoMedico();
    this.gato.comunicar = new ComunicacaoGatos();
}
    
Gato.prototype.consultar = this.historicoMedico.consultar(); 
Gato.prototype.vacinar = this.historicoMedico.vacinar(); 
  
function Cachorro(nome, idade, cor, castrado, raca) {
    this.cachorro.nome = nome;
    this.cachorro.idade = idade;
    this.cachorro.cor = cor;
    this.cachorro.castrado = castrado;
    this.cachorro.raca = raca;
    this.cachorro.historicoMedico = new HistoricoMedico();
}

    
Cachorro.prototype.consultar = this.historicoMedico.consultar();
Cachorro.prototype.vacinar = this.historicoMedico.vacinar(); 
  
function AnimalExotico(nome, idade, cor, especie, adulto) {

    this.animalExotico.nome = nome;
    this.animalExotico.idade = idade;
    this.animalExotico.cor = cor;
    animalExotico.castrado = especie;
    this.animalExotico.externo = adulto;
    this.animalExotico.historicoMedico = new HistoricoMedico();

    Object.defineProperty(AnimalExotico.prototype, "adulto", {
        get: function() {
            switch(especie) {
                case 'hamster':
                    return idade >= 2 ? true : false;
                    break;

                case 'papagaio': 
                    return idade >= 36 ? true : false;
                    break;

                case 'calopsita':
                    return idade >= 18 ? true : false;
                    break;

            }
        }
    })

    AnimalExotico.prototype.consultar = this.historicoMedico.consultar();
    AnimalExotico.prototype.vacinar = this.historicoMedico.vacinar();


  
    return animalExotico;
}






  