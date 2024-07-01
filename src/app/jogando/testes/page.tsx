import styles from "./styles.module.scss";

export default function Page_Testes() {
	return <main>
		<h2>Testes</h2>
		<p>
			Sempre você que tomar uma ação com resultado incerto, o Mestre pode
			pedir um <strong>teste</strong>. Um teste consiste em uma rolagem de
			1d10 somando bônus e subtraindo penalidades. Normalmente os testes
			envolvem algum tipo de habilidade que seu personagem possui, então você
			costuma somar o valor de um Conhecimento em cada teste.
		</p>

		<p>
			Situações particularmente simples e fáceis, como caminhar em uma
			superfície plana ou enxergar alguém diretamente a sua frente,
			normalmente não exigem testes e são feitas normalmente.
		</p>

		<h3>Metas</h3>
		<p>
			A maioria dos testes envolve alcançar uma Meta. Isto é, ao rolar o
			dado e somar o Conhecimento apropriado o valor alcançado
			precisa ser <strong>maior ou igual</strong> a outro valor estabelecido,
			chamado de <i>Meta</i> do teste. Se a Meta for alcançada, o teste é
			considerado um sucesso; caso contrário, é considerado uma falha.
		</p>
		<p>Abaixo uma tabela para auxiliar ao definir a meta para um teste.</p>

		<table className={styles.tabela_metas}>
			<thead>
				<tr>
					<th>Meta</th>
					<th>Nível</th>
					<th>Exemplo</th>
				</tr>
			</thead>
			<tbody>
				{ DIFICULDADE_METAS.map(d => <tr key={d.dificuldade}>
					<td>{ d.meta }</td>
					<td>{ d.dificuldade }</td>
					<td>{ d.descricao }</td>
				</tr>) }
			</tbody>
		</table>

		<h4>Bônus e Penalidades</h4>
		<p>
			Bônus representam situações e condições que <strong>ajudam</strong> um
			personagem a obter sucesso em um teste, enquanto penalidades{" "}
			<strong>dificultam</strong> o sucesso. Os bônus são somados ao valor
			do teste para alcançar a Meta, enquanto as penalidades são subtraídas
			do valor do teste.
		</p>
		<p>
			Por exemplo, atirar em um oponente próximo não é uma
			tarefa particularmente difícil, mas se a distância for muito grande, o
			vento estiver forte ou o alvo estiver escondido, isso se torna muito
			mais desafiador. Em casos onde o ambiente ou a situação dos personagens
			favorecer ou atrapalhar um teste o personagem pode ganhar bônus ou
			penalidade.
		</p>
		<p>
			Eventos que ajudam levemente a atividade, como atirar em uma posição
			vantajosa, alteram pouco o teste, dando +1 ou +2 pontos bônus ao
			resultado. A maioria dos bônus se enquadra nessa categoria. 
		</p>
		<p>
			O mesmo vale para as penalidades. Situações como se esconder em uma
			planície sem árvores, mas com alguns arbustos, pode dar -1 ou -2 pontos
			ao resultado do teste, enquanto situações particularmente desafiadoras,
			como atirar com um estilingue em um passarinho a centenas de metros em
			um dia de vento forte, são quase impossíveis e dão grandes penalidades
			ao teste, como -15 ou uma falha automática.
		</p>
	</main>
}

const DIFICULDADE_METAS = [{
	meta: 5,
	dificuldade: "Simples",
	descricao: "Um adulto comum pode fazer, mas ainda exige um pouco de esforço",
}, {
	meta: 10,
	dificuldade: "Fácil",
	descricao: "Exige um treinamento básico prévio no assunto (ou muita sorte!) pra conseguir fazer algo assim."
}, {
	meta: 15,
	dificuldade: "Médio",
	descricao: "Exige treinamento intermediário no assunto ou ajuda de alguém mais experiente."
}, {
	meta: 20,
	dificuldade: "Difícil",
	descricao: "Exige treinamento avançado no assunto ou ajuda de um pequeno time."
}, {
	meta: "30",
	dificuldade: "Profissional",
	descricao: "Exige anos de treinamento ou muita ajuda profissional."
}, {
	meta: "40+",
	dificuldade: "Mestre",
	descricao: "Exige domínio perfeito na arte e décadas de prática para conseguir algo neste nível.",
}];
