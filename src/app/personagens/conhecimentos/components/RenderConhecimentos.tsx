import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";

export function RenderConhecimentos() {
	return <section>
		{ sorted_conhecimentos.map(({id, conhecimento}) => {
			return <div key={id}>
				<h2>{ conhecimento.nome }</h2>
				<p>{ conhecimento.descricao }</p>
				<p>Usos comuns: { conhecimento.usos }</p>
			</div>
		}) }
	</section>
};

const sorted_conhecimentos = Object.entries(CONHECIMENTOS_DADOS)
	.sort(([_, a], [__, b]) => a.nome.localeCompare(b.nome))
	.map(([id, conhecimento]) => ({ id, conhecimento }));
