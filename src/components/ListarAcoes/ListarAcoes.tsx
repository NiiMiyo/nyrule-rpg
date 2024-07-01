import { HTMLAttributes } from "react";
import { ACOES_GERAIS } from "@/data/acoes";
import { RenderAcao } from "@/components";

export function ListarAcoes( props : Readonly<Props_ListarAcoes> ) {
	return <section {...props.attrs}>
		{ ACOES_GERAIS.map(a => <RenderAcao acao={a} key={a.nome} />) }
	</section>
}

export type Props_ListarAcoes = {
	attrs?: HTMLAttributes<HTMLTableSectionElement>
}
