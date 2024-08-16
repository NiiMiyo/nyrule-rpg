import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "@/data/conhecimentos";
import { A_ANDAR } from "@/data/acoes";

export const H_PASSO_LIGEIRO: Habilidade = {
	nome: "Passo Ligeiro",
	custo: 2,
	categoria: HabilidadeCategoria.COMBATE,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.AGILIDADE,
		valor: 4,
	}],
	descricao: `Você aumenta a quantidade máxima de unidades que pode ${A_ANDAR.nome} em 2. Você pode comprar essa Habilidade várias vezes, mas aumente seu pré-requisito em 3 pontos para cada compra anterior.`,
};
