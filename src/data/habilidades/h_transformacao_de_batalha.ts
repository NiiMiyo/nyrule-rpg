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
		valor: 5,
	}],
	descricao: conceder_acao(A_FORMA_DE_BATALHA),

	aprimoramentos: [{
		nome: "Aprimorar Transformação",
		custo: 1,
		descricao: `Enquanto estiver transformado, você recebe +1 no acerto e dano de todos os seus ataques não-mágicos. Você pode comprar esse Aprimoramento várias vezes, mas aumente seu custo em 1 XP para cada compra anterior.`
	}],
};
