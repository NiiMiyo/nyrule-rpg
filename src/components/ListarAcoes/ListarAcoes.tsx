import { ACOES_GERAIS } from "@/data";
import RenderAcao from "../Acao";

export function ListarAcoes() {
	return <section>
		{ ACOES_GERAIS.map(a => <RenderAcao acao={a} key={a.nome} />) }
	</section>
}
