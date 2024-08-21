import { Pagina } from "@/typing";

export const indice: Pagina[] = [
	{
		nome: "Início",
		href: "/",
	},
	{
		nome: "Personagens",
		href: "/personagens",
		subPaginas: [
			{
				nome: "Conhecimentos",
				href: "/conhecimentos",
			},
			{
				nome: "Habilidades",
				href: "/habilidades",
				subPaginas: [
					{
						nome: "Características",
						href: "/lista-caracteristicas",
					},
					{
						nome: "Habilidades Gerais",
						href: "/lista-gerais",
					},
					{
						nome: "Habilidades de Combate",
						href: "/lista-combate",
					},
				]
			},
		]
	},
	{
		nome: "Jogando",
		href: "/jogando",
		subPaginas: [
			{
				nome: "Tomando Ações",
				href: "/acoes",
			
				subPaginas: [
					{
						nome: "Lista de Ações e Reações",
						href: "/lista-acoes",
					},
				]
			},
			{
				nome: "Testes",
				href: "/testes",
			},
		]
	}
];
export default indice;
