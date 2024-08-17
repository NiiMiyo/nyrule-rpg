import { createElement, ReactNode } from "react";

export function ListaTopicos( props : Readonly<ListaTopicos_Props> ) {
	let { topicos, tipoDeLista, ordenar } = props;

	if (topicos.length === 0)
		return <></>;

	if (ordenar !== undefined) {
		if ( ordenar === true )
			topicos.sort((a, b) => a.titulo.toLocaleString().localeCompare(b.titulo.toLocaleString()));

		else
			topicos.sort(ordenar);
	}

	return <>
		{ topicos.map(mapear) }
	</>

	function mapear(t: Topico) {
		return createElement(tipoDeLista, '', <>
			<span className="topic-start">{t.titulo}:</span> {t.texto}
		</>);
	}
}

type Topico = {
	titulo: NonNullable<ReactNode>;
	texto: NonNullable<ReactNode>;
};

export type ListaTopicos_Props = {
	topicos: Topico[];

	tipoDeLista: "li" | "p";
	ordenar?: true | ((a: Topico, b: Topico) => number);
};
