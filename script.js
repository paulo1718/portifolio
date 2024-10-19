document.addEventListener('DOMContentLoaded', () => {
  // Oculta a tela de carregamento após 3 segundos
  setTimeout(() => {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.opacity = '0'; // Transição suave
    setTimeout(() => {
      loadingScreen.style.display = 'none'; // Remove a tela de carregamento
      document.querySelector('.content').style.display = 'block'; // Mostra o conteúdo principal
    }, 1000); // Aguarda 1 segundo para a transição completa
  }, 3000); // Ajuste o tempo para a duração da animação do "P"

  // Seleciona todas as imagens clicáveis para o lightbox
  const images = document.querySelectorAll('.clickable-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const close = document.querySelector('.close');

  // Para cada imagem, adiciona o evento de clique
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src; // Define a imagem do lightbox
    });
  });

  // Fecha o lightbox ao clicar no botão de fechar
  close.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Fecha o lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = 'none';
    }
  });
});
