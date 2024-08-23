function scrollToCont() {
    var nextDiv = document.getElementById("target-container");
    nextDiv.scrollIntoView({ behavior: 'smooth' });
}

// Função que anima o texto que fica na ala de "onde encontrar"
document.addEventListener("DOMContentLoaded", function () {
    // Verifica se a largura da tela é 768px ou menos
    if (window.innerWidth <= 768) {
        // Seleciona todos os blocos com a classe "bloco-imagem-texto"
        const blocos = document.querySelectorAll('.bloco-imagem-texto');

        // Adiciona um evento de clique para cada bloco
        blocos.forEach(function (bloco) {
            bloco.addEventListener('click', function (event) {
                // Evita que o clique no texto evite que o evento no bloco seja acionado
                if (event.target !== bloco) return;

                const conteudo = bloco.querySelector('.conteudo-texto');
                if (conteudo.style.opacity === '0' || conteudo.style.visibility === 'hidden') {
                    conteudo.style.opacity = '1';
                    conteudo.style.visibility = 'visible';
                } else {
                    conteudo.style.opacity = '0';
                    conteudo.style.visibility = 'hidden';
                }
            });
            // Adiciona um evento de clique para o próprio texto, permitindo alternar a visibilidade
            const textos = document.querySelectorAll('.conteudo-texto');
            textos.forEach(function (texto) {
                texto.addEventListener('click', function (event) {
                    event.stopPropagation(); // Impede que o clique no texto oculte o texto novamente
                    texto.style.opacity = '0';
                    texto.style.visibility = 'hidden';
                });
            });
        });
    }
});