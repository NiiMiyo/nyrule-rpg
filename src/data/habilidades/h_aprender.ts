import { Habilidade, HabilidadeCategoria } from "@/typing";

export const H_APRENDER: Habilidade = {
	nome: "Aprender",
	custo: 1,
	categoria: HabilidadeCategoria.GERAL,
	descricao: `Você aumenta um Conhecimento em 2 pontos ou aumenta dois Conhecimentos diferentes em 1 ponto. Você pode comprar essa Habilidade várias vezes.`,

	aprimoramentos: [
		{
			nome: "Maestria",
			custo: 4,
			prerequisitos: [
				{ tipo: "custom", texto: "20 no Conhecimento escolhido" }
			],
			descricao: `Escolha um Conhecimento para ganhar Maestria. Sempre que comprar Aprender e escolher um Conhecimento que possua Maestria, aumente-o o dobro de pontos. Você pode comprar esse Aprimoramento uma vez para cada Conhecimento.`
		}
	],
};
