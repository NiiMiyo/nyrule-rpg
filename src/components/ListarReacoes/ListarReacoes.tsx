import { HTMLAttributes } from "react";
import { REACOES_GERAIS } from "@/data/acoes";
import { RenderAcao } from "@/components";

export function ListarReacoes( props : Readonly<Props_ListarReacoes> ) {
	return <section {...props.attrs} >
		{ REACOES_GERAIS.map(r => <RenderAcao acao={r} key={r.nome} />) }
	</section>
}

export type Props_ListarReacoes = {
	attrs?: HTMLAttributes<HTMLTableSectionElement>
}
