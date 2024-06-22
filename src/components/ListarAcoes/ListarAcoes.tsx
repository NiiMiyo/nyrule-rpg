import { ACOES_GERAIS } from "@/data";
import RenderAcao from "../Acao";

export function ListarAcoes() {
	return <section>
		<h2>Listar Ações</h2>
		<p>
			As Ações descritas nessa sessão podem ser usadas durante um combate por
			qualquer personagem. Outras Ações só se tornam disponíveis através de
			Habilidades. Com a permissão do Mestre, você é livre para usar Ações
			diferentes das descritas aqui, contanto que sejam possíveis para o seu
			personagem.
		</p>

		{ ACOES_GERAIS.map(a => <RenderAcao acao={a} key={a.nome} />) }
	</section>
}
