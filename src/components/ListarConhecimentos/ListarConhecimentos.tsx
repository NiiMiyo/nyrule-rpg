import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";

export function ListarConhecimentos() {
	return <section>
		{ sorted_conhecimentos.map(({id, conhecimento}) => {
			return <div key={id}>
				<h2>{ conhecimento.nome }</h2>
				<p>
					{ conhecimento.descricao + " " }
					Você usa {conhecimento.nome} para { conhecimento.usos }
				</p>
			</div>
		}) }
	</section>
};

const sorted_conhecimentos = Object.entries(CONHECIMENTOS_DADOS)
	.sort(([_, a], [__, b]) => a.nome.localeCompare(b.nome))
	.map(([id, conhecimento]) => ({ id, conhecimento }));
