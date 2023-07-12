function HistoricoMedico(consultas, vacinas, procedimentos) {
    this.consultas = consultas || [];
    this.vacinas = vacinas || [];
    this.procedimentos = procedimentos || [];
  }
  
  const historicoMedico = new HistoricoMedico(
    ["9/7/2023", "13/1/2023", "20/7/2022"],
    ["raiva", "v8", "v10"],
    [{ tipo: "ultrassom", motivo: "dores" }]
  );
  
  function Gato(nome, idade, cor, castrado, externo, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = historico;
  }
  
  Gato.prototype.miar = function () {
    console.log("Miau!");
  };
  
  Gato.prototype.vacinar = function (novaVacina) {
    this.historico.vacinas.push(novaVacina);
  };
  
  Gato.prototype.consultar = function (novaConsulta) {
    this.historico.consultas.unshift(novaConsulta);
  };
  
  const gatoVet = new Gato("Nina", 18, "frajola", true, false, historicoMedico);
  
  function Cachorro(nome, idade, cor, castrado, raca, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = historico;
  }
  
  Cachorro.prototype.latir = function () {
    console.log("Au au!");
  };
  
  Cachorro.prototype.vacinar = function (novaVacina) {
    this.historico.vacinas.push(novaVacina);
  };
  
  Cachorro.prototype.consultar = function (novaConsulta) {
    this.historico.consultas.unshift(novaConsulta);
  };
  
  const cachorroVet = new Cachorro("Zeus", 42, "preto", false, "labrador", historicoMedico);
  
  function Exotico(nome, idade, cor, especie, adulto, historico) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;
    this.historico = historico;
  }
  
  Exotico.prototype.vacinar = function (novaVacina) {
    this.historico.vacinas.push(novaVacina);
  };
  
  Exotico.prototype.consultar = function (novaConsulta) {
    this.historico.consultas.unshift(novaConsulta);
  };
  
  Exotico.prototype.getAdulto = function () {
    return this.especie === "hamster" && this.idade >= 2;
  };
  
  const exoticoVet = new Exotico("Iogurte", 19, "branco e laranja", "hamster", true, historicoMedico);
  
//   console.log(historicoMedico);
//   console.log(gatoVet);
//   console.log(cachorroVet);
//   console.log(exoticoVet);
//   gatoVet.miar();
//   cachorroVet.latir();
  
//   gatoVet.vacinar("v12");
//   cachorroVet.vacinar("v5");
//   exoticoVet.vacinar("v3");
  
//   gatoVet.consultar("1/1/2024");
//   cachorroVet.consultar("5/2/2024");
//   exoticoVet.consultar("10/3/2024");
  
//   console.log(gatoVet.historico);
//   console.log(cachorroVet.historico);
//   console.log(exoticoVet.historico);
//   console.log(exoticoVet.getAdulto());
  
//   console.log(gatoVet.historico.procedimentos);
  