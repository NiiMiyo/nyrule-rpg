import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "../conhecimentos";

export const H_PASSO_LIGEIRO: Habilidade = {
	nome: "Passo Ligeiro",
	custo: 2,
	categoria: HabilidadeCategoria.GERAL,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.AGILIDADE,
		valor: 4,
	}],
	descricao: `Você aumenta a quantidade máxima de unidades que pode Andar em 2.`,

	aprimoramentos: [{
		nome: "Rápido como o Vento",
		custo: 3,
		prerequisitos: [{
			tipo: "conhecimento",
			conhecimento: CONHECIMENTOS_IDS.AGILIDADE,
			valor: 8,
		}],
		descricao: `Você aumenta a quantidade máxima de unidades que pode Andar em 1. Você pode pegar esse Aprimoramento múltiplas vezes, mas seu custo de XP aumenta em 1 e o pré-requisito de Agilidade aumenta em 2.`
	}],
};
