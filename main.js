const form = document.getElementById('form-cadastro');
const imgAprovado = '<img src="./imagens/correct.png" alt="aprovado" />';
const clientes = [];
const contato = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaCadastro();
});

function adicionaLinha() {
    const inputNomeCliente = document.getElementById('nome');
    const inputNumeroCliente = document.getElementById('numero');

    clientes.push(inputNomeCliente.value); 
    contato.push(parseInt(inputNumeroCliente.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeCliente.value}</td>`;
    linha += `<td>${inputNumeroCliente.value}</td>`;
    linha += `<td>${inputNumeroCliente.value >= 14 ? imgAprovado : 'Não cadastrado'}</td>`;
    linha += `</tr>`;

    linhas = linha;

    inputNomeCliente.value = '';
    inputNumeroCliente.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaCadastro() {
    console.log(clientes);
    console.log(conatos);
}