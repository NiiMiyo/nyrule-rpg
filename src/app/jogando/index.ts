import { Pagina } from "@/typing";
import Acoes from "./acoes";
import Reacoes from "./reacoes";
import Testes from "./testes";

const pagina: Pagina = {
	nome: "Jogando",
	href: "/jogando",
	subPaginas: [
		Acoes.pagina,
		Reacoes.pagina,
		Testes.pagina,
	]
};

export default { pagina };
