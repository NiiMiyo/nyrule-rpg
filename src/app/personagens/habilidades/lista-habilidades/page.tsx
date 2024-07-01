import ListarHabilidades from "@/components/ListarHabilidades";

import styles from "./styles.module.scss";

export default function Page_ListaHabilidades() {
	return <main>
		<h2>Lista de Habilidades</h2>

		<ListarHabilidades attrs={{ className: styles.listagem }} />
	</main>;
}
