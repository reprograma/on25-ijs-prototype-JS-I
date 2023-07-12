const modelo = require('./dados.json');

const ficha1 =
{
    nome,
    idade,
    cor,
    castrado,
    externo,
    historico: hitoricoMedico,
    elePode
}

const ficha2 =
{
    nome,
    idade,
    cor,
    especie,
    adulto,
    historico: hitoricoMedico
}

const hitoricoMedico = {
    consultas,
    vacinas,
    procedimentos
}
let gatos = ficha1

let cachorros = ficha1

let exoticos = ficha2

module.export (gatos, cachorros, exoticos, hitoricoMedico);