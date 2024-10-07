import { Habilidade, HabilidadeCategoria } from "@/typing";
import { A_CONJURAR, R_REAJUSTE_CONJURACAO } from "@/data/acoes";
import { CONHECIMENTOS_DADOS, CONHECIMENTOS_IDS } from "@/data/conhecimentos";
import { conceder_acao } from "./utils";


export const H_APRENDER_MAGIA: Habilidade = {
	nome: "Aprender Magia",
	custo: 2,
	categoria: HabilidadeCategoria.GERAL,
	descricao: <>
		Você se torna capaz de conjurar magias de um Domínio a sua escolha. { conceder_acao(A_CONJURAR) }
	</>,

	prerequisitos: [{
		tipo: "conhecimento",
		conhecimento: CONHECIMENTOS_IDS.MAGIA,
		valor: 5,
	}],

	aprimoramentos: [{
		custo: 2,
		nome: "Conjuração Concentrada",
		prerequisitos: [{ tipo: "conhecimento", conhecimento: CONHECIMENTOS_IDS.MAGIA, valor: 10 }],
		descricao: `Você pode conjurar como uma Ação Longa. Com duas Ações você recebe +3 no seu teste de ${CONHECIMENTOS_DADOS.MAGIA.nome}; com quatro Ações recebe +10.`
	}, {
		custo: 2,
		nome: "Aprender Domínio",
		prerequisitos: [{ tipo: "conhecimento", conhecimento: CONHECIMENTOS_IDS.MAGIA, valor: 7 }],
		descricao: `Escolha um Domínio que não possa conjurar. Você passa a poder conjurar magias do Domínio escolhido. Você pode comprar esse Aprimoramento várias vezes, mas aumente seu custo em XP em 1 para cada compra anterior e seu pré-requisito em em 3.`,
	}, {
		custo: 1,
		nome: "Fortalecer Domínio",
		descricao: `Escolha um Domínio que possa conjurar. Quando conjurar uma magia daquele Domínio, receba +3 no seu teste de ${CONHECIMENTOS_DADOS.MAGIA.nome}. Você pode comprar esse Aprimoramento várias vezes.`,
	}, {
		custo: 1,
		nome: "Magia Silenciosa",
		descricao: "Quando lança uma magia, você não precisa vocalizar encantamentos, permitindo que conjure magias quando não pode falar, mas aumente a Meta do teste em 5."
	}, {
		custo: 1,
		nome: "Magia Imóvel",
		descricao: "Quando lança uma magia, você não precisa executar movimentos, permitindo que conjure magias quando não pode se mover, mas aumente a Meta do teste em 5."
	}, {
		custo: 3,
		nome: "Reajuste de Conjuração",
		prerequisitos: [{ tipo: "conhecimento", conhecimento: CONHECIMENTOS_IDS.MAGIA, valor: 15 }],
		descricao: conceder_acao(R_REAJUSTE_CONJURACAO)
	}]
}
