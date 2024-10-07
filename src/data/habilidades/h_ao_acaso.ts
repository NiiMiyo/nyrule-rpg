import { Habilidade, HabilidadeCategoria } from "@/typing";

export const H_AO_ACASO: Habilidade = {
	nome: "Ao Acaso",
	custo: 1,
	categoria: HabilidadeCategoria.GERAL,
	descricao: "Suas habilidades podem até ser boas, mas isso não é motivo para virar a cara para a sorte. Sempre que fizer qualquer teste, você pode trocar +5 de seus bônus por 1d10. Você pode fazer isso mais de uma vez no mesmo teste.",

	aprimoramentos: [{
		nome: "Sortudo",
		custo: 2,
		descricao: "Mais do que acertar por acaso, parece que a sorte gosta de você. Você passa a trocar +5 por 1d12."
	}]
}
