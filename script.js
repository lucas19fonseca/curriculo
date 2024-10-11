document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header a');
    const offset = 190; 
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
  
        if (href.endsWith('.pdf') || link.target === '_blank') {
          return; 
        }
  
        e.preventDefault(); 
  
        const targetSection = document.querySelector(href); 
  
        if (targetSection) {
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  

document.addEventListener('DOMContentLoaded', () => {
    const lucasLink = document.querySelector('.titulo-lucas a'); 
    lucasLink.addEventListener('click', (e) => {
        e.preventDefault(); 

        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
    });
});

  (function() {
    emailjs.init("lucas19fonseca@gmail.com"); 
  })();
  
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem
    };

    emailjs.send('seu_service_id', 'seu_template_id', templateParams)
      .then(function(response) {
        alert('Mensagem enviada com sucesso!');
      }, function(error) {
        alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
        console.log('Erro:', error);
      });
  });





