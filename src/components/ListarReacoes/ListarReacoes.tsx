import { REACOES_GERAIS } from "@/data";
import RenderAcao from "../Acao";

export function ListarReacoes() {
	return <section>
		<h2>Reações em Combate</h2>
		<p>
			As Reações descritas nessa sessão podem ser usadas durante um combate
			por qualquer personagem. Outras Reações só se tornam disponíveis
			através de Habilidades.
		</p>

		{ REACOES_GERAIS.map(r => <RenderAcao acao={r} key={r.nome} />) }
	</section>
}
