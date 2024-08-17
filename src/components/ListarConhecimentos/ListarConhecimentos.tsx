import { CONHECIMENTOS_ORDENADOS } from "@/data/conhecimentos";

export function ListarConhecimentos() {
	return <section>
		{ CONHECIMENTOS_ORDENADOS.map(c => {
			return <div key={c.id}>
				<p>
					<span className="topic-start">{ c.conhecimento.nome }: </span>
					{ c.conhecimento.descricao + " " }
					Você usa { c.conhecimento.nome } para { c.conhecimento.usos }
				</p>
			</div>
		}) }
	</section>
};
