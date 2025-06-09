// Definim el Web Component per als productes
class ProductCard extends HTMLElement {
    constructor() {
        super();
        // TO-DO: Creem un shadow DOM per al component
        this.serverURL = "http://localhost:3000/get-products";
    }

    // El mètode per actualitzar el contingut del component
    connectedCallback() {
        // TO-DO: Obtenim les propietats del producte des de l'atribut del component
        const id = this.getAttribute('poducte-id') || 'Producte desconegur';
        const nom = this.getAttribute('producte-nom') || 'Producte desconegur';
        const descripcio = this.getAttribute('producte-descripcio') || '';
        const preu_unitari = this.getAttribute('producte-preu_unitari') || '0.00';
        const imatge = this.serverURL+this.getAttribute('producte-img') || '';
 
        //TO-DO: Definim el contingut HTML del producte
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
    }
}

// Registrem el Web Component
customElements.define('product-card', ProductCard);

