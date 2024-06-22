import { Habilidade, HabilidadeCategoria } from "@/typing";

export const H_VOO: Habilidade = {
	nome: "Vôo",
	custo: 5,
	categoria: HabilidadeCategoria.GERAL,
	descricao: `Você pode usar a Ação Andar para voar. Quando voa, pode se deslocar para cima. Sempre que terminar seu turno fora do chão você gasta 1 PF.`,
};
