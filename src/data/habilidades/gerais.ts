import { gerar_lista_habilidades } from "./utils";

import { H_APRENDER } from "./h_aprender";
import { H_PASSO_LIGEIRO } from "./h_passo_ligeiro";
import { H_CONTRA_ATAQUE } from "./h_contra_ataque";
import { H_TRANSFORMACAO_DE_BATALHA } from "./h_transformacao_de_batalha";
import { H_VISAO_APRIMORADA } from "./h_visao_aprimorada";
import { H_VOO } from "./h_voo";
import { H_PROTEGER } from "./h_proteger";
import { H_ROLAMENTO } from "./h_rolamento";
import { H_APRENDER_MAGIA } from "./h_aprender_magia";

export const HABILIDADES_DADOS = gerar_lista_habilidades([
	H_APRENDER, H_PASSO_LIGEIRO, H_CONTRA_ATAQUE, H_TRANSFORMACAO_DE_BATALHA,
	H_VISAO_APRIMORADA, H_VOO, H_PROTEGER, H_ROLAMENTO, H_APRENDER_MAGIA
]);
