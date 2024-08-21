import Entry from "./Entry";
import styles from "./Sidebar.module.scss";

import Indice from "@/data/router";


export function Sidebar() {
	return <aside className={styles.bar}>
		<h2 className={styles.index}>Índice</h2>

		<div>
			{ Indice.map(i => <Entry page={i} key={i.nome} />) }
		</div>
	</aside>
}
