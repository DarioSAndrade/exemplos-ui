document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  if (form.checkValidity()) {
    alert('Formulário enviado com sucesso!');
    form.reset();
    form.classList.remove('was-validated');
  } else {
    form.classList.add('was-validated');
  }
});
