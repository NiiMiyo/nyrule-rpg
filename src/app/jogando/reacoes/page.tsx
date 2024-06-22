import ListarReacoes from "@/components/ListarReacoes";

export default function Page_Reacoes() {
	return <main>
		<h2>Reagindo</h2>
		<p>
			Você pode usar todas as suas Ações durante o seu turno, isso significa
			que você fez tudo o que podia assim que viu a oportunidade, mas nem
			sempre essa pode ser a decisão mais prudente. Além de usar suas Ações
			para agir no seu turno, é possível guardar suas Ações para agir no
			turno de outros personagens na cena. Isso é chamado <i>Reagir</i>.
		</p>

		<p>
			Fazer uma Reação é usar uma Ação que ainda possua como resposta a algum
			evento fora do seu controle, como um oponente usando Golpear para te
			atacar. Cada Reação descreve o evento em que você pode usá-la, e não
			pode ser usada fora das condições especificadas.
		</p>

		<p>
			Um personagem só recebe suas primeiras Ações na cena no início do seu
			primeiro turno, isto significa que aquele personagem não poderá Reagir
			antes de seu primeiro turno na cena.
		</p>

		<ListarReacoes />
	</main>
}
