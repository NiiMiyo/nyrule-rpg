export type Pagina = {
	nome: string;
	href: string;

	subPaginas?: Pagina[];
};
