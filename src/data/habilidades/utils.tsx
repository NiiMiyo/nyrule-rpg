import { RenderAcao } from "@/components";
import { Acao } from "@/typing";

export function conceder_acao(acao: Acao): JSX.Element {
	return <>
		Você recebe a {acao.reacao ? "Reação" : "Ação"} { acao.nome }.
		<RenderAcao acao={ acao } />
	</>;
}
