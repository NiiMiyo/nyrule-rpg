import { HTMLAttributes } from "react";
import { HABILIDADES_DADOS } from "@/data/habilidades";
import { Habilidade } from "@/typing";
import { RenderHabilidade } from "./RenderHabilidade";


export function ListarHabilidades( props : Readonly<Props_ListarHabilidades> ) {
	const { filtro, ...attrs } = props;

	const habilidades_filtradas = filtro !== undefined
		? HABILIDADES_DADOS.filter(filtro)
		: HABILIDADES_DADOS;

	return <section { ...attrs }>
		{ habilidades_filtradas
			.map(h => <RenderHabilidade habilidade={h} key={h.nome} />)
		}
	</section>
};

export type Props_ListarHabilidades = {
	attrs?: HTMLAttributes<HTMLTableSectionElement>;
	filtro?(h: Habilidade): boolean;
}
