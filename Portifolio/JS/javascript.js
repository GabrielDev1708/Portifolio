// 1. Menu Responsivo (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link no celular
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 2. Alternar Tema Claro / Escuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Muda o ícone do botão
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '🌓';
    }
});

// 3. Simulação de Envio do Formulário
const contactForm = document.getElementById('contact-form');
const feedbackMsg = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregar a página
    
    const nome = document.getElementById('nome').value;
    feedbackMsg.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    
    contactForm.reset(); // Limpa os campos
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        feedbackMsg.textContent = '';
    }, 5000);
});