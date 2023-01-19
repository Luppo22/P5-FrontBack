//From GitHub _ v2
// valider la commande//

function validerlacommande() {

  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let address = document.querySelector("#address");
  let city = document.querySelector("#city");
  let email = document.querySelector("#email");
  let nowYouHaveToPay = panier.map((product) => product.Id);

  let readyCommande = {
    contact: {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    },
    products: nowYouHaveToPay,
  };

// FORMULAIRE
// on sélectionne le formulaire ayant la classe 'cart__order__form'
    let formContainer = document.querySelector(".cart__order__form");

    // déclaration du regex utilisé pour le nom, le prénom et la ville
    let nameRegex = new RegExp("^[a-zA-Z ,.'-]+$");
    // déclaration du regex utilisé pour l'adresse' 
    let addressRegex = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");


    //validation du prénom
    const validFirstName = function (inputFirstName) {
        let firstNameErrorMsg = inputFirstName.nextElementSibling;

        // si la valeur de 'inputFirstName' est vide
        if (inputFirstName.value === '') {
            //alors on affiche ce message d'alerte
            return firstNameErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
        // si la valeur de 'inputFirstName' ne corresponds pas à 'nameRegex'
        if (!nameRegex.test(inputFirstName.value)) {
            //alors on affiche ce message d'alerte
            return firstNameErrorMsg.innerHTML = 'Format non correct.';
        }
        // et si ça corresponds à 'nameRegex'
        else {
            //alors on efface les messages d'alerte
            return firstNameErrorMsg.innerHTML = '';
        }
    };
    // Ecoute de la modification du prénom
    formContainer.firstName.addEventListener('change', function () {
        validFirstName(this);
    });

    //validation du nom
    const validLastName = function (inputLastName) {
        let lastNameErrorMsg = inputLastName.nextElementSibling;
        // si la valeur de 'inputLastName' est vide
        if (inputLastName.value === '') {
            //alors on affiche ce message d'alerte
            return lastNameErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
        // si la valeur de 'inputLastName' ne corresponds pas à 'nameRegex'
        if (!nameRegex.test(inputLastName.value)) {
            //alors on affiche ce message d'alerte
            lastNameErrorMsg.innerHTML = 'Format non correct.';
        }
        // et si ça corresponds à 'nameRegex'
        else {
            //alors on efface les messages d'alerte
            return lastNameErrorMsg.innerHTML = '';
        }
    };
    // Ecoute de la modification du nom
    formContainer.lastName.addEventListener('change', function () {
        validLastName(this);
    });

    //validation de l'adresse
    const validAddress = function (inputAddress) {
        let addressErrorMsg = inputAddress.nextElementSibling;
        // si la valeur de 'inputAddress' est vide ''
        if (inputAddress.value === '') {
            //alors on affiche ce message d'alerte
            return addressErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
        // et si la valeur de 'inputAddress' n'est pas conforme à 'addressRegex'
        if (!addressRegex.test(inputAddress.value)) {
            //alors on affiche ce message d'alerte
            return addressErrorMsg.innerHTML = 'Format non correct.';
        }
        // et si ça corresponds à 'addressRegex'
        else {
            //alors on efface les messages d'alerte
            return addressErrorMsg.innerHTML = '';
        }
    };
    // Ecoute de la modification de l'adresse
    formContainer.address.addEventListener('change', function () {
        validAddress(this);
    });

    //validation de la ville
    const validCity = function (inputCity) {
        let cityErrorMsg = inputCity.nextElementSibling;
        // si la valeur de 'inputCity' est vide ''
        if (inputCity.value === '') {
            //alors on affiche ce message d'alerte
            return cityErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
        // et si la valeur de 'inputCity' n'est pas conforme à 'cityRegex'
        if (!nameRegex.test(inputCity.value)) {
            //alors on affiche ce message d'alerte
            return cityErrorMsg.innerHTML = 'Format non correct.';
        }
        // et si ça corresponds à 'cityRegex'
        else {
            //alors on efface les messages d'alerte
            return cityErrorMsg.innerHTML = '';
        }
    };
    // Ecoute de la modification de la ville
    formContainer.city.addEventListener('change', function () {
        validCity(this);
    });

    //validation de l'email
    let mailRegex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    const validEmail = function (inputEmail) {
        let emailErrorMsg = inputEmail.nextElementSibling;
        // si la valeur de 'inputEmail' est vide ''
        if (inputEmail.value === '') {
            //alors on affiche ce message d'alerte
            return emailErrorMsg.innerHTML = 'Veuillez renseigner ce champ.';
        }
        // et si la valeur de 'inputEmail' n'est pas conforme à 'mailRegex'
        if (!mailRegex.test(inputEmail.value)) {
            //alors on affiche ce message d'alerte
            emailErrorMsg.innerHTML = 'Format non correct.';
        }
        else {
            //alors on efface les messages d'alerte
            emailErrorMsg.innerHTML = '';
        }
    };
    // Ecoute de la modification du mail
    formContainer.email.addEventListener('change', function () {
        validEmail(this);
    });

  var userFirstName = validFirstName(firstName.value);
  var userLastName = validLastName(lastName.value);
  var userAddress = validAddress(address.value);
  var userCity = validCity(city.value);
  var userMail = validEmail(inputEmail.value);


  if (
    userFirstName === false ||
    userLastName === false ||
    userAddress === false ||
    userCity === false ||
    userMail === false
  ) {
    alert("Merci de vérifier tous les champs ");
  } else {
    const order = readyCommande;

    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        //localStorage.setItem("orderId", data.orderId);
        alert("Voici votre n° de la commande : " + data.orderId);
        window.location = "confirmation.html?id=" + data.orderId;
      })
      .catch((error) => {
        alert("API HS : " + error);
      });
  }
}

// desactiver submit du bouton "Commander" //
let orderButton = document.querySelector("#order");

orderButton.addEventListener("click", (eventOnClick) => {
  eventOnClick.preventDefault();
  validerlacommande();
});