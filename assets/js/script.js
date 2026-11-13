// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

const projects = [
    {
        id: 0,
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        name: 'Villa Contemporanea nel Verde',
        description: 'Un progetto residenziale esclusivo sviluppato su due livelli, caratterizzato da ampie vetrate panoramiche e integrazione totale con il contesto naturale.',
        category: 'residenziale'
    },
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        name: 'Appartamento Luce & Materia',
        description: 'Riqualificazione di un appartamento residenziale urbano, con studio meticoloso dei flussi di luce naturale e finiture calde.',
        category: 'residenziale'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        name: 'Interior Loft Industriale',
        description: 'Interior design e arredo su misura per un open space metropolitano, valorizzando i materiali grezzi come ferro e legno.',
        category: 'interior'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        name: 'Living Room Minimal',
        description: 'Progettazione d\'interni incentrata sulla pulizia formale degli arredi e su una palette cromatica neutra ed elegante.',
        category: 'interior'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        name: 'Ristrutturazione Casale Storico',
        description: 'Recupero conservativo di una struttura rurale antica, unendo elementi strutturali d\'epoca a comfort tecnologici moderni.',
        category: 'ristrutturazione'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
        name: 'Riqualificazione Edificio Urbano',
        description: 'Intervento di ristrutturazione profonda e efficientamento energetico su edificio residenziale esistente.',
        category: 'ristrutturazione'
    }
];

const themeToggleBtn = document.querySelector('#themeToggle');

themeToggleBtn.addEventListener('click', function () {
    // alterna la classe 'dark-mode' sul body
    document.body.classList.toggle('dark-mode');

    // cambia il testo e l'icona dentro il bottone
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});


const row = document.querySelector("#productRow");
const modalTitle = document.querySelector("#modalTitle");
const modalImg = document.querySelector("#modalImg");
const modalDesc = document.querySelector("#modalDesc");

// Funzione per generare e mostrare le card in HTML
function renderProdotti(lista) {
    if (!row) return;
    row.innerHTML = '';

    lista.forEach((p) => {
        const col = document.createElement("article");
        col.classList.add("col-12", "col-sm-6", "col-lg-4", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card", "h-100", "shadow-sm");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = p.img;
        img.alt = p.name;
        img.style.height = "220px";
        img.style.objectFit = "cover";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");

        const title = document.createElement("h3");
        title.classList.add("card-title", "fs-6", "fw-bold");
        title.textContent = p.name;

        const desc = document.createElement("p");
        desc.classList.add("card-text", "small", "text-muted");
        desc.textContent = p.description;

        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-outline-primary", "mt-auto");
        btn.type = "button";
        btn.textContent = "Dettagli";
        btn.setAttribute("data-bs-toggle", "modal");
        btn.setAttribute("data-bs-target", "#productModal");

        // Al click di 'Dettagli' riempie la modale con i dati del progetto
        btn.addEventListener("click", () => {
            if (modalTitle) modalTitle.textContent = p.name;
            if (modalImg) {
                modalImg.src = p.img;
                modalImg.alt = p.name;
            }
            if (modalDesc) modalDesc.textContent = p.description;
        });

        cardBody.append(title, desc, btn);
        card.append(img, cardBody);
        col.append(card);
        row.append(col);
    });
}

//porta a video i projects
renderProdotti(projects);

// Gestione dei filtri per categoria
const filtriButtons = document.querySelectorAll("#filtri button");
filtriButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Gestione classe active sui bottoni
        filtriButtons.forEach(b => {
            b.classList.remove("active");

        });
        btn.classList.add("active");

        /*ricarica lista completa quando clicca su tutti*/
        const categoria = btn.getAttribute("data-categoria");
        if (categoria === "tutti") {
            renderProdotti(projects);
        } else {
            const filtrate = projects.filter(p => p.category === categoria);
            renderProdotti(filtrate);
        }
    });
});

/*conferma form e avviso una volta compilato ed inviato*/ 
const form = document.querySelector('#contatti form');
const inputs = form.querySelectorAll('.form-control, .form-select');

//controllo validità singolo campo
function validateField(field) {
    if (!field.value.trim()) {
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
    } else {
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
    }
}

//controllo del campo in tempo reale se perde il focus
inputs.forEach((input) => {
    input.addEventListener('blur', function () {
        validateField(this);
    })

    //se scrive rimuovi errore
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

//controllo al click di submti
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let formIsvalid = true;

    //controllo di ogni campo
    inputs.forEach((input) => {
        validateField(input);
        if (input.classList.contains('is-invalid')) {
            formIsvalid = false;
        }
    });

    //pop-up se tutto va bene
    if (formIsvalid) {
        alert('Grazie per averci contattato, riceverai una risposta entro 48 ore.');
        form.reset(); //resetta tutti gli input 
        inputs.forEach((input) => input.classList.remove('is-valid', 'is-invalid'));
    }
})