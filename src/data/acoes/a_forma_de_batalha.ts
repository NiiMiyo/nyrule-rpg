import { Acao } from "@/typing";
import { CONHECIMENTOS_DADOS } from "../conhecimentos";

export const A_FORMA_DE_BATALHA: Acao = {
	nome: "Forma de Batalha",
	texto: `Enquanto estiver transformado, você recebe +2 em testes de ${CONHECIMENTOS_DADOS.AGILIDADE.nome}, ${CONHECIMENTOS_DADOS.COMBATE.nome}, ${CONHECIMENTOS_DADOS.FORÇA.nome} e ${CONHECIMENTOS_DADOS.VIGOR.nome}, mas sofre -4 em testes de ${CONHECIMENTOS_DADOS.CONVERSA.nome}, ${CONHECIMENTOS_DADOS.MAGIA.nome}, ${CONHECIMENTOS_DADOS.MEDICINA.nome}, ${CONHECIMENTOS_DADOS.MENTIRA.nome}, ${CONHECIMENTOS_DADOS.OBSERVAÇÃO.nome} e ${CONHECIMENTOS_DADOS.RESISTÊNCIA_MAGICA.nome}. Você pode encerrar a forma com uma Ação.`
};
