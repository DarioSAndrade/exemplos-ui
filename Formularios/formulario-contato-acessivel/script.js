document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const feedback = document.getElementById("formFeedback");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Mensagem enviada com sucesso!";
        feedback.style.color = "green";
        this.reset();
    }
});
