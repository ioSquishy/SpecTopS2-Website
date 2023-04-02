const formContainer = document.getElementById('form-container');
const reservationsContainer = document.getElementById('reservations-container');
const successTemplate = document.getElementsByTagName("template")[0];

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function checkForm() {
  var firstName = document.getElementById("fName").value;
  var maidenName = document.getElementById("mName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("number").value;
  var comments = document.getElementById("comments").value;

  if (firstName && maidenName && validateEmail(email) && phone) {
    submitForm(firstName, maidenName, email, phone, comments);
    formContainer.style.display = "none";
    let template = successTemplate.content.cloneNode(true);
    reservationsContainer.appendChild(template);
  } else {
    alert("Make sure all fields except Allergies/Comments are filled and that you have a valid email address!");
  }
}

function submitForm(firstName, maidenName, email, phone, comments) {
  fetch('https://sheetdb.io/api/v1/tfs4ekwkf7ny6', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'First Name': firstName,
                'Maiden Name': maidenName,
                'Email': email,
                'Phone' : phone,
                'Comments' : comments
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
}

function testSubmit() {
  var firstName = document.getElementById("fName").value;
  var maidenName = document.getElementById("mName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("number").value;
  var comments = document.getElementById("comments").value;

  if (firstName && maidenName && validateEmail(email) && phone) {
    formContainer.style.display = "none";
    let template = successTemplate.content.cloneNode(true);
    reservationsContainer.appendChild(template);
  } else {
    alert(":(");
  }
}