Agafe'm els atributs dels productes en el connectedCallback() per elaborar el contingut del web component:
const id = this.getAttribute('poducte-id') || 'Producte desconegur';
const nom = this.getAttribute('producte-nom') || 'Producte desconegur';
const descripcio = this.getAttribute('producte-descripcio') || '';
const preu_unitari = this.getAttribute('producte-preu_unitari') || '0.00';
const imatge = this.serverURL+this.getAttribute('producte-img') || '';


I de la seguent forma definim el contingut html del web component:
this.shadowRoot.innerHTML = `
        <div class="card">
                <img src="${imatge}" alt="Imatge del producte" />
                <div class="content">
                    <h3>${nom}</h3>
                    <p>Descripcio: ${descripcio}</p>
                    <p>Preu: ${preu_unitari} €</p>  
                </div>
                <counter-component></counter-component>
            </div>
        `;
