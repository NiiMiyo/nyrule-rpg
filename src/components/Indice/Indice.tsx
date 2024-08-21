import Entrada from "./Entrada";
import styles from "./Indice.module.scss";

import Paginas from "@/data/router";


export function Indice() {
	return <aside className={styles.bar}>
		<h2 className={styles.index}>Índice</h2>

		<div>
			{ Paginas.map(i => <Entrada page={i} key={i.nome} />) }
		</div>
	</aside>
}
