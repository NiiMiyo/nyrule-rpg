import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "@/data/conhecimentos";
import { A_FORMA_DE_BATALHA } from "@/data/acoes";
import { conceder_acao } from "./utils";

export const H_TRANSFORMACAO_DE_BATALHA: Habilidade = {
	nome: "Transformação de Batalha",
	custo: 5,
	categoria: HabilidadeCategoria.COMBATE,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.COMBATE,
		valor: 4,
	}],
	descricao: conceder_acao(A_FORMA_DE_BATALHA),

	aprimoramentos: [{
		nome: "Aprimorar Transformação",
		custo: 1,
		prerequisitos: [{ tipo: "conhecimento", conhecimento: CONHECIMENTOS_IDS.COMBATE, valor: 6 }],
		descricao: `Aumente os bônus da transformação em +1. Você pode comprar esse Aprimoramento várias vezes, mas aumente seu pré-requisito em 2 para cada compra anterior.`
	}],
};
