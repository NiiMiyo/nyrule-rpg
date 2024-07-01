import { Acao } from "@/typing";
import { A_ANDAR } from "./a_andar";
import { A_GOLPEAR } from "./a_golpear";
import { A_RESPIRAR } from "./a_respirar";
import { A_USAR_ITEM } from "./a_usar_item";
import { R_ESQUIVAR } from "./r_esquivar";
import { R_RESISTIR_GOLPE } from "./r_resistir_golpe";
import { R_RESISTIR_MAGIA } from "./r_resistir_magia";


export const ACOES_GERAIS: Acao[] = [
	A_ANDAR, A_GOLPEAR, A_RESPIRAR, A_USAR_ITEM,
].sort((a, b) => a.nome.localeCompare(b.nome));

export const REACOES_GERAIS: Acao[] = [
	R_ESQUIVAR, R_RESISTIR_GOLPE, R_RESISTIR_MAGIA,
];
