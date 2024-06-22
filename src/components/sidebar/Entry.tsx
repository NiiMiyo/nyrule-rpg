import Link from "next/link";
import styles from "./Sidebar.module.scss";

import { Pagina } from "@/typing";


export default function Entry(props: Readonly<Props_Entry>) {
	const { page } = props;

	const renderSubPages = (page.subPaginas?.length ?? 0) > 0;

	return <div className={styles.entry}>
		<Link href={page.href}>{ page.nome }</Link>

		{ renderSubPages &&
			<div className={styles.subentry}>
				{ page.subPaginas!.map(sp => <Entry page={sp} key={sp.href} />) }
			</div>
		}
	</div>;
}

export type Props_Entry = {
	page: Pagina;
};
