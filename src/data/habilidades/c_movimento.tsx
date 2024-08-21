import { Habilidade, HabilidadeCategoria } from "@/typing";
import { A_ANDAR } from "@/data/acoes";
import ListaTopicos from "@/components/ListaTopicos";


export const C_MOVIMENTO: Habilidade = {
	nome: "Movimento",
	custo: 0,
	categoria: HabilidadeCategoria.CARACTERISTICA,
	descricao: "Determina em quais meios você é capaz de se locomover e qual a sua velocidade de movimento.",

	aprimoramentos: [{
		nome: "Movimento comum",
		custo: 0,
		descricao: `Você pode se mover 4 unidades sempre que ${A_ANDAR.nome} e só pode se mover em superfícies sólidas. Você também é capaz de se mover em líquidos, mas gasta o dobro de unidades.`
	}, {
		nome: "Movimento reduzido",
		custo: -1,
		descricao: `Sua capacidade de movimento é reduzida. Você pode se mover 2 unidades sempre que ${A_ANDAR.nome} e só pode se mover em superfícies sólidas que sustentem seu peso.`,
	}, {
		nome: "Movimentos alternativos",
		custo: undefined,
		descricao: <>
			<p>Você pode se mover de diferentes formas. Você recebe "Movimento comum" e pode escolher entre qualquer quantidade de tipos de movimentos adicionais da lista a seguir e pagar seu custo em XP.</p>

			<ListaTopicos tipoDeLista="p" ordenar topicos={[{
				titulo: "Aéreo (+4 XP)",
				texto: `Quando ${A_ANDAR.nome} pode usar uma de suas unidades de movimento para se deslocar uma unidade na vertical, para cima ou para baixo. Sempre que terminar seu turno fora do chão você gasta 1 PE. Durante seu turno você também pode cair em queda livre a qualquer momento sem gastar uma Ação.`
			}, {
				titulo: "Aquático (+2 XP)",
				texto: `Para nadar você gasta unidades normalmente, ao invés de dobradas.`
			}]} />
		</>
	}]
}
