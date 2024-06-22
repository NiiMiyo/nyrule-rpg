import { Habilidade, HabilidadeCategoria } from "@/typing";

export const H_APRENDER: Habilidade = {
	nome: "Aprender",
	custo: 1,
	categoria: HabilidadeCategoria.GERAL,
	descricao: `Você recebe 2 pontos para aumentar 1 ou mais Conhecimentos à sua escolha. Você pode comprar essa Habilidade várias vezes.`,

	aprimoramentos: [
		{
			nome: "Maestria",
			custo: 4,
			prerequisitos: [{ tipo: "custom", texto: "20 no Conhecimento escolhido" }],
			descricao: `Escolha um Conhecimento para ganhar Maestria. Sempre que comprar Aprender e escolher um conhecimento que possua Maestria, aumente-o o dobro do normal (aumente em 2 se aumentaria em 1; em 4 se aumentaria em 2...). Você pode comprar esse Aprimoramento uma vez para cada Conhecimento.`
		}
	],
};
