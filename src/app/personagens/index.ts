import { Pagina } from "@/typing";
import { Conhecimentos } from "./conhecimentos";
import { Habilidades } from "./habilidades";

export namespace Personagens {
	export const page: Pagina = {
		nome: "Personagens",
		href: "/personagens",

		subPaginas: [
			Conhecimentos.page,
			Habilidades.page
		],
	}
}

export default Personagens;
