import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";
import ListaTopicos from "@/components/ListaTopicos";


export const C_VISAO: Habilidade = {
	nome: "Visão",
	custo: 0,
	categoria: HabilidadeCategoria.CARACTERISTICA,
	descricao: "Determina sua capacidade de enxergar.",

	aprimoramentos: [{
		nome: "Visão comum",
		custo: 0,
		descricao: "Você não sofre nenhum tipo de penalidade ou bônus em testes para enxergar.",
	}, {
		nome: "Cegueira completa",
		custo: -2,
		// todo: adicionar imunidade a condições que prejudiquem a visão
		descricao: `Você é incapaz de enxergar qualquer coisa. Você não pode fazer testes de ${CONHECIMENTOS_DADOS.OBSERVAÇÃO.nome} para enxergar.`
	}, {
		nome: "Visão reduzida",
		custo: undefined,
		descricao: <>
			<p>
				Você tem seu senso de visão reduzido de alguma forma. Escolha entre as penalidades a seguir. Você recebe 1 XP adicional para um que escolher até um limite de 2 XP, mas pode escolher mais opções sem XP adicional.
			</p>

			<ListaTopicos tipoDeLista="p" ordenar topicos={[{
				titulo: "Vista ruim",
				texto: `Você recebe -5 em testes de ${CONHECIMENTOS_DADOS.OBSERVAÇÃO.nome} para enxergar.`
			}, {
				titulo: "Daltonismo",
				texto: "Você tem dificuldade para distinguir certas cores. Entre em acordo com o mestre deve decidir em quais situações você é capaz ou não de enxergar certas cores."
			}, {
				titulo: "Cegueira noturna",
				texto: "Quando estiver em penumbra você recebe as mesmas penalidade de estar no escuro."
			}]} />
		</>,
	}, {
		nome: "Visão aprimorada",
		custo: 3,
		descricao: <>
			<p>Você recebe +2 em {CONHECIMENTOS_DADOS.OBSERVAÇÃO.nome} e quando faz um teste de {CONHECIMENTOS_DADOS.OBSERVAÇÃO.nome} para enxergar, e apenas uma vez por teste, você pode rolar o dado novamente e usar o maior valor rolado.</p>

			<p>Opcionalmente, você pode pagar +1 XP para ser capaz de enxergar em penumbra ou pagar +2 XP para ser capaz de enxergar no escuro.</p>
		</>,
	}]
}
