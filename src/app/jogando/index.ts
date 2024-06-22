import { Pagina } from "@/typing";
import Acoes from "./acoes";
import Reacoes from "./reacoes";

const pagina: Pagina = {
	nome: "Jogando",
	href: "/jogando",
	subPaginas: [
		Acoes.pagina,
		Reacoes.pagina,
	]
};

export default { pagina };
