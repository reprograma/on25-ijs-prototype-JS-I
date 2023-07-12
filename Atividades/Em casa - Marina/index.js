function historicoMedico() {
  (this.consultas = []), (this.vacinas = []), (this.procedimentos = []);
}

function consultar(consulta) {
  this.historicoMedico.consultas.push(consulta);
  this.historicoMedico.consultas.unshift();
}
function vacinar(vacina) {
  this.historicoMedico.vacinas.push(vacina);
}
function proceder(procedimentos) {
  this.historicoMedico.procedimentos.push(procedimentos);
}

function FazedoraDeGatos(nome, idade, cor, castrado, externo, historicoMedico) {
  const gatoBase = Object.create(metodosGatos);
  gatoBase.nome = nome;
  gatoBase.idade = idade;
  gatoBase.cor = cor;
  gatoBase.castrado = castrado;
  gatoBase.externo = externo;
  gatoBase.historico = historicoMedico;

  return gatoBase;
}

//método miar gatinhos
const metodosGatos = {
  miar: function () {
    console.log("Miau");
  },
};

function FazedoraDeCachorros(nome, idade, cor, castrado, raça, historicoMedico) {
  const cachorroBase = Object.create(metodosCachorros);
  cachorroBase.nome = nome;
  cachorroBase.idade = idade;
  cachorroBase.cor = cor;
  cachorroBase.castrado = castrado;
  cachorroBase.raça = raça;
  cachorroBase.historico = historicoMedico;

  return cachorroBase;
}

//metodo latir cachorrinhos
const metodosCachorros = {
  latir: function () {
    console.log("AU AU");
  },
};

function FazedoraDeExoticos(nome, idade, cor, especie, historicoMedico) {
  const exoticoBase = Object.create(metodoExotico) //pq no object create precisa usar o metodo para conseguir criar outro objetos? poderia ser null?
  exoticoBase.nome = nome;
  exoticoBase.idade = idade;
  exoticoBase.cor = cor;
  exoticoBase.especie = especie;
  exoticoBase.adulto = metodoExotico //????????????????
  exoticoBase.historico = historicoMedico;

  return exoticoBase;
}

//????????????????????????????????????????
const metodoExotico = {
    adulto: function() {
        if (this.especie === "hamster" && this.idade >= 2) {
            return true
        } else if (this.especie === "papagaio" && this.idade >= 36){
            return true
        } else if (this.especie === "calopsita" && this.idade >= 18){
            return true
        }
        return false
    }
}

//historico medico dos animais
const historicoPhoebe = new historicoMedico();
const historicoRoni = new historicoMedico();
const historicoTita = new historicoMedico();
const historicoHamtaro = new historicoMedico();

//historico médico - consultas
consultar.call({ historicoMedico: historicoPhoebe }, "25/05/2020");
consultar.call({ historicoMedico: historicoRoni }, "12/01/2021");
consultar.call({ historicoMedico: historicoTita }, "01/04/2023");
consultar.call({ historicoMedico: historicoHamtaro }, "05/06/2023");

//historico médico - vacinas
vacinar.call({ historicoMedico: historicoPhoebe }, "raiva");
vacinar.call({ historicoMedico: historicoRoni }, "v8");
vacinar.call({ historicoMedico: historicoTita }, "raiva");
vacinar.call({ historicoMedico: historicoHamtaro }, "");

//historico médico - procedimentos
proceder.call(
  { historicoMedico: historicoPhoebe },
  { tipo: "ultrassom", motivo: "dores" }
);
proceder.call(
  { historicoMedico: historicoRoni },
  { tipo: "limpeza dente", motivo: "tártaro" }
);
proceder.call(
  { historicoMedico: historicoTita },
  { tipo: "injeção", motivo: "alergia" }
);
proceder.call(
  { historicoMedico: historicoHamtaro },
  { tipo: "injeção", motivo: "verme" }
);

//exemplo gatinhos
phoebe = FazedoraDeGatos("Phoebe", 12, "preto", true, true, historicoPhoebe);
roni = FazedoraDeGatos("Roni", 7, "branco", false, false, historicoRoni);
tita = FazedoraDeCachorros("Titã", 14, "cinza", false, "Pastor Alemão", historicoTita);
hamtaro = FazedoraDeExoticos("Hamtaro", 1, "laranja", "hamster", historicoHamtaro)
