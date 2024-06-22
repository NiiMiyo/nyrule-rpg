import { CONHECIMENTOS_DADOS } from "@/data";

export default function Page_Conhecimentos() {
	return <main>
		<p>
			Os conhecimentos de um personagem definem o quão bom este é em suas
			atividades. Quanto maior o conhecimento em uma área, maior sua chance
			de sucesso em quaisquer atividades relacionadas àquela área. Apesar do
			nome, os Conhecimentos também podem representar capacidades físicas de
			um personagem.
		</p>

		<p>
			Por exemplo, um guarda comum provavelmente terá alto Conhecimento em
			Combate ou Pontaria, por conta do seu treinamento para proteger as ruas
			ou as muralhas da cidade, mas dificilmente terá um bom Conhecimento em
			Magia, se sequer possuir algum.
		</p>

		<RenderConhecimentos />
	</main>
}

type Props_RenderConhecimentos = {};
function RenderConhecimentos( props : Readonly<Props_RenderConhecimentos> ) {
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
