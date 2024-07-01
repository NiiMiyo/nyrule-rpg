import { HTMLAttributes } from "react";
import { HABILIDADES_DADOS } from "@/data";
import { RenderHabilidade } from "./RenderHabilidade";


export function ListarHabilidades( props : Readonly<Props_ListarHabilidades> ) {
	return <section { ...props.attrs }>
		{ HABILIDADES_DADOS.map(h => <RenderHabilidade habilidade={h} key={h.nome} />) }
	</section>
};

export type Props_ListarHabilidades = {
	attrs?: HTMLAttributes<HTMLTableSectionElement>
}
