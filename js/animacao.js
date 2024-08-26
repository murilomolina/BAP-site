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
            bloco.addEventListener('click', function () {
                const conteudo = bloco.querySelector('.conteudo-texto');
                const botao = bloco.querySelector('.custom-button-carrossel');

                if (conteudo.style.opacity === '0' || conteudo.style.visibility === 'hidden') {
                    conteudo.style.opacity = '1';
                    conteudo.style.visibility = 'visible';
                } else {
                    conteudo.style.opacity = '0';
                    conteudo.style.visibility = 'hidden';
                }

                if (botao.style.opacity === '1' || botao.style.visibility === 'visible') {
                    botao.style.opacity = '0';
                    botao.style.visibility = 'hidden';
                } else {
                    botao.style.opacity = '1';
                    botao.style.visibility = 'visible';
                }
            });
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

        // Adiciona um evento de clique para os botões, permitindo alternar a visibilidade
        const botoes = document.querySelectorAll('.custom-button-carrossel');
        botoes.forEach(function (botao) {
            botao.addEventListener('click', function (event) {
                event.stopPropagation(); // Impede que o clique no botão oculte o botão novamente
                botao.style.opacity = '0';
                botao.style.visibility = 'hodden';
            });
        });
    }
});
