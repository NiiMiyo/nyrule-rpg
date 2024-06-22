import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "../conhecimentos";

export const H_VISAO_APRIMORADA: Habilidade = {
	nome: "Visão Aprimorada",
	custo: 2,
	categoria: HabilidadeCategoria.GERAL,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.OBSERVAÇÃO,
		valor: 4,
	}],
	descricao: `Quando faz um teste de Observação para enxergar, e apenas uma vez por teste, você pode rolar o dado novamente e usar o maior valor rolado.`,

	aprimoramentos: [{
		nome: "Visão no Escuro",
		custo: 2,
		descricao: `Você pode enxergar em locais completamente escuros, exceto através de escuridão mágica.`
	}],
};
