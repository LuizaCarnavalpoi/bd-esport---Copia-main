document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size-button');
  
    sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        sizeButtons.forEach(btn => btn.classList.remove('active'));
  
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
      });
    });
  });
  