# Atelier - studio di architettura 
# Progetto-Settimana-6


Readme · MD
# Atelier — Studio di architettura
 
Sito web one-page per uno studio di architettura fittizio, realizzato per il Week Project della Settimana 6. Usa **HTML**, **SCSS** (compilato in CSS), **JavaScript** e **Bootstrap 5**.
 
## Struttura della cartella
 
```
Progetto-Settimana-6/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.css.map
│   ├── js/
│   │   └── script.js
│   └── scss/
│       └── style.scss
├── index.html
└── README.md
```
 
## Tecnologie
 
- HTML5
- SCSS (variabili, mixin, nesting)
- JavaScript (vanilla)
- Bootstrap 5.3.9
- Font Awesome 6.5.2
- Immagini da Unsplash

## `index.html`
 
La pagina HTML è divisa in sezioni:
 
| Sezione | Descrizione |
|---|---|
| **Header / Navbar** | Navbar Bootstrap sticky con link alle sezioni, menu hamburger su mobile e bottone per il cambio tema |
| **Hero** (`#hero`) | Titolo, sottotitolo e bottone "Inizia un progetto" |
| **Servizi** (`#servizi`) | 6 card che presentano i servizi dello studio (residenziale, interior design, ristrutturazioni, spazi commerciali, pratiche edilizie, rendering 3D) |
| **Progetti recenti** (`#lavori`) | Filtri per categoria e griglia di card generata da JavaScript |
| **Contatti** (`#contatti`) | Form con nome, email, tipo di progetto e messaggio |
| **Modale** (`#productModal`) | Finestra con immagine e descrizione del progetto selezionato |
| **Footer** | 3 colonne (indirizzo, link, contatti) e copyright |
 
Layout responsive con la griglia Bootstrap (`col-12 col-sm-6 col-lg-4`).
 
## `style.scss`
 
- **Variabili**: colori del brand (`$primary`, `$brand-dark`, `$dark-bg`), ombre delle card (`$card-shadow`, `$card-shadow-hover`) e altezza del sollevamento (`$lift`).
- **Mixin `card-alzata`**: bordo arrotondato, ombra e animazione di sollevamento all'hover. Usato sulle card e sul bottone dell'hero.
- **Navbar**: sfondo scuro, link bianchi, hover con il colore primario.
- **Bottone tema** (`#themeToggle`): icona grande e hover personalizzato.
- **Dark mode** (`body.dark-mode`): sovrascrive i colori di navbar, hero, sezioni, card, form e modale.
- **Sezioni specifiche**: stili per `#hero`, `#contatti` (focus dei campi), `#lavori` (bottoni filtro) e `footer`.
Per ricompilare il CSS (ad esempio con Live Sass Compiler o da terminale):
 

sass --watch assets/scss/style.scss assets/css/style.css

 
## `script.js`
 
### 1. Dati dei progetti
Array `projects` con 6 oggetti, ognuno con `id`, `img`, `name`, `description` e `category` (`residenziale`, `interior`, `ristrutturazione`).
 
### 2. Toggle tema chiaro/scuro
Il click su `#themeToggle` aggiunge o rimuove la classe `dark-mode` sul `body` e cambia l'icona (luna ↔ sole).
 
### 3. Rendering delle card
La funzione `renderProdotti(lista)` svuota `#productRow` e crea dinamicamente una card Bootstrap per ogni progetto (immagine, titolo, descrizione e bottone "Dettagli").
 
### 4. Modale dei dettagli
Al click su "Dettagli" la modale viene riempita con titolo, immagine e descrizione del progetto scelto.
 
### 5. Filtri per categoria
I bottoni in `#filtri` leggono l'attributo `data-categoria`: con `tutti` mostrano tutti i progetti, altrimenti filtrano con `projects.filter()`. Il bottone cliccato riceve la classe `active`.
 
### 6. Validazione del form
- `validateField()` controlla che il campo non sia vuoto e applica `is-valid` / `is-invalid`.
- Il controllo scatta quando il campo perde il focus (`blur`); l'errore sparisce mentre l'utente scrive o cambia opzione.
- All'invio (`submit`) il comportamento di default viene bloccato e tutti i campi vengono verificati.
- Se il form è valido compare un `alert` di conferma, poi il form viene resettato.


## Realizzato da
 
| Persona | Ruolo |
|---|---|
| Manuel Burgalassi | README, HTML, CSS, JavaScript |