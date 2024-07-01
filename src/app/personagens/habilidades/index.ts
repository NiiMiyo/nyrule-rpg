import { Pagina } from "@/typing";
import ListaHabilidades from "./lista-habilidades";

const pagina: Pagina = {
	nome: "Habilidades",
	href: "/habilidades",

	subPaginas: [
		ListaHabilidades.pagina
	],
};

export default { pagina };
