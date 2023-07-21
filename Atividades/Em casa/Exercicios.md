NOME: Deborah

Imagine que você está criando o sistema para uma clínica veterinária. 
Para isso, precisamos de construtores prototipais ou pseudoclassicos para quatro tipos e objeto diferentes: `Gatos`, `Cachorros`, `Exóticos` e `HistoricoMedico`.

1. Exemplo de histórico médico

    ```
    {
        consultas: [9/7/2023, 13/1/2023, 20/7/2022],
        vacinas: ["raiva", "v8", "v10"],
        procedimentos: [{ tipo: "ultrassom", motivo: "dores"}]
    }
    ```

2. Exemplo de Gato

    ```
    {
        nome: "Nina",
        idade: 18, //em meses
        cor: "frajola",
        castrado: true,
        externo: false,
        historico: HistoricoMedico
    }
    ```

3. Exemplo de Cachorro
    
    ```
    {
        nome: "Zeus",
        idade: 42, //em meses
        cor: "preto",
        castrado: false,
        raça: "labrador",
        historico: HistoricoMedico
    }
    ```
4. Exemplo de Exótico
    ```
    {
        nome: "Iogurte",
        idade: 19, //em meses
        cor: "branco e laranja",
        especie: "hamster",
        adulto: true,
        historico: HistoricoMedico
    }
    ```

Precisamos de alguns métodos, também:
1. Gatos precisam `miar()` e cachorros precisam `latir()`;
2. Todos os tipos de animais precisam de um método `vacinar()`, que receba uma nova vacina e adicione no histórico do bichinho.
3. Todos os animais precisam de um método `consultar()`, que adicione uma nova consulta ao histórico. As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.
4. Animais exóticos precisam de um `getter` para a propriedade `adulto`, que retorne `true` caso o animal já seja um adulto para a espécie dele e `false` caso contrário. Sua implementação pode cobrir apenas as seguintes espécies: hamster (adulto aos 2 meses), papagaio (aos 3 anos) e calopsita (18 meses).

**Na semana que vem vamos revisar e expandir muitos dos conceitos usados nessa atividade, então capricha :D**

# Resposta

## Histórico médico
Funções para os dois jeitos
```
function addProcedimento(tipo, motivo) {
    this.procedimentos.push({tipo, motivo});
}

function addConsulta(dataConsulta) {
    this.consultas.unshift(dataConsulta)
}

function addVacina(vacina) {
    this.vacinas.push(vacina)
}

// serão usadas pelos animais
function vacinar(vacina) {
    this.historico.addVacina(vacina)
}

function consultar(data) {
    this.historico.addConsulta(data)
}
```

### Prototipal
```
const metHistorico = {
    addProcedimento,
    addConsulta,
    addVacina,
}

function HistoricoMedico() {
    const novo = Object.create(metHistorico)
    novo.consultas = [];
    novo.vacinas = [];
    novo.procedimentos = [];
}

```

### Pseudoclássico
```
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

HistoricoMedico.prototype = {
    constructor: HistoricoMedico,
    addProcedimento,
    addConsulta,
    addVacina,
}
```

## Gato

### Métodos
```
function miar() {
    console.log("Miau")
}
```
### Prototipal
```
const metGatos = {
    miar,
    consultar,
    vacinar
}

function Gato(nome, idade, cor, castrado, externo) {
    const novo = Object.create(metGatos)
    novo.nome = nome
    novo.idade = idade
    novo.cor = cor
    novo.castrado = castrado
    novo.externo = externo
    novo.historico = new HistoricoMedico()
    return novo
}
```

### Pseudoclássico
```
function Gato(nome, idade, cor, castrado, externo) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.castrado = castrado
    this.externo = externo
    this.historico = new HistoricoMedico()
}

Gato.prototype.miar = miar
Gato.prototype.consultar = consultar
Gato.prototype.vacinar = vacinar
```

## Cachorro

### Métodos
```
function latir() {
    console.log("Au au")
}
```

### Prototipal
```
const metCachorros = {
    latir,
    consultar,
    vacinar
}

function Cachorro(nome, idade, cor, castrado, raca) {
    const novo = Object.create(metCachorros)
    novo.nome = nome
    novo.idade = idade
    novo.cor = cor
    novo.castrado = castrado
    novo.raca = raca
    novo.historico = new HistoricoMedico()
    return novo
}
```

### Pseudoclássico
```
function Cachorro(nome, idade, cor, castrado, raca) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.castrado = castrado
    this.raca = raca
    this.historico = new HistoricoMedico()
}

Cachorro.prototype.latir = latir
Cachorro.prototype.consultar = consultar
Cachorro.prototype.vacinar = vacinar
```

## Exótico

Animais exóticos precisam de um `getter` para a propriedade `adulto`, que retorne `true` caso o animal já seja um adulto para a espécie dele e `false` caso contrário. Sua implementação pode cobrir apenas as seguintes espécies: hamster (adulto aos 2 meses), papagaio (aos 3 anos) e calopsita (18 meses).

### Métodos
```
function adulto() {
    const { especie, idade } = this
    switch(especie) {
        case "hamster":
            return idade > 2
        case "papagaio":
            return idade > 36
        case "calopsita":
            return idade > 18
        default:
            return console.log("Animal não reconhecido")
    }
}
```

### Prototipal
```
const metExoticos = {
    vacinar,
    consultar
}

Object.defineProperties(metExoticos, {
    adulto: { get: adulto }
})

function Exotico(nome, idade, cor, especie) {
    const novo = Object.create(metExoticos)
    novo.nome = nome
    novo.idade = idade
    novo.cor = cor
    novo.especie = especie
    novo.historico = new HistoricoMedico()
    return novo
}
```

### Pseudoclássico
```
function Exotico(nome, idade, cor, especie) {
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.especie = especie
    this.historico = new HistoricoMedico()
}

Exotico.prototype.consultar = consultar
Exotico.prototype.vacinar = vacinar
Object.defineProperties(Exotico.prototype, {
    adulto: { get: adulto }
})
```