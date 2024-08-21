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
			<p>Você só consegue respirar no ar puro. Pequenas impurezas no ar não o atrapalham, mas estar em fumaça densa, certos gases ou submerso o fazem sufocar. Cada vez que iniciar seu turno enquanto sufoca, faça um teste de {CONHECIMENTOS_DADOS.VIGOR.nome} com meta 5 para resistir. Se passar, pode agir normalmente, mas aumente a meta do próximo teste em 2 para cada vez que passou anteriormente. Se falhar, cai inconsciente e perde 1 PV por turno enquanto sufoca.</p>

			<p>Você precisa comer e beber água. Para cada dia que não tiver acesso à comida ou água potável, faça um teste de {CONHECIMENTOS_DADOS.VIGOR.nome} com meta 10. Reduza o seu PV máximo em 2 para cada teste que você falhou e aumente a meta dos próximos testes em 3. Seu PV máximo volta ao normal assim que tiver acesso à comida e água potável novamente por um dia. Se seu PV máximo chegar a zero você morre.</p>

			<p>Você precisa dormir pelo menos oito horas por dia. Para cada dia que passar sem dormir, faça um teste de {CONHECIMENTOS_DADOS.VIGOR.nome} com meta 10. Reduza seu PE máximo em 2 para cada teste que você falhou e aumente a meta dos próximos testes em 4. Seu PE máximo volta ao normal assim que dormir por oito horas mais duas horas por cada dia que passou sem dormir. Se seu PE máximo chegar a zero você cai inconsciente e só pode ser acordado após dormir o tempo que precisa para recuperar seu PE máximo.</p>
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
				texto: "Você não precisa comer ou beber. Em vez disso, precisa apenas de acesso à luz do sol diariamente. Se não receber luz direta do sol, sofre os efeitos que sofreria pela fome."
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
			}]} />
		</>
	}]
}
