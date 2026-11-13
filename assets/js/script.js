// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.




const form = document.querySelector('#contatti form');
const inputs = form.querySelectorAll('.form-control, .form-select');

function validateField(field){
    if (!field.value.trim()) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
  } else {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
  }
}

inputs.forEach((input) => {
    input.addEventListener('blur', function(){
        validateField(this);
    })
input.addEventListener("input", function () {
    if (this.value.trim()) {
      this.classList.remove("is-invalid");
    }
  });
  
  // Per sicurezza, lo applichiamo anche al select se l'utente cambia opzione con un click
  input.addEventListener("change", function () {
    if (this.value.trim()) {
      this.classList.remove("is-invalid");
    }
  });
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formIsvalid = true;

    inputs.forEach((input) => {
        validateField(input);
        if (input.classList.contains('is-invalid')){
            formIsvalid = false;
        }
    });

    if (formIsvalid){
        alert('Grazie per averci contattato, riceverai una risposta entro 48 ore.');
        form.reset();
        inputs.forEach((input) => input.classList.remove('is-valid', 'is-invalid'));
    }
})