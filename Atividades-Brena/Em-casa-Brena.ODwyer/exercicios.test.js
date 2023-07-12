const {FazedoraGatos, FazedoraCachorros, FazedoraExoticos, HistoricoMedico} = require("./exercicios")

describe("Testando o exercício", () => {
    it("Testa a função miar", () => {
        const gato = new FazedoraGatos("Nina", 18, "frajola", true, false)
        expect(gato.miar()).toBe("Miau")
    })

    it("Testa se a função FazedoraGatos cria uma instância", () => {
        const gato = new FazedoraGatos("Nina", 18, "frajola", true, false);
        expect(gato).toBeInstanceOf(FazedoraGatos);
        expect(gato.nome).toBe("Nina");
        expect(gato.idade).toBe(18);
        expect(gato.cor).toBe("frajola");
        expect(gato.castrado).toBe(true);
        expect(gato.externo).toBe(false);
        expect(gato.historico).toBeDefined();
    })

    it("Testa a função vacinar do HistoricoMedico", () => {
        const historico = new HistoricoMedico();
        historico.vacinar("raiva");
        expect(historico.vacinas).toContain("raiva");
    })


})