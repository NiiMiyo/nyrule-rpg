import { Habilidade } from "@/typing";
import { H_APRENDER } from "./h_aprender";
import { H_PASSO_LIGEIRO } from "./h_passo_ligeiro";
import { H_CONTRA_ATAQUE } from "./h_contra_ataque";
import { H_TRANSFORMACAO_DE_BATALHA } from "./h_transformacao_de_batalha";
import { H_VISAO_APRIMORADA } from "./h_visao_aprimorada";
import { H_VOO } from "./h_voo";
import { H_PROTEGER } from "./h_proteger";

export const HABILIDADES_DADOS: Habilidade[] = [
	H_APRENDER, H_PASSO_LIGEIRO, H_CONTRA_ATAQUE, H_TRANSFORMACAO_DE_BATALHA,
	H_VISAO_APRIMORADA, H_VOO, H_PROTEGER,
].map(h => {
	return {
		...h,
		aprimoramentos: h.aprimoramentos
			?.sort((a, b) => a.nome.localeCompare(b.nome)) }
	})
.sort((a, b) => a.nome.localeCompare(b.nome));
