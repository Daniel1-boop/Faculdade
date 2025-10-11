const SERVICE_ID = 'service_9yknnef'; 
const TEMPLATE_ID = 'template_zxwo60r'; 
const PUBLIC_KEY = 'sQwzC6HZZ7TsVJH-e'; 

(function() {
    emailjs.init({
        publicKey: PUBLIC_KEY,
    });
})();

const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    responseMessage.textContent = '';
    responseMessage.className = '';
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
        .then((response) => {
            console.log('SUCESSO!', response.status, response.text);
            
            responseMessage.textContent = 'Mensagem enviada com sucesso!';
            responseMessage.classList.add('success');
            form.reset();
        }, (error) => {
            console.log('FALHA...', error);
            
            responseMessage.textContent = 'Erro ao enviar. Tente novamente mais tarde.';
            responseMessage.classList.add('error');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensagem';
        });
});
