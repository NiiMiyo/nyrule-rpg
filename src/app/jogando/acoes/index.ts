import { Pagina } from "@/typing";
import ListaAcoes from "./lista-acoes";

const pagina: Pagina = {
	nome: "Tomando Ações",
	href: "/acoes",

	subPaginas: [
		ListaAcoes.pagina,
	]
};

export default { pagina };
