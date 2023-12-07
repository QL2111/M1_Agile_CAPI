const CarteView = () => {
  const title = document.createElement('h1');
  title.textContent = "CARTE VIEW" ;
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  const cardImageLinks = [
    "cartes_0.svg",
    "cartes_1.svg",
    "cartes_2.svg",
    "cartes_3.svg",
    "cartes_5.svg",
    "cartes_8.svg",
    "cartes_13.svg",
    "cartes_20.svg",
    "cartes_40.svg",
    "cartes_100.svg",
    "cartes_cafe.svg",
    "cartes_interro.svg"
  ];
  const cardPerRow = 3 ;
  
  for (let i = 0; i < cardImageLinks.length; i++) {
    const card = createCard(cardImageLinks[i]);
    cardContainer.appendChild(card);
    if ((i + 1) % cardPerRow === 0) {
      cardContainer.appendChild(document.createElement('br'));
    }
  }
  
  function createCard(link) {
    const card = document.createElement('div');
    card.className = "card";
    
    const img = document.createElement("img");
    img.src = `/img/${link}`;
    
    card.appendChild(img);
    
    return card;
  }
  
  const envoyerButton = document.createElement('button');
  envoyerButton.textContent = 'Envoyer';
  const formElement = document.createElement('form');
  formElement.appendChild(title);
  formElement.appendChild(cardContainer);
  formElement.appendChild(envoyerButton);
  
  return formElement;
};

export default CarteView;
