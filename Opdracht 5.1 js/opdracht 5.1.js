function veranderKleurEnTekst() {
    // Element opvragen op basis van ID
    var headerElement = document.getElementById("mijnHeader");

    if (headerElement) {
        // Kleur aanpassen
        headerElement.style.color = "blue";

        // Tekst aanpassen
        headerElement.textContent = "JavaScript is leuk!";
    } else {
        console.log("Element niet gevonden");
    }
}
