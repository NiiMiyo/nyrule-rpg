export default function TabelaDificuldades() {
	return <table>
		<thead>
			<tr>
				<th>Meta</th>
				<th>Nível</th>
				<th>Exemplo</th>
			</tr>
		</thead>
		<tbody>
			{DIFICULDADE_METAS.map(d => <tr key={d.dificuldade}>
				<td>{d.meta}</td>
				<td>{d.dificuldade}</td>
				<td>{d.descricao}</td>
			</tr>)}
		</tbody>
	</table>;
}

export const DIFICULDADE_METAS = [{
	meta: 5,
	dificuldade: "Simples",
	descricao: "Um adulto comum pode fazer, mas ainda exige um pouco de esforço",
}, {
	meta: 10,
	dificuldade: "Fácil",
	descricao: "Exige um treinamento básico prévio no assunto (ou muita sorte!) pra conseguir fazer algo assim."
}, {
	meta: 15,
	dificuldade: "Médio",
	descricao: "Exige treinamento intermediário no assunto ou ajuda de alguém mais experiente."
}, {
	meta: 20,
	dificuldade: "Difícil",
	descricao: "Exige treinamento avançado no assunto ou ajuda de um pequeno time."
}, {
	meta: "30",
	dificuldade: "Profissional",
	descricao: "Exige anos de treinamento ou muita ajuda profissional."
}, {
	meta: "40+",
	dificuldade: "Mestre",
	descricao: "Exige domínio perfeito na arte e décadas de prática para conseguir algo neste nível.",
}];
