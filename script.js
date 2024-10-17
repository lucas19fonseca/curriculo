//rolagem de baixo pra cima
const button = document.getElementById('lucas');

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
//rolagem das Âncoras
document.querySelectorAll('.hearder-info').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
                if (href.startsWith("#")) {
            e.preventDefault(); 
            const targetElement = document.querySelector(href);
            
            if (targetElement) { 
                window.scrollTo({
                    top: targetElement.offsetTop - 190, 
                    behavior: 'smooth' 
                });
            }
        }
    });
});









