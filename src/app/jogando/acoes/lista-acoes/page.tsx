import ListarAcoes from "@/components/ListarAcoes";
import ListarReacoes from "@/components/ListarReacoes";

export default function Page_ListarAcoes() {
	return <main>
		<h2>Ações em Combate</h2>
		<p>
			As Ações descritas nessa sessão podem ser usadas durante um combate por
			qualquer personagem. Outras Ações só se tornam disponíveis através de
			Habilidades. Com a permissão do Mestre, você é livre para usar Ações
			diferentes das descritas aqui, contanto que sejam possíveis para o seu
			personagem.
		</p>
		<ListarAcoes />

		<h2>Reações em Combate</h2>
		<p>
			As Reações descritas nessa sessão podem ser usadas durante um combate
			por qualquer personagem. Outras Reações só se tornam disponíveis
			através de Habilidades.
		</p>
		<ListarReacoes />
	</main>;
}
