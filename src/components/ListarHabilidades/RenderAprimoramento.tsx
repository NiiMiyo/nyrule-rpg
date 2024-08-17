import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";
import { Aprimoramento } from "@/typing";
import { custoTexto } from "./RenderHabilidade";

export type Props_RenderAprimoramento = {
	aprimoramento: Aprimoramento;
};

export function RenderAprimoramento(props : Readonly<Props_RenderAprimoramento>) {
	const { aprimoramento } = props;
	const { nome, prerequisitos, descricao } = aprimoramento;

	return <div>
		<h4> { nome }{ custoTexto(aprimoramento) } </h4>

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

		{ typeof descricao == "string"
			? <p>{descricao}</p>
			: descricao
		}
	</div>
}
