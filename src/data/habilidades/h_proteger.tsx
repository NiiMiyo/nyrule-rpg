import RenderAcao from "@/components/Acao";
import { Habilidade, HabilidadeCategoria } from "@/typing";
import { R_PROTEGER } from "@/data/acoes";

export const H_PROTEGER: Habilidade = {
	nome: "Proteger",
	custo: 3,
	categoria: HabilidadeCategoria.COMBATE,
	descricao: <>
		Você recebe a Reação { R_PROTEGER.nome }.
		<RenderAcao acao={ R_PROTEGER } />
	</>,
};
