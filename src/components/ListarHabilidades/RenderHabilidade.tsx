import { CONHECIMENTOS_DADOS } from "@/data/conhecimentos";
import { Habilidade } from "@/typing";
import { RenderAprimoramento } from "./RenderAprimoramento";

import styles from "./ListarHabilidades.module.scss";

export type Props_RenderHabilidades = {
	habilidade: Habilidade;
};

export function RenderHabilidade(props : Readonly<Props_RenderHabilidades>) {
	const { habilidade } = props;
	const { nome, custo, prerequisitos, descricao, aprimoramentos } = habilidade;

	return <div>
		<h3> { nome } ({ custo ? `${custo} XP` : "XP Variável" }) </h3>

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
