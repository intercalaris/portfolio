document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const landingPage = document.getElementById('landing-page');
    const portfolio = document.getElementById('portfolio');
    const portfolioContent = portfolio.querySelector('.content');
    const portfolioClouds = portfolio.querySelector('.clouds.portfolio');

    enterButton.addEventListener('click', () => {
        landingPage.style.animation = 'fadeOut 1s forwards';
        
        setTimeout(() => {
            landingPage.style.display = 'none';
            portfolio.style.display = 'block';
            
            requestAnimationFrame(() => {
                portfolio.style.opacity = '1';

                setTimeout(() => {
                    portfolioClouds.style.opacity = '1';
                }, 400);
                
                setTimeout(() => {
                    portfolioContent.style.opacity = '1';
                }, 1200);
            });
        }, 900);
    });
});
 
document.getElementById("year").textContent = new Date().getFullYear();
