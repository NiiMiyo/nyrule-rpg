import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_IDS } from "@/data/conhecimentos";
import { R_ESQUIVAR } from "@/data/acoes";

export const H_ROLAMENTO: Habilidade = {
	nome: "Rolamento",
	custo: 2,
	categoria: HabilidadeCategoria.COMBATE,
	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.AGILIDADE,
		valor: 5
	}],
	descricao: `Quando usar a Reação ${R_ESQUIVAR.nome}, você pode somar +4 no teste, mas deve se mover para um espaço adjacente.`,
};
