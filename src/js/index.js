
const botoes = document.querySelectorAll(".botao");
const atendimentos = document.querySelectorAll(".atendimento");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarAtendimento();

		botao.classList.add("selecionado");
		atendimentos[indice].classList.add("selecionado");
	});
});

function desselecionarAtendimento() {
	const atendimentoSelecionado = document.querySelector(".atendimento.selecionado");
	atendimentoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
