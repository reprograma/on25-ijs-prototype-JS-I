// constructor

function gatificador(nome) {
  const novoGato = {
    nome,
    miar: function () {
      console.log("miau");
    },
  };

  return novoGato;
}
