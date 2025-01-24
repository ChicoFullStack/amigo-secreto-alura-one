let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let amigosSorteio = [...amigos];
    amigos.forEach(amigo => {
        const index = Math.floor(Math.random() * amigosSorteio.length);
        const amigoSorteado = amigosSorteio.splice(index, 1)[0];
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${amigoSorteado}`;
        resultado.appendChild(li);
    });
}