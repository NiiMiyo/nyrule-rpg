import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";
import { Aprimoramento } from "@/typing";

export type Props_RenderAprimoramento = {
	aprimoramento: Aprimoramento;
};

export function RenderAprimoramento(props : Readonly<Props_RenderAprimoramento>) {
	const { aprimoramento: habilidade } = props;
	const { nome, custo, prerequisitos, descricao } = habilidade;

	return <div>
		<h4> { nome } ({ custo ? `${custo} XP` : "XP Variável" }) </h4>

		{ prerequisitos &&
			<p>
				Pré-requisitos: { prerequisitos.map(pr => {
					if (pr.tipo === "conhecimento")
						return `${CONHECIMENTOS_DADOS[pr.conhecimento].nome} ${pr.valor}`;

					else if (pr.tipo === "custom")
						return pr.texto;
				}).join(", ") }
			</p>
		}

		<p>{ descricao }</p>
	</div>
}
