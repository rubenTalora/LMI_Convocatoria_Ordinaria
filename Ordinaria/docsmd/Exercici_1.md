He implementat ha la funcio gestionaLinks() perque nomes es mostre una seccio del contingut principal a la vegada. 
Quan es fa clic en un enllaç del menu, s'oculten totes les seccions i nomes es mostra la seleccionada. Inicialment, nomes es mostra la seccio de benvinguda (inici). 
Això es fa afegint o llevant la classe active a les seccions.
function gestionaLinks() {
    // TO-DO (Exercici 1)
    const links = document.querySelectorAll('nav a');
    const seccions = document.querySelectorAll('main > section');

    function mostraSeccio(id) {
        seccions.forEach(sec => sec.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }

    mostraSeccio('inici');
    links.forEach(link => {
        link.onclick = e => {
            e.preventDefault();
            mostraSeccio(link.getAttribute('href').substring(1));
        };
    });
}

Anyadint al css el seguent codi per a ocultar les seccions:
main > section { display: none; }
main > section.active { display: block; }
