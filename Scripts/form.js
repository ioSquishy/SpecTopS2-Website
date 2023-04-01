const form = document.getElementById('reservationForm');
const formContainer = document.getElementById('form-container');
const reservationsContainer = document.getElementById('reservations-container');
const successTemplate = document.getElementsByTagName("template")[0];

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("reservationForm")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    formContainer.style.display = "none";
    let template = successTemplate.content.cloneNode(true);
    reservationsContainer.appendChild(template);
  });
});