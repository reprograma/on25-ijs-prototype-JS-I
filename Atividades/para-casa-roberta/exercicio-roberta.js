//Clínica Quatro Patas//

const gato = {
  nome: "Jade",
  idade: 36,
  cor: "garfield",
  castrado: "true",
  historico: {
    consultas: [9 / 7 / 2023, 13 / 1 / 2023, 20 / 7 / 2022],
    vacinas: ["raiva", "v8", "v10"],
    procedimentos: [{ tipo: "ultrassom", motivo: "dores" }],
  },
};

console.log(gato.cor);

const cachorro = {
  nome: "Ozzy",
  idade: 70,
  cor: "gpreto",
  castrado: "false",
  historico: {
    consultas: [10 / 5 / 2023, 13 / 1 / 2023, 20 / 9 / 2022],
    vacinas: ["raiva", "v8", "v10"],
    procedimentos: [{ tipo: "ultrassom", motivo: "dores" }],
  },
};

const raposa = Object.create(null);

(raposa.nome = "Esperta"),
  (raposa.idade = 24),
  (raposa.cor = "laranjinha"),
  (raposa.castrado = "false"),
  (raposa.historico = {
    consultas: [(10 / 5 / 2023, 13 / 7 / 2022, 15 / 12 / 2021)],
    vacinas: ["raiva", "v8", "v10"],
    procedimentos: [{ tipo: "ultrasom", motivo: "dores" }],
  });
console.log(raposa);
