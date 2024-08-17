import { Pagina } from "@/typing";
import ListaHabilidadesCaracteristicas from "./lista-caracteristicas";
import ListaHabilidadesCombate from "./lista-combate";
import ListaHabilidadesGerais from "./lista-gerais";

const pagina: Pagina = {
	nome: "Habilidades",
	href: "/habilidades",

	subPaginas: [
		ListaHabilidadesCaracteristicas.pagina,
		ListaHabilidadesGerais.pagina,
		ListaHabilidadesCombate.pagina
	],
};

export default { pagina };
