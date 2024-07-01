import { REACOES_GERAIS } from "@/data";
import RenderAcao from "../Acao";

export function ListarReacoes() {
	return <section>
		{ REACOES_GERAIS.map(r => <RenderAcao acao={r} key={r.nome} />) }
	</section>
}
