import styles from "./styles.module.scss";

export default function Page_Personagens() {
	return <main className={styles.main}>
		<p>
			Um personagem é uma criatura com Conhecimentos e Habilidades
			individuais.
		</p>
		<p>
			Para criar um personagem é necessário gastar Experiência para comprar
			Habilidades. O Mestre diz quantos pontos você tem disponível.
		</p>
		<p>
			Estas Habilidades indicarão suas capacidades dentro do mundo do jogo,
			mas antes de comprá-las entenda os termos e como cada habilidade
			afetará seu personagem.
		</p>
	</main>
}
