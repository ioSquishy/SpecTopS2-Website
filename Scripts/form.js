const formContainer = document.getElementById('form-container');
const reservationsContainer = document.getElementById('reservations-container');
const successTemplate = document.getElementsByTagName("template")[0];

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function checkForm() {
  /* Get Values of Form */
  var firstName = document.getElementById("fName").value;
  var maidenName = document.getElementById("mName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var comments = document.getElementById("comments").value;

  /* Check if values are present and highlights invalid fields. */
  var valid = true;

  if (!firstName) {
    document.getElementById("fNameField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("fNameField").style.backgroundColor = "#eaeaea";
  }
  if (!maidenName) {
    document.getElementById("mNameField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("mNameField").style.backgroundColor = "#eaeaea";
  }
  if (!validateEmail(email)) {
    document.getElementById("emailField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("emailField").style.backgroundColor = "#eaeaea";
  }
  if (!phone) {
    document.getElementById("phoneField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("phoneField").style.backgroundColor = "#eaeaea";
  }

  /* If all fields are valid and present, submits the form. */
  if (valid) {
    submitForm(firstName, maidenName, email, phone, comments);
    formContainer.style.display = "none";
    let template = successTemplate.content.cloneNode(true);
    reservationsContainer.appendChild(template);
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
  var phone = document.getElementById("phone").value;
  var comments = document.getElementById("comments").value;

  var valid = true;

  if (!firstName) {
    document.getElementById("fNameField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("fNameField").style.backgroundColor = "#eaeaea";
  }
  if (!maidenName) {
    document.getElementById("mNameField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("mNameField").style.backgroundColor = "#eaeaea";
  }
  if (!validateEmail(email)) {
    document.getElementById("emailField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("emailField").style.backgroundColor = "#eaeaea";
  }
  if (!phone) {
    document.getElementById("phoneField").style.backgroundColor = "rgb(255, 205, 205)";
    valid = false;
  } else {
    document.getElementById("phoneField").style.backgroundColor = "#eaeaea";
  }

  if (valid) {
    formContainer.style.display = "none";
    let template = successTemplate.content.cloneNode(true);
    reservationsContainer.appendChild(template);
  }
}