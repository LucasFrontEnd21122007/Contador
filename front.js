// Selecionar elementos do DOM
const contadorElement = document.getElementById('contador');
const aumentarButton = document.getElementById('aumentar');

// Inicializar contador
let contador = 0;

// Adicionar evento de clique ao botão
aumentarButton.addEventListener('click', () => {
    // Aumentar o contador em 1
    contador++;
    
    // Atualizar o conteúdo do elemento de contador
    contadorElement.textContent = contador;
});
