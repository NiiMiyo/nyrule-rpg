import { RenderAcao } from "@/components";
import { Acao, Habilidade } from "@/typing";

export function conceder_acao(acao: Acao): JSX.Element {
	return <>
		Você recebe a {acao.reacao ? "Reação" : "Ação"} { acao.nome }.
		<RenderAcao acao={ acao } />
	</>;
}

export function gerar_lista_habilidades(habilidades: Habilidade[]) {
	return habilidades
		.map(ordenar_aprimoramentos)
		.sort(ordenar_habilidades);
}

function ordenar_aprimoramentos(hab: Habilidade): Habilidade {
	hab.aprimoramentos = hab.aprimoramentos
		?.sort((a, b) => a.nome.localeCompare(b.nome));

	return hab
}

function ordenar_habilidades(a: Habilidade, b: Habilidade): number {
	return a.nome.localeCompare(b.nome);
}
