// RÉCUPÉRER L'ID DU PRODUIT CONTENU DANS L'URL
// créer une variable 'str' qui nous retourne l'url complète de la page
let str = location;
// créer une variable 'url' qui corresponds à 'str'
let url = new URL(str);
// créer une variable 'monId' qui va renvoyer le paramètre 'id' contenu dans l'url
let monId = url.searchParams.get("id");
//console.log(monId);

// faire un appel 'fetch' à l'api pour aller chercher la valeur de 'monId'
fetch(`http://127.0.0.1:3000/api/products/${monId}`, { method: 'GET' })
    .then(function (response) {
        return response.json()
    })
    .then(function (product) {

        // PLACER L'IMAGE
        // créer une variable 'imageContainer' dans '.item__img'
        let imageContainer = document.querySelector(".item__img");
        // créer une constante 'imageProd' qui va accueillir une image dans imageContainer
        const imageProd = document.createElement('img');
        // ajout en tant que enfant dans 'imageContainer'
        imageContainer.appendChild(imageProd);
        // créer le texte alternatif de 'image'
        imageProd.setAttribute('alt', product.altTxt);
        // créer l'url' de 'image'
        imageProd.setAttribute('src', product.imageUrl);

        // PLACER LE TITRE
        // On sélectionne l'ID 'title' dans le html
        let titleContainer = document.querySelector("#title");
        // On crée dedans un contenu qui est le selecteur 'name' du tableau 'products'
        titleContainer.innerHTML = product.name;

        // PLACER LE PRIX
        // On sélectionne l'ID 'price' dans le html
        let priceContainer = document.querySelector("#price");
        // On crée dedans un contenu qui est le selecteur 'price' du tableau 'products'
        priceContainer.innerHTML = product.price;

        // PLACER LA DESCRIPTION
        // On sélectionne l'ID 'description' dans le html
        let descContainer = document.querySelector("#description");
        // On crée dedans un contenu qui est le selecteur 'description' du tableau 'products'
        descContainer.innerHTML = product.description;

        // PLACER LES CHOIX DE COULEURS
        // On sélectionne l'ID 'colors' dans le html
        let colorsContainer = document.querySelector("#colors");
        // On parcours le tableau 'colors' de l'élément 'product' (élément individuel du tableau 'products')
        // et on défini chaque élément de ce tableau 'colors' en tant que variable 'color'
        for (let color of product.colors) {
            //on crée dans le html une constante 'option'
            const option = document.createElement('option');
            //on assigne à cette option une valeur
            option.value = color;
            option.innerHTML = color;
            colorsContainer.appendChild(option);
            //console.log(colorsContainer);
        }
    })

// ÉCOUTER LES CHOIX UTILISATEUR À ENVOYER AU LOCALSTORAGE

//On déclare une variable pour cibler le bouton 'Ajouter au panier'
const buttonAddToCart = document.querySelector("#addToCart");
//On ajoute un écouteur d'évènement à ce bouton sur le clic qui appelle une fonction sans paramètres
buttonAddToCart.addEventListener('click', function () {
    //On déclare une variable pour stocker le choix de couleur
    const colorInput = document.querySelector("#colors");
    //On déclare une variable pour stocker le choix de quantité
    const quantityInput = document.querySelector("#quantity");

    //Si le localStorage contient déjà un tableau 'prodStorage' (par un éventuel ajout précédent)
    if (localStorage.getItem('prodStorage') !== null) {
        /* On déclare une variable 'productsUsers' qui nous retourne les valeurs de prodStorage. 
           Ces valeurs sont retournés sous la forme d'un tableau.
           Cette variable 'productsUsers' est le tableau des choix utilisateur */
        let productsUsers = JSON.parse(localStorage.getItem('prodStorage'));
        //on ajoute au tableau 'productsUsers' cet élément 'prodStorage' et ses valeurs associées
        productsUsers.push({ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value });
        // On met à jour le 'prodStorage' avec ces nouvelles données
        localStorage.setItem('prodStorage', JSON.stringify(productsUsers));
        //on vérifie dans la console le contenu du tableau
        console.table(productsUsers);

        //Si le localStorage ne contient rien
    } else {
        //on crée dans le localStorage une clé 'prodStorage'. 
        //Cette clé a pour valeur un tableau contenant les ID, couleurs et quantités demandées.
        localStorage.setItem('prodStorage', JSON.stringify([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]));
    }
})
