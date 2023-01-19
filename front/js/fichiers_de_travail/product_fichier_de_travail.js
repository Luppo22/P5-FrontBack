/Si le localStorage contient déjà une clé 'products' (Clé fournie par un éventuel ajout précédent)
    if (localStorage.getItem('products') !== null) {
        localStorage.setItem('products', JSON.stringify([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]));
        userStorage.push(localStorage.getItem('products'));
        console.log(userStorage);

    } else {
        localStorage.setItem('products', JSON.stringify([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]));

        //alert(`il y a un truc qui va pas !`);

        //userStorage.push(localStorage.getItem('products'));
        //document.getElementById('test').innerHTML=userStorage;
    }







        //Si le localStorage contient déjà une clé 'prodStorage' (Clé fournie par un éventuel ajout précédent)
        if (localStorage.getItem('prodStorage') !== null) {
            localStorage.setItem('prodStorage', JSON.stringify([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]));
            userStorage.push(localStorage.getItem('prodStorage'));
            console.log(userStorage);
    
        } else {
            localStorage.setItem('prodStorage', JSON.stringify([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]));
            userStorage.push(localStorage.getItem('prodStorage'));
    
            //alert(`il y a un truc qui va pas !`);
    
            //userStorage.push(localStorage.getItem('products'));
            //document.getElementById('test').innerHTML=userStorage;
        }


// ÉCOUTER LES CHOIX UTILISATEUR À ENVOYER AU LOCALSTORAGE
//On crée un tableau vide nommé userStorage
//let userStorage = [];

//On déclare une variable pour cibler le bouton 'Ajouter au panier'
const buttonAddToCart = document.querySelector("#addToCart");
//On ajoute un écouteur d'évènement à ce bouton sur le clic qui appelle une fonction sans paramètres
buttonAddToCart.addEventListener('click', function () {
    //On déclare une variable pour stocker le choix de couleur
    const colorInput = document.querySelector("#colors");
    //On déclare une variable pour stocker le choix de quantité
    const quantityInput = document.querySelector("#quantity");

    /*VERSION OK base
    localStorage.setItem('products', JSON.stringify([{'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value}]));
    userStorage.push(localStorage.getItem('products'));
    document.getElementById('test').innerHTML=userStorage;
    console.log(userStorage);*/

    //Si le localStorage contient déjà une clé 'prodStorage' (Clé fournie par un éventuel ajout précédent)
    if (localStorage.getItem('prodStorage') !== null) {
        let products = JSON.parse(localStorage.getItem('prodStorage'));
        //on crée dans le localStorage une clé 'prodStorage' avec les valeurs d'ID, de couleurs et de quantité demandée
        //on ajoute au tableau 'userStorage' cet élément 'prodStorage' et ses valeurs associées
        products.push([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]);
        //on vérifie dans la console le contenu du tableau
        console.log(products);
        localStorage.setItem('prodStorage', JSON.stringify(products));


    //Si le localStorage ne contient rien
    } else {
        localStorage.setItem('prodStorage', JSON.stringify([{ 'id': monId, 'color': colorInput.value, 'quantity': quantityInput.value }]));

        //alert(`il y a un truc qui va pas !`);

        //userStorage.push(localStorage.getItem('products'));
        //document.getElementById('test').innerHTML=userStorage;
    }


    //TEST
    //document.getElementById('test').innerHTML=userStorage;