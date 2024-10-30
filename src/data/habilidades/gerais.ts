import { gerar_lista_habilidades } from "./utils";

import { H_APRENDER } from "./h_aprender";
import { H_PASSO_LIGEIRO } from "./h_passo_ligeiro";
import { H_CONTRA_ATAQUE } from "./h_contra_ataque";
import { H_TRANSFORMACAO_DE_BATALHA } from "./h_transformacao_de_batalha";
import { H_PROTEGER } from "./h_proteger";
import { H_ROLAMENTO } from "./h_rolamento";
import { H_AUMENTO_PV } from "./h_aumento_pv";
import { C_MEMBROS } from "./c_membros";
import { C_VISAO } from "./c_visao";
import { C_MOVIMENTO } from "./c_movimento";
import { C_METABOLISMO } from "./c_metabolismo";
import { H_APRENDER_MAGIA } from "./h_aprender_magia";
import { H_AO_ACASO } from "./h_ao_acaso";

export const HABILIDADES_DADOS = gerar_lista_habilidades([
	H_APRENDER, H_PASSO_LIGEIRO, H_CONTRA_ATAQUE, H_TRANSFORMACAO_DE_BATALHA, H_PROTEGER, H_ROLAMENTO, H_AUMENTO_PV, C_MEMBROS, C_VISAO, C_MOVIMENTO, C_METABOLISMO, H_APRENDER_MAGIA, H_AO_ACASO,
]);
