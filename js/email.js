document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emailForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Configurações do serviço e modelo do EmailJS
        const serviceID = 'YOUR_SERVICE_ID'; // lembrar de substituir place holder
        const templateID = 'YOUR_TEMPLATE_ID'; // lembrar de substituir place holder

        // Parâmetros do template
        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        // Enviar e-mail usando EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

                // Mostrar mensagem de agradecimento
                form.style.display = "none";
                thankYouMessage.style.display = "block";
            }, function(error) {
                console.log('FAILED...', error);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
            });
    });
});

function resetForm() {
    const form = document.getElementById("emailForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Limpar o formulário
    form.reset();

    // Mostrar o formulário e esconder a mensagem de agradecimento
    form.style.display = "block";
    thankYouMessage.style.display = "none";
}