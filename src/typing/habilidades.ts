import { CONHECIMENTOS_IDS } from "@/data";

export type Habilidade = {
	nome: string;
	categoria: HabilidadeCategoria;
	custo: number | undefined;
	descricao: string;
	prerequisitos?: PreRequisito[];

	aprimoramentos?: Aprimoramento[];
};

export enum HabilidadeCategoria {
	GERAL = "GERAL",
	COMBATE = "COMBATE",
	MAGIA = "MAGIA",
}

export type Aprimoramento = {
	nome: string;
	custo: number | undefined;
	descricao: string;
	prerequisitos?: PreRequisito[];
};

export type PreRequisito = {
	tipo: "conhecimento";
	conhecimento: CONHECIMENTOS_IDS;
	valor: number | string;
} | {
	tipo: "custom";
	texto: string;
};
