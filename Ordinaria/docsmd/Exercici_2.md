Creem el shadow DOM:
this.attachShadow({ mode: 'open'});

Agafe'm els atributs dels productes en el connectedCallback() per elaborar el contingut del web component:
const id = this.getAttribute('poducte-id') || 'Producte desconegur';
const nom = this.getAttribute('producte-nom') || 'Producte desconegur';
const descripcio = this.getAttribute('producte-descripcio') || '';
const preu_unitari = this.getAttribute('producte-preu_unitari') || '0.00';
const imatge = this.serverURL+this.getAttribute('producte-img') || '';


I de la seguent forma definim el contingut html i el estil del web component:
this.shadowRoot.innerHTML = `
       <style>
                .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; max-width: 250px; }
                img { width: 100%; border-radius: 8px 8px 0 0; }
                .content { padding: 8px 0; }
            </style>
            <div class="card">
                <img src="${imatge}" alt="Imatge del producte" />
                <div class="content">
                    <h3>${nom}</h3>
                    <p>Descripció: ${descripcio}</p>
                    <p>Preu: ${preu_unitari} €</p>  
                </div>
                <counter-component></counter-component>
            </div>
        `;
