import { Conhecimento } from "@/typing";

export enum CONHECIMENTOS_IDS {
	AGILIDADE = "AGILIDADE",
	COMBATE = "COMBATE",
	CONVERSA = "CONVERSA",
	DETERMINAÇÃO = "DETERMINAÇÃO",
	FORÇA = "FORÇA",
	MAGIA = "MAGIA",
	MEDICINA = "MEDICINA",
	MENTIRA = "MENTIRA",
	OBSERVAÇÃO = "OBSERVAÇÃO",
	PONTARIA = "PONTARIA",
	RESISTÊNCIA_MAGICA = "RESISTÊNCIA_MAGICA",
	VIGOR = "VIGOR",
};

export const CONHECIMENTOS_DADOS: { [id in CONHECIMENTOS_IDS]: Conhecimento } = {
	AGILIDADE: {
		nome: "Agilidade",
		descricao: `Suas mãos agem rápido e seus reflexos estão em dia.`,
		usos: `se esgueirar em lugares apertados, esquivar de golpes e agir primeiro.`,
	},

	COMBATE: {
		nome: "Combate",
		descricao: `Você sabe a hora certa atacar seus adversários.`,
		usos: `acertar golpes corpo a corpo.`
	},

	CONVERSA: {
		nome: "Conversa",
		descricao: `Você sabe falar o que querem ouvir.`,
		usos: `manipular pessoas, seja usando palavras bonitas ou intimidação.`,
	},

	DETERMINAÇÃO: {
		nome: "Determinação",
		descricao: `Você tem um objetivo e ninguém te impedir.`,
		usos: `resistir ao medo, intimidações e até a morte.`,
	},

	FORÇA: {
		nome: "Força",
		descricao: `Sua força física bruta!`,
		usos: `causar dano físico.`,
	},

	MAGIA: {
		nome: "Magia",
		descricao: `Você sabe como moldar as energias caóticas do universo ao seu favor.`,
		usos: `controlar suas habilidades mágicas.`
	},

	MEDICINA: {
		nome: "Medicina",
		descricao: `Você sabe como o corpo de uma pessoa funciona.`,
		usos: `identificar e tratar doenças, primeiros socorros e analisar cadáveres.`,
	},

	MENTIRA: {
		nome: "Mentira",
		descricao: `Ninguém sabe quando você fala a verdade ou não.`,
		usos: `enganar as pessoas, seja com mentiras, blefes, trapaças ou omitindo informações preciosas.`,
	},

	OBSERVAÇÃO: {
		nome: "Observação",
		descricao: `Você percebe até os mínimos detalhes das coisas.`,
		usos: `perceber detalhes no comportamento das pessoas e coisas escondidas ou difíceis de perceber.`
	},

	PONTARIA: {
		nome: "Pontaria",
		descricao: `Você praticou tiro ao alvo e sabe acertar o alvo.`,
		usos: `acertar golpes à distância.`
	},

	RESISTÊNCIA_MAGICA: {
		nome: "Resistência Mágica",
		descricao: `Você luta ativamente contra os efeitos de energias mágicas.`,
		usos: `resistir efeitos mágicos.`
	},

	VIGOR: {
		nome: "Vigor",
		descricao: `Seu corpo pode suportar o estresse físico.`,
		usos: `resistir golpes, venenos e doenças.`,
	},
};

export const CONHECIMENTOS_ORDENADOS = Object.entries(CONHECIMENTOS_DADOS)
	.sort(([_, a], [__, b]) => a.nome.localeCompare(b.nome))
	.map(([id, conhecimento]) => ({
		id: id as CONHECIMENTOS_IDS,
		conhecimento
	}));
