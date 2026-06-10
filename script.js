const produits = [
    {
        id: 1,
        nom:"Tecno Camon 40",
        prix: 165000,
        image: "images/camon40-pro.jpg", 
        marque: "tecno"
    },
    {
         id: 2,
        nom:"Tecno Spark 40",
        prix: 65000,
        image: "images/spark40.jpg",
        marque: "tecno"

    },
    {
         id: 3,
        nom:"Tecno Spark 40 pro +",
        prix: 130000,
        image: "images/spark40pro+.jpg",
        marque: "tecno"
    },
    {
         id: 4,
        nom:"Infinix Hot 60",
        prix: 70000,
        image: "images/hot60-128gb.jpg",
        marque: "infinix"
    },
    {
         id: 5,
        nom:"Infinix Hot 60 pro+",
        prix: 135000,
        image: "images/hot60-pro+.jpg",
        marque: "infinix"
    },
    {
         id: 6,
        nom:"Samsug A06 64Gb",
        prix: 60000,
        image: "images/a06.jpg",
        marque: "samsung"
    },
    {
        id: 7,
        nom:"Iphone 14 Pro Max 256Gb",
        prix: 450000,
        image: "images/14promax.jpg",
        marque: "iphone"  
    },
    {
        id: 8,
        nom:"Iphone 16 Pro Max 256Gb",
        prix: 670000,
        image: "images/16pro-max.jpg",
        marque: "iphone"  
    },
    {
        id: 9,
        nom:"Iphone 17 Pro Max 256Gb",
        prix: 890000,
        image: "images/17pro-max.jpg",
        marque: "iphone"  
    },
    {
        id: 10,
        nom:"Samsung A05 64Gb",
        prix: 55000,
        image: "images/a05.jpg",
        marque: "samsung"  
    },
    {
        id: 11,
        nom:"Samsung A06 64Gb",
        prix: 57000,
        image: "images/a06.jpg",
        marque: "samsung"  
    },
    {
        id: 12,
        nom:"Samsung A07 64Gb",
        prix: 58000,
        image: "images/a07.jpg",
        marque: "samsung"  
    },
    {
        id: 13,
        nom:"Samsung A14 128Gb",
        prix: 75000,
        image: "images/a14.jpg",
        marque: "samsung"  
    },
    {
        id: 14,
        nom:"Samsung A56 256Gb",
        prix: 225000,
        image: "images/a56.jpg",
        marque: "samsung"  
    },
    {
        id: 15,
        nom:"Samsung A57 256Gb",
        prix: 270000,
        image: "images/a57.jpg",
        marque: "samsung"  
    },
     {
        id: 16,
        nom:"Tecno Camon 50",
        prix: 180000,
        image: "images/camon50.jpg", 
        marque: "tecno"
    },
     {
        id: 17,
        nom:"Tecno Spark 50 128GB",
        prix: 90000,
        image: "images/spark50.jpg", 
        marque: "tecno"
    },
     {
        id: 18,
        nom:"Tecno Pop 20 128GB",
        prix: 70000,
        image: "images/pop20.jpg", 
        marque: "tecno"
    },
     {
        id: 19,
        nom:"Infinix Smart 20 64GB",
        prix: 65000,
        image: "images/smart20.jpg", 
        marque: "infinix"
    },
     {
        id: 20,
        nom:"Mixeur 2 en 1 ",
        prix: 20000,
        image: "images/mixeur.jpg", 
        marque: "electromenager"
    },
     {
        id: 21,
        nom:"Grand Mixeur",
        prix: 25000,
        image: "images/mixeurg.jpg", 
        marque: "electromenager"
    },
     {
        id: 22,
        nom:"Mini Gaziniere",
        prix: 65000,
        image: "images/mini-gaz.jpg", 
        marque: "electromenager"
    },
     {
        id: 23,
        nom:"Gaziniere",
        prix: 85000,
        image: "images/gaziniere.jpg", 
        marque: "electromenager"
    },
     {
        id: 24,
        nom:"Samsung S26 Ultra 256GB",
        prix: 165000,
        image: "images/camon40-pro.jpg", 
        marque: "tecno"
    },
     {
        id: 25,
        nom:"Sage 100",
        prix: 150000,
        image: "images/sage100.jpg", 
        marque: "nos_services"
     },
      {
        id: 26,
        nom:"Sage 100 Cloud",
        prix: 500000,
        image: "images/sage100c.jpg", 
        marque: "nos_services"
    },
     {
        id: 27,
        nom:"Office",
        prix: 10000,
        image: "images/ofice.jpg", 
        marque: "nos_services"
    },
     {
        id: 28,
        nom:"Microsoft Windows",
        prix: 10000,
        image: "images/windows.jpg", 
        marque: "nos_services"
    },
     {
        id: 29,
        nom:"Iphone 11",
        prix: 140000,
        image: "images/iphone11.jpg", 
        marque: "iphone"
    },
     {
        id: 30,
        nom:"Iphone XR",
        prix: 120000,
        image: "images/iphonexr.jpg", 
        marque: "iphone"
    },
    
];
let panier = [];

const catalogue =
document.getElementById('catalogue');

function afficherProduits(marqueCible){
    catalogue.innerHTML= "";
    produits.forEach(produit => {
        if (produit.marque === marqueCible){
            const produitHTML = `
            <div class="produit-card">
                <img src="${produit.image}" alt="${produit.nom}">
                <h3>${produit.nom}</h3>
                <p class="prix">${produit.prix.toLocaleString()} FCFA</p>
                <button onclick="ajouterAuPanier(${produit.id})">Ajouter au Panier</button>
            </div> 
         `;
         catalogue.innerHTML += produitHTML;                     
        }
    })
}

function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    if (produit) {
        panier.push(produit);
        const countElement = document.getElementById('cart-count');
        countElement.innerText = panier.length;
        alert(produit.nom + "ajouter au panier !");
    }
}

function envoyerPanierWhatsApp() {
    if (panier.length === 0) {
        alert("Votre panier est vide ! Ajoutez des articles avant de commander.");
        return;
    }
    let message = "Bonjour Mr Pacha, je souhaite commander les articles suivants :\n\n";
    let total = 0;
    panier.forEach((produit, index) => {
        message += `${index +1}. ${produit.nom} - ${produit.prix.toLocaleString()} FCFA\n`;
        total += produit.prix;
});
message += `\Total de la commande : ${total.toLocaleString()} FCFA`;
 const numero = "24174229818";
 const lienWhatsApp = `https://wa.me/${numero}? text=${encodeURIComponent(message)}`;
  window.open(lienWhatsApp, '_blank');
}
function viderPanier() {
    if (confirm("Voulez-vous vraiment vider votre panier")) {
        panier = [];
        document.getElementById('cart-count').innerText = 0;
        alert("Le panier est vide.");
        return;
    }
}


   