import { Acao } from "@/typing";

export type Props_Acao = {
	acao: Acao;
};

export function RenderAcao(props : Readonly<Props_Acao>) {
	const { acao } = props;
	const { nome, texto } = acao;

	return <div><p>
		<span className="topic-start">{ nome }: </span>
		<span>{ texto }</span>
	</p></div>
}
