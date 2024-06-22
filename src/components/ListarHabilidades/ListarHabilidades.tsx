import { HABILIDADES_DADOS } from "@/data";
import { RenderHabilidade } from "./RenderHabilidade";


export function ListarHabilidades() {
	return <section>
		<h2>Lista de Habilidades</h2>

		{ HABILIDADES_DADOS.map(h => <RenderHabilidade habilidade={h} key={h.nome} />) }
	</section>
};
