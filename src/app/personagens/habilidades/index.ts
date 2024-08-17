import { Pagina } from "@/typing";
import ListaHabilidadesCombate from "./lista-combate";
import ListaHabilidadesGerais from "./lista-gerais";

const pagina: Pagina = {
	nome: "Habilidades",
	href: "/habilidades",

	subPaginas: [
		ListaHabilidadesGerais.pagina,
		ListaHabilidadesCombate.pagina
	],
};

export default { pagina };
