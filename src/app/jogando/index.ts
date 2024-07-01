import { Pagina } from "@/typing";
import Acoes from "./acoes";
import Testes from "./testes";

const pagina: Pagina = {
	nome: "Jogando",
	href: "/jogando",
	subPaginas: [
		Acoes.pagina,
		Testes.pagina,
	]
};

export default { pagina };
