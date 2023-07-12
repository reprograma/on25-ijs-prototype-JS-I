NOME: Nicole Siqueira Fagundes

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

======GATO=========

function HistoricoMedico() {
    this.consultas = []
    this.vacinas = []
    this.procedimentos = []
}

function Gato(nome, idade, cor, castrado, externo){
    this.nome = nome;     
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico;
}
    Gato.prototype.miar = function () {console.log("miau")}
    Gato.prototype.vacinar = function(vacina){
        this.historico.vacinas.push(vacina)
    }
    Gato.prototype.consultar = function(date){
        this.historico.consultas.push(date)
    }
    Gato.prototype.procedimento = function({tipo, motivo}){
        this.historico.procedimentos.push({tipo, motivo})
    }
    
    let Bino = new Gato("Al Bino", "18", "branco", true, true)
    Bino.vacinar("raiva")
    Bino.consultar(new Date(2023, 6, 9))
    Bino.procedimento({tipo: "ultrassom", motivo: "dores"})



======CACHORRO========

function HistoricoMedico() {
    this.consultas = []
    this.vacinas = []
    this.procedimentos = []
}

function Cachorro(nome, idade, cor, castrado, raca){
    this.nome = nome;
    this.idade = idade * 12;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico;
}

Cachorro.prototype.latir = function () {console.log("auau")}
Cachorro.prototype.vacinar = function(vacina){
        this.historico.vacinas.push(vacina)
    }
Cachorro.prototype.consultar = function(date){
    this.historico.consultas.push(date)
    }
Cachorro.prototype.procedimento = function({tipo, motivo}){
    this.historico.procedimentos.push({tipo, motivo})
    }

let Chiquinha = new Cachorro("Chiquinha", 7, "marrom", true, true)
Chiquinha.vacinar("v8")
Chiquinha.consultar(new Date(2023, 1, 13))
Chiquinha.procedimento({tipo: "ecografia", motivo: "dores no estômago"})


=======EXÓTICO=========

function HistoricoMedico() {
    this.consultas = []
    this.vacinas = []
    this.procedimentos = []
}

function BichinhoExotico(nome, idade, cor, especie){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico;
    this.adulto;
}

BichinhoExotico.prototype.vacinar = function(vacina){
        this.historico.vacinas.push(vacina)
    }

BichinhoExotico.prototype.consultar = function(date){
    this.historico.consultas.push(date)
    }

BichinhoExotico.prototype.procedimento = function({tipo, motivo}){
    this.historico.procedimentos.push({tipo, motivo})
    }

  Object.defineProperty(BichinhoExotico.prototype, "adulto", {
    get: function(){
        if(this.especie === "hamster" && this.idade >= 2){
            return true
        } else if (this.especie === "papagaio" && this.idade >= 36){
            return true
        }else if(this.especie === "calopsita" && this.idade >= 18){
            return true
        }else{
            return "Essa espécie não está registrada"
        }
    }
  })

  let Loro = new BichinhoExotico("Loro", 36, "verde", "papagaio")
  Loro.vacinar("v10")
  Loro.consultar(new Date(2022, 6, 20))
  Loro.procedimento({tipo: "ultrassom", motivo: "dores"})

  let Zeze = new BichinhoExotico("Zeze", 18, "branco com amarelo", "calopsita")
  let Algodao = new BichinhoExotico("Algodao", 2, "cinza", "hamster")