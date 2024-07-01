import { Acao } from "@/typing";
import styles from "./styles.module.scss";

export type Props_Acao = {
	acao: Acao;
};

export function RenderAcao(props : Readonly<Props_Acao>) {
	const { acao } = props;
	const { nome, texto } = acao;

	return <div><p>
		<span className={styles.nome}>{ nome }: </span>
		<span className={styles.texto}>{ texto }</span>
	</p></div>
}
