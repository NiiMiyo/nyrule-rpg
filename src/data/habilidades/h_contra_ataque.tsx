import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "@/data/conhecimentos";
import { R_CONTRA_ATACAR } from "@/data/acoes";
import { conceder_acao } from "./utils";

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
	descricao: conceder_acao(R_CONTRA_ATACAR),

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
		descricao: `Uma vez por rodada, a sua Reação ${R_CONTRA_ATACAR.nome} não gasta uma Ação.`
	}],
};
