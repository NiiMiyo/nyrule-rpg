import { Habilidade, HabilidadeCategoria } from "@/typing";
import { R_PROTEGER } from "@/data/acoes";
import { conceder_acao } from "./utils";

export const H_PROTEGER: Habilidade = {
	nome: "Proteger",
	custo: 3,
	categoria: HabilidadeCategoria.COMBATE,
	descricao: conceder_acao(R_PROTEGER),
};
