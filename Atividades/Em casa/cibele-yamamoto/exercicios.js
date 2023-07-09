//NOME: CIBELE TAKAOKA YAMAMOTO

/* METODOS */

const metodosHistoricoMedico = {
    vacinar: function(vacina) {
        this.vacinas.push(vacina)
     
    },
    consultar: function(consulta) {
        this.consultas.push(consulta)
        this.consultas.sort()
        this.consultas.reverse()
        // As consultas devem ser mantidas em ordem cronológica reversa, 
        // sendo a primeira da lista sempre a mais recente.
    }
}

const metodosGatos = {
    miar: function() { console.log("Miau")},
}

const metodosCachorros = {
    latir: function() { console.log("Auau")},
}

const metodosExoticos = {
    get adulto() {
        if(this.especie == "hamster") {
            if(this.idade >= 2) {
                return true;
            } else {
                return false;
            }
        } else if(this.especie == "papagaio") {
            if(this.idade >= 36) {
                return true;
            } else {
                return false;
            }
        } else if(this.especie == "calopsita") {
            if(this.idade >= 18) {
                return true;
            } else {
                return false;
            }
        } else {
            return null;
        }
    }
}


/* "FAZEDORAS" */

function FazedoraDeHistoricoMedico(consultas, vacinas, procedimentos) {
    const novoHistoricoMedico = Object.create(metodosHistoricoMedico);
    novoHistoricoMedico.consultas = consultas;
    novoHistoricoMedico.vacinas = vacinas;
    novoHistoricoMedico.procedimentos = procedimentos;

    return novoHistoricoMedico;
}

function FazedoraDeGatos(nome, idade, cor, castrado, externo, HistoricoMedico) {
    const novoGato = Object.create(metodosGatos);
    novoGato.nome = nome;
    novoGato.idade = idade;
    novoGato.cor = cor;
    novoGato.castrado = castrado;
    novoGato.externo = externo;
    novoGato.historico = HistoricoMedico;

    return novoGato;
}

function FazedoraDeCachorros(nome, idade, cor, castrado, raca, HistoricoMedico) {
    const novoCachorro = Object.create(metodosCachorros);

    novoCachorro.nome = nome;
    novoCachorro.idade = idade;
    novoCachorro.cor = cor;
    novoCachorro.castrado = castrado;
    novoCachorro.raca = raca;
    novoCachorro.historico = HistoricoMedico;

    return novoCachorro;
}

function FazedoraDeExoticos(nome, idade, cor, especie, HistoricoMedico) {
    const novoExotico = Object.create(metodosExoticos);

    novoExotico.nome = nome;
    novoExotico.idade = idade;
    novoExotico.cor = cor;
    novoExotico.especie = especie;
    novoExotico.historico = HistoricoMedico;

    return novoExotico;
}


/* INSTANCIANDO */

const histMedicoFifi = FazedoraDeHistoricoMedico([], [], [{ tipo: "raio-x", motivo: "queda"}])
const gatoFifi = FazedoraDeGatos("Fifi", 120, "Cinza", true, false, histMedicoFifi)

const histMedicoRex = FazedoraDeHistoricoMedico([], [], [{ tipo: "ultrassom", motivo: "dores"}])
const cachorroRex = FazedoraDeCachorros("Rex", 30, "Marrom", true, "Vira-lata", histMedicoRex)

const histMedicoCalota = FazedoraDeHistoricoMedico([], [], [{ tipo: "curativo", motivo: "ferida na pata"}])

const exoticoCalota = FazedoraDeExoticos("Calota", 17, "Verde acizentado", "calopsita", histMedicoCalota)


/* TESTANDO */

console.log(gatoFifi)
console.log(cachorroRex)
console.log(exoticoCalota)

gatoFifi.miar()
cachorroRex.latir()

gatoFifi.historico.consultar("2022/07/06")
gatoFifi.historico.consultar("2019/07/06")
gatoFifi.historico.consultar("2020/07/06")

cachorroRex.historico.consultar("2023/06/21")
exoticoCalota.historico.consultar("2023/04/31")

gatoFifi.historico.vacinar("FIV")
cachorroRex.historico.vacinar("virus")
exoticoCalota.historico.vacinar("raiva")

console.log(gatoFifi)
console.log(cachorroRex)
console.log(exoticoCalota)

console.log("A Calopsita Calota é adulta? " + exoticoCalota.adulto)

/*
Imagine que você está criando o sistema para uma clínica veterinária. 
Para isso, precisamos de construtores pseudoclássicos para quatro tipos e objeto diferentes: `Gatos`, `Cachorros`, `Exóticos` e `HistoricoMedico`.

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
3. Todos os animais precisam de um método `consultar()`, que adicione uma nova consula ao histórico. As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.
4. Animais exóticos precisam de um `getter` para a propriedade `adulto`, que retorne `true` caso o animal já seja um adulto para a espécie dele e `false` caso contrário. Sua implementação pode cobrir apenas as seguintes espécies: hamster (adulto aos 2 meses), papagaio (aos 3 anos) e calopsita (18 meses).
    

**Na semana que vem vamos revisar e expandir muitos dos conceitos usados nessa atividade, então capricha :D**
*/