document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const landingPage = document.getElementById('landing-page');
    const portfolio = document.getElementById('portfolio');

    enterButton.addEventListener('click', () => {
        landingPage.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            landingPage.style.display = 'none';
            portfolio.style.display = 'block';
            portfolio.style.animation = 'fadeIn 1s forwards';
        }, 1000);
    });
});