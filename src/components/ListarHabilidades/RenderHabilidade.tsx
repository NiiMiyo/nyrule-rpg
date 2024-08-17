import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";
import { Aprimoramento, Habilidade } from "@/typing";
import { RenderAprimoramento } from "./RenderAprimoramento";

import styles from "./ListarHabilidades.module.scss";

export type Props_RenderHabilidades = {
	habilidade: Habilidade;
};

export function RenderHabilidade(props : Readonly<Props_RenderHabilidades>) {
	const { habilidade } = props;
	const { nome, prerequisitos, descricao, aprimoramentos } = habilidade;

	return <div>
		<h3> { nome }{ custoTexto(habilidade) } </h3>

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

		<div className={styles.aprimoramentos}>
			{ aprimoramentos?.map(a => <RenderAprimoramento aprimoramento={a} key={a.nome} />) }
		</div>
	</div>
}

export function custoTexto(h: Habilidade | Aprimoramento): string {
	const { custo } = h;

	if (custo === undefined)
		return " (XP Variável)";

	if (custo === 0)
		return "";

	return ` (${custo} XP)`;
}
