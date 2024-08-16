import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "@/data/conhecimentos";


export const H_AUMENTO_PE: Habilidade = {
	nome: "Aumento de Estamina",
	custo: 1,
	categoria: HabilidadeCategoria.COMBATE,
	descricao: "Aumente seus PE máximo em 2 pontos. Você pode comprar essa Habilidade várias vezes, mas aumente seu pré-requisito em 3 para cada compra anterior.",

	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.VIGOR,
		valor: 3,
	}],

	aprimoramentos: []
}
