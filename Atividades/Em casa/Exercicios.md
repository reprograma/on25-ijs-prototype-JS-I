NOME: Alexandra Ribeiro

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