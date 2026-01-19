// 1. Selecteer het formulier (daily forecast)
const form = document.querySelector(".form");

// 2. Selecteer het email input veld
const emailInput = document.querySelector("#email");

// 3. Selecteer de submit knop
const submitBtn = document.querySelector(".submit-btn");

// 4. Selecteer het check icoon in de knop
const checkmark = document.querySelector(".submit-btn .checkmark");

// 5. Klik op submit om de interactie uit te voeren
form.addEventListener("submit", (event) => {
  // voorkomt dat het formulier echt wordt verzonden
  event.preventDefault();

  // 6. Check of het email adres geldig is
  if (!emailInput.checkValidity()) {
    // laat de browser melding zien als email niet klopt
    emailInput.reportValidity();
    return;
  }

  // 7. Button wordt groen door class toe te voegen
  submitBtn.classList.add("is-sent");

  // 8. Check icoon wordt zichtbaar
  checkmark.hidden = false;

});
