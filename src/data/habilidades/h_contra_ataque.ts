import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "../conhecimentos";

export const H_CONTRA_ATAQUE: Habilidade = {
	nome: "Contra-Ataque",
	custo: 5,
	categoria: HabilidadeCategoria.COMBATE,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.AGILIDADE,
		valor: 6,
	}, {
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.COMBATE,
		valor: 8,
	}],
	descricao: `Você recebe a Reação Contra-Atacar: Quando usar Esquivar ou Resistir Golpe com sucesso você pode contra-atacar o oponente que o golpeou usando a Ação Golpear como se fosse uma Reação.`,

	aprimoramentos: [{
		nome: "Contra-Ataque Rápido",
		custo: 2,
		prerequisitos: [{
			tipo: "conhecimento",
			conhecimento: CONHECIMENTOS_IDS.AGILIDADE,
			valor: 10,
		}, {
			tipo: "conhecimento",
			conhecimento: CONHECIMENTOS_IDS.COMBATE,
			valor: 15,
		}],
		descricao: `A sua Reação Contra-Atacar não gasta uma Ação. Você usa apenas uma Ação para Contra-Atacar.`
	}],
};
