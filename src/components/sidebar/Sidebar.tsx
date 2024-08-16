import Entry from "./Entry";
import styles from "./Sidebar.module.scss";

import Home from "@/app";
import Personagens from "@/app/personagens";
import Jogando from "@/app/jogando";


export function Sidebar() {
	return <aside className={styles.bar}>
		<h2 className={styles.index}>Índice</h2>

		<div>
			<Entry page={Home.page} />
			<Entry page={Personagens.page} />
			<Entry page={Jogando.pagina} />
		</div>
	</aside>
}
