import { Acao } from "@/typing";
import { A_GOLPEAR } from "@/data/acoes";

export const R_PROTEGER: Acao = {
	nome: "Proteger",
	texto: `Quando um aliado adjacente é alvo de um ${A_GOLPEAR.nome}, você o empurra 1 unidade em qualquer direção e se move para a posição anterior do aliado, recebendo o golpe em seu lugar.`
};
