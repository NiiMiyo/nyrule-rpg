import { Acao } from "@/typing";

export type Props_Acao = {
	acao: Acao;
};

export function RenderAcao(props : Readonly<Props_Acao>) {
	const { acao } = props;
	const { nome, texto } = acao;

	return <div>
		<p>{ nome }: { texto }</p>
	</div>
}
