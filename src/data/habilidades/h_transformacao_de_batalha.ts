import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "../conhecimentos";

export const H_TRANSFORMACAO_DE_BATALHA: Habilidade = {
	nome: "Transformação de Batalha",
	custo: 5,
	categoria: HabilidadeCategoria.COMBATE,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.COMBATE,
		valor: 5,
	}],
	descricao: `Você ganha a Ação Forma de Batalha: Gaste 2 PF para ativar essa Ação. Enquanto estiver transformado, você recebe +2 no acerto e no dano de todos os seus ataques não-mágicos. No início de cada um dos seus turnos, pague 1 PF ou encerre a forma de batalha.`,

	aprimoramentos: [{
		nome: "Aprimorar Transformação",
		custo: 2,
		descricao: `Enquanto estiver transformado, você recebe +1 no acerto e dano de todos os seus ataques não-mágicos. Você pode comprar esse Aprimoramento várias vezes, mas aumente seu custo em 1 XP para cada compra anterior.`
	}],
};
