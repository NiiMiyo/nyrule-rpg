import { Habilidade, HabilidadeCategoria } from "@/typing";


export const C_MEMBROS: Habilidade = {
	nome: "Membros",
	custo: 0,
	categoria: HabilidadeCategoria.CARACTERISTICA,
	descricao: "Define quantos itens seu personagem pode manipular simultaneamente. Apesar do nome desta característica, você é livre para decidir como esses itens são manipulados, através de mãos, bocas, tentáculos, telecinese...",

	aprimoramentos: [{
		nome: "Um membro",
		custo: -1,
		descricao: "Você só pode manipular um item por vez.",
	}, {
		nome: "Dois membros",
		custo: 0,
		descricao: "Você pode manipular dois itens simultaneamente."
	}, {
		nome: "Múltiplos membros",
		custo: 1,
		descricao: `Você pode manipular três itens simultaneamente. Você pode comprar essa Característica múltiplas vezes. Para cada vez adicional que comprar, aumente o custo em 1 XP e a quantidade de membros em 1.

		Por exemplo, 1 XP para 3 membros na primeira compra, +2 XP para 4 membros , +3 XP para 5 membros...`
	}]
}
