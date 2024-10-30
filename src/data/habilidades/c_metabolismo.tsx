import { Habilidade, HabilidadeCategoria } from "@/typing";
import { CONHECIMENTOS_DADOS } from "../conhecimentos";
import ListaTopicos from "@/components/ListaTopicos";


export const C_METABOLISMO: Habilidade = {
	nome: "Metabolismo",
	custo: 0,
	categoria: HabilidadeCategoria.CARACTERISTICA,
	descricao: "Define quais necessidades básicas o seu corpo precisa.",

	aprimoramentos: [{
		nome: "Metabolismo comum",
		custo: 0,
		descricao: <>
			<p>Você só consegue respirar no ar puro. Pequenas impurezas no ar não o atrapalham, mas estar em fumaça densa, certos gases ou submerso o fazem sufocar. Cada vez que iniciar seu turno enquanto sufoca, faça um teste de {CONHECIMENTOS_DADOS.VIGOR.nome} com Meta 5 para resistir. Se passar, pode agir normalmente, mas aumente a meta do próximo teste em 2 para cada vez que passou anteriormente. Se falhar, cai inconsciente e recebe 1 de dano por turno enquanto sufoca.</p>

			<p>Você precisa comer e beber água. Para cada dia que não tiver acesso à comida ou água potável, faça um teste de {CONHECIMENTOS_DADOS.VIGOR.nome} com Meta 10. Se falhar recebe a condição Fome.</p>

			<p>Você precisa dormir pelo menos oito horas por dia, das quais pelo menos cinco horas precisam ser ininterruptas, enquanto as demais podem ser divididas durante o dia. Quando completa seu sono, recupera 1 PV. Para cada dia que passar sem dormir, faça um teste de {CONHECIMENTOS_DADOS.VIGOR.nome} com Meta 10. Se falhar recebe a condição Sono. Se dormir pelo menos metade do tempo que precisa, não recupera PV, mas não precisa fazer testes por não dormir.</p>
		</>
	}, {
		nome: "Metabolismo alternativo",
		custo: undefined,
		descricao: <>
			<p>Seu metabolismo funciona de uma forma diferente do comum. Você recebe "Metabolismo comum" e pode escolher entre qualquer quantidade de modificações da lista abaixo, pagando seu custo em XP.</p>

			<ListaTopicos tipoDeLista="p" ordenar topicos={[{
				titulo: "Aquático (+0 XP)",
				texto: "Você pode respirar enquanto estiver submerso em água limpa, mas se torna incapaz de respirar ar. Quando não estiver submerso em água você começa a sufocar."
			}, {
				titulo: "Anfíbio (+1 XP)",
				texto: "Você também pode respirar enquanto estiver submerso em água limpa, sem sufocar."
			}, {
				titulo: "Fotossíntese (+1 XP)",
				texto: "Você não precisa comer ou beber. Em vez disso, precisa apenas de acesso à luz do sol diariamente. Se não receber luz direta do sol por pelo menos seis horas ao dia, sofre os efeitos que sofreria pela fome."
			}, {
				titulo: "Insone (+2 XP)",
				texto: "Você não precisa dormir e se torna incapaz de sofrer os efeitos do sono. Outros efeitos ainda podem deixá-lo inconsciente."
			}, {
				titulo: "Anaeróbico (+2 XP)",
				texto: "Você não precisa respirar e se torna incapaz de sufocar."
			}, {
				titulo: "Construto (+0 XP)",
				texto: "Você se torna incapaz de contrair doenças e não é considerado um ser vivo."
			}, {
				titulo: "Autossustentável (+2 XP)",
				texto: "Você não precisa comer ou beber e se torna incapaz de sofrer os efeitos da fome.",
			}, {
				titulo: "Hipossonia (+1 XP)",
				texto: "Você precisa dormir apenas quatro horas ininterruptas por dia. O tempo de recuperação da condição Sono é dividido pela metade."
			}, {
				titulo: "Transe (+1 XP)",
				texto: "Quando dorme, na verdade apenas entra em um transe próprio para descanso, reduzindo pela metade as penalidades de estar inconsciente enquanto dorme."
			}, {
				titulo: "Hipersônia (-1 XP)",
				texto: "Você precisa dormir pelo menos doze horas por dia, das quais pelo menos oito horas sejam ininterruptas. O tempo de recuperação da condição Sono é dobrado."
			}, {
				titulo: "Sono Pesado (-1 XP)",
				texto: "Quando dorme, pouca coisa te acorda. Dobre as penalidades de estar inconsciente enquanto dorme."
			}]} />
		</>
	}]
}
