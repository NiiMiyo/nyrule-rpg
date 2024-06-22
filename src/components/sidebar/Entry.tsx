import Link from "next/link";
import styles from "./Sidebar.module.scss";

import { Pagina } from "@/typing";


export default function Entry(props: Readonly<Props_Entry>) {
	const { page, super_href } = props;

	const renderSubPages = (page.subPaginas?.length ?? 0) > 0;
	const href = super_href
		? super_href + page.href
		: page.href;

	return <div className={styles.entry}>
		<Link href={href}>{ page.nome }</Link>

		{ renderSubPages &&
			<div className={styles.subentry}>
				{ page.subPaginas!.map(sp => <Entry page={sp} key={sp.href} super_href={page.href} />) }
			</div>
		}
	</div>;
}

export type Props_Entry = {
	page: Pagina;
	super_href?: string;
};
