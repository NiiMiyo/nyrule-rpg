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

		<ListarAcoes />

		<h2>Ações fora de combate</h2>
		<p>
			Fora de combate as Ações e Reações disponíveis para cada personagem são
			mais amplas e vagas e muitas vezes não envolvem turnos ou rodadas, mas
			existem outras formas de medir o tempo.
		</p>
		<p>
			Em cenas de exploração, por exemplo, as Ações de um personagem podem
			representar as coisas feitas antes do dia acabar, como ir às compras,
			buscar informações ou descansar para recuperar PVs extras naquele dia.
			Em cenas sociais, as Ações podem representar a sua vez de responder as
			acusações daquele nobre no tribunal.
		</p>
		<p>
			Fora de combate, pode ser prudente diminuir o número de Ações que cada
			personagem pode tomar cada vez. Por exemplo, em uma discussão cada
			personagem pode ter apenas uma Ação por turno, em que fazem testes de
			Conversa para convencer o oponente que sua ideia é muito melhor. Ou
			ainda, em uma viagem muito longa, cada personagem poder executar apenas
			uma Ação por dia de viagem. Também é possível que a quantidade de
			rodadas de uma cena seja limitada, existe um número limite de vezes que
			você pode tentar barganhar com um vendedor antes dele te expulsar!
		</p>

		<h2>Ações Longas</h2>
		<p>
			Na maioria dos casos, um personagem pode usar suas três Ações para
			fazer três coisas diferentes, como andar, golpear e usar um item,
			entretanto algumas atividades podem ser consideras{' '}
			<strong>Ações Longas</strong>. Quando faz uma Ação Longa, você gasta
			mais do que uma única Ação para executar aquela atividade. Os usos mais
			comuns de Ações Longas são ataques com armas pesadas, conjurações de
			magias e o uso de alguns itens.
		</p>

		<h3>Dividindo Ações Longas</h3>
		<p>
			As Ações de uma Ação Longa devem ser gastas em sequência, ou seja, se
			você executar uma Ação diferente no meio de uma Ação Longa ela falhará.
			Por exemplo, se você usa duas Ações para conjurar uma magia{" "}
			<strong>você não pode</strong> usar a primeira Ação para começar a
			conjuração, usar uma segunda Ação para andar e em seguida usar a sua
			terceira Ação para terminar de conjurar a magia.
		</p>
		<p>
			Entretanto, uma Ação Longa pode ser dividida, contanto que não seja
			interrompida. Seguindo o nosso exemplo anterior,{" "}
			<strong>você pode</strong> usar uma Ação para andar, uma segunda Ação
			para começar a conjurar uma magia, sem finalizá-la, e então terminar
			seu turno. A Ação restante pode ser usada para Reagir fora do seu
			turno, mas caso isso aconteça a magia falhará, pois a Ação Longa foi
			interrompida. No início do seu próximo turno você poderá usar uma Ação
			para finalizar a magia.
		</p>
	</main>
}
