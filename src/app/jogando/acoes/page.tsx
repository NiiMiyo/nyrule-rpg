import ListarAcoes from "@/components/ListarAcoes";

export default function Page_Acoes() {
	return <main>
		<h2>Tomando Ações</h2>
		<p>
			Há todo momento existem decisões há serem tomadas e coisas para serem
			feitas. Quando precisar escolher o que fazer, seja em um combate,
			viajando ou em uma discussão calorosa, você precisará tomar uma Ação.
			Uma Ação é uma atividade que seu personagem executa em uma situação
			onde não há tempo a perder, muitas vezes sendo necessário o teste de
			alguma Especialização.
		</p>

		<h2>Turnos e Rodadas</h2>
		<p>
			Quando dois ou mais personagens tentam agir ao mesmo tempo, como em um
			combate ou em uma discussão, será necessário ordem para que todos
			tenham a sua vez de fazer algo no jogo. Nesses casos é necessário
			dividir a cena em rodadas e turnos.
		</p>
		<p>
			Um turno é a vez de um personagem na cena agir. Em cada turno, o
			personagem tem direito de fazer <strong>três Ações</strong>, mas
			algumas Habilidades podem aumentar ou diminuir esse número. No início
			de cada um dos seus turnos o personagem recupera suas Ações gastas.
		</p>
		<p>
			Uma rodada é a sequência de turnos de cada personagem na cena. Algumas
			Habilidades e Ações usam uma rodada como medida de tempo, nesses casos,
			a rodada é considerada terminada quando o turno daquele personagem
			começar novamente.
		</p>
		<p>
			Para definir a ordem dos personagem na rodada, cada personagem na cena
			faz um teste de Agilidade e aqueles com maior valor agem primeiro. Em
			caso de empate, os personagens que empataram fazem outros testes de
			Agilidade, os que tirarem o maior valor agem primeiro.
		</p>

		<h2>Ações em Combate</h2>
		<p>
			As Ações descritas nessa sessão podem ser usadas durante um combate por
			qualquer personagem. Outras Ações só se tornam disponíveis através de
			Habilidades. Com a permissão do Mestre, você é livre para usar Ações
			diferentes das descritas aqui, contanto que sejam possíveis para o seu
			personagem.
		</p>

		<ListarAcoes />
	</main>
}
