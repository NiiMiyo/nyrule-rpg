import { Acao } from "@/typing";

export const ACOES_GERAIS: Acao[] = [
	{
		nome: "Andar",
		texto: `Você anda uma quantidade de unidades no mapa igual ou menor que o seu deslocamento máximo. Para andar na diagonal, considere como sendo duas unidades.`,
	},
	{
		nome: "Golpear",
		texto: `Você ataca um personagem adjacente com um golpe corpo a corpo ou um personagem longe usando uma arma à distância ou de arremesso, causando dano ao PV do alvo de acordo com a arma usada. Normalmente um golpe sempre acerta, exceto quando o alvo usa uma Reação que evite o golpe.`,
	},
	{
		nome: "Respirar",
		texto: `Você toma um tempo para respirar e relaxar durante o caos do combate. Recupere 1 PF. Você recupera 1 PF adicional para cada vez que usou Respirar anteriormente no mesmo turno.`
	},
	{
		nome: "Usar Item",
		texto: `Você usa um item que esteja no seu inventário. Esta Ação considera que você pega o item e usa, então não é necessário uma Ação adicional apenas para pegar o item, mas você precisa de pelo menos uma mão livre. Alguns itens podem ter condições específicas para serem usados, como precisar das duas mãos ou uma Ação Longa (veja mais adiante), nesse caso as condições estarão na descrição do item.`
	}
].sort((a, b) => a.nome.localeCompare(b.nome));

export const REACOES_GERAIS: Acao[] = [
	{
		nome: "Esquivar",
		texto: `Você reage ao Golpear de outro personagem, que tenha você como alvo. Faça um teste de Agilidade oposto ao teste do personagem que o golpeou (Combate, quando recebe um golpe corpo a corpo, ou Pontaria, quando recebe um golpe à distância). Se o seu resultado for o maior, o golpe erra sem causar danos, mas se seu resultado for menor ou empatar, o golpe acerta causando dano normalmente.`
	},
	{
		nome: "Resistir Golpe",
		texto: `Você reage ao Golpear de outro personagem, que tenha você como alvo. O golpe ainda o acerta, mas você reduz o dano igual a metade do resultado de um teste de Vigor.`
	},
	{
		nome: "Resistir Magia",
		texto: `Você reage à magia conjurada por outro personagem, que lhe afete diretamente. Você faz um teste de Resistência Mágica. Cada magia descreve em seu texto se essa reação pode ser usada e quais os seus efeitos.`
	}
];
