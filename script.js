
const nomeEl = document.getElementById('nome');
const cidadeLinkEl = document.getElementById('cidade');
const btnEditar = document.getElementById('editar');

btnEditar.addEventListener('click', (event) => {
    event.preventDefault(); 

    const novoNome = prompt("Digite o novo nome:", nomeEl.textContent);
    if (novoNome !== null && novoNome.trim() !== "") {
        nomeEl.textContent = novoNome;
    }

    const novaCidade = prompt("Digite a nova cidade:", cidade.textContent);
    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidade.textContent = novaCidade;
    }
});