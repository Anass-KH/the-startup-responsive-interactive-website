Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# DEPT® Weather Planner

Het doel van deze opdracht is het ontwerpen en ontwikkelen van een responsive weather planner, waarbij de website mobile-first is opgebouwd en goed werkt op zowel mobiel, tablet als desktop.
De website toont weersinformatie en helpt gebruikers bij het plannen van activiteiten op basis van de huidige weersomstandigheden.

#### Live Link
https://anass-kh.github.io/the-startup-responsive-interactive-website/


<img width="1800" height="760" alt="all-devices-black (1)" src="https://github.com/user-attachments/assets/a98c9393-1bc8-434b-931f-05db518deb4f" />
## Ontwerp
Het ontwerp is uitgewerkt volgens een mobile-first aanpak.  
De layout is eerst ontworpen voor kleine schermen (minimaal 320px) en daarna uitgebreid voor tablet en desktop.

## Naamgeving
Voor de naamgeving zijn vaste conventies aangehouden:

- Class-namen zijn geschreven in kebab-case
- Class-namen zijn in het Engels
- Namen beschrijven de functie van een element, niet de vorm

[`index.html` – regels 87–95](./index.html#L87-L95)

<section class="section">
  <div class="container">
    <h2>Upcoming 5 days</h2>
  </div>
</section>


## Kenmerken

### HTML
De website is opgebouwd met semantische HTML 
Er is gebruikgemaakt van onder andere header, main, section en footer.

Elke `<section>` bevat een bijbehorende heading.  
Het weeroverzicht is opgebouwd met een semantische tabel met een <thead> en rij-headers met scope="row".

**Voorbeeld uit de tabel:**  
[`index.html` – regels 113–131](./index.html#L113-L131)

### CSS 
De CSS is mobile-first geschreven en opgebouwd met een duidelijke structuur.

De layout is gebaseerd op een container met een maximale breedte van 1440px zodat content leesbaar blijft op grote schermen terwijl de achtergrond full-width kan doorlopen.

**Container-structuur:**  
[`style.css` – regels 24–32](./style.css#L24-L32)

### JavaScript

JavaScript wordt gebruikt voor een eenvoudige interactie bij het aanvragen van de dagelijkse forecast.  
Wanneer het formulier wordt verzonden, wordt gecontroleerd of het e-mailadres geldig is en krijgt de gebruiker visuele feedback.

**Werking:**
- Het formulier wordt onderschept met `preventDefault()`
- Het e-mailadres wordt gevalideerd met de ingebouwde browser validatie
- Bij een geldig e-mailadres verandert de submitknop van stijl
- Een check-icoon wordt zichtbaar om succesvolle verzending te tonen

**Voorbeeld uit de code:**  
[`index.js` – regels 1–33](./index.js#L1-L33)

### Bronnen
https://developer.mozilla.org/en-US/docs/Web/HTML

https://developer.mozilla.org/en-US/docs/Web/CSS

https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

