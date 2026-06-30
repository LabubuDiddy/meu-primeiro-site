// Seleciona o botão através da classe criada
const botaoVoltarTopo = document.querySelector('.btn-voltar-topo');

// Adiciona o evento de clique ao botão
botaoVoltarTopo.addEventListener('click', () => {
    // Faz a janela do navegador rolar para as coordenadas X=0 e Y=0 (o topo)
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Remove essa linha se preferir que suba instantaneamente sem animação
    });
});
