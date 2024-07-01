import { HABILIDADES_DADOS } from "@/data";
import { RenderHabilidade } from "./RenderHabilidade";


export function ListarHabilidades() {
	return <section>
		{ HABILIDADES_DADOS.map(h => <RenderHabilidade habilidade={h} key={h.nome} />) }
	</section>
};
