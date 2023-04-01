const form = document.getElementById('reservationForm');

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("reservationForm")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('success')
  });
});