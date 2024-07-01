import { Acao } from "@/typing";

export const A_USAR_ITEM: Acao = {
	nome: "Usar Item",
	texto: `Você usa um item que esteja no seu inventário. Esta Ação considera que você pega o item e usa, então não é necessário uma Ação adicional apenas para pegar o item, mas você precisa de pelo menos uma mão livre (ou uma forma equivalente de manusear o item). Alguns itens podem ter condições específicas para serem usados, como precisar das duas mãos ou uma Ação Longa, nesse caso as condições estarão na descrição do item.`
};
