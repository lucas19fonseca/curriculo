//envio do form
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const nome = document.getElementById("nome-contato").value;
    const email = document.getElementById("email-contato").value;
    const mensagem = document.getElementById("mensagem-contato").value;
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    document.getElementById("form-contato").reset();
});
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







