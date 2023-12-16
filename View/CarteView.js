// import SelectDifficulty from "../Components/SelectDifficulty";

import SelectDifficulty from "../Components/SelectDifficulty.js";
const CarteView = () => {
  const title = document.createElement('h1');
  title.textContent = "CARTE VIEW";
  let selectedCard = null;

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

  const cardPerRow = 3;

  for (let i = 0; i < cardImageLinks.length; i++) {
    const card = createCard(cardImageLinks[i]);
    cardContainer.appendChild(card);

    if ((i + 1) % cardPerRow === 0) {
      cardContainer.appendChild(document.createElement('br'));
    }
  }

  function createCard(link) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-link', link);

    const img = document.createElement('img');
    img.src = `/img/${link}`;

    card.appendChild(img);
    return card;
  }
  function handleCardClick(event) {
    const clickedCard = event.currentTarget;
    console.log ("clickedCard :" , clickedCard )
  
    if (clickedCard) {
      console.log('Card ajoute:', clickedCard.getAttribute('data-link'));
  
      // Chuyển đổi lớp 'selected'
      clickedCard.classList.add('selected');
      console.log('Class clicked ajoute:', clickedCard);
  
      // Loại bỏ lớp 'selected' khỏi các thẻ khác
      document.querySelectorAll('.card').forEach(card => {
        if (card !== clickedCard) {
          card.classList.remove('selected');
        }
      });
  
      selectedCard = clickedCard.getAttribute('data-link');
    } else {
      console.error('Aucun element card.');
      selectedCard = null; // Đảm bảo rằng selectedCard là null nếu có lỗi
    }
  }
  
  

  cardContainer.addEventListener('click', (event) => {
    console.log('Event Click active.');
    
    const clickedCard = event.target.closest('.card');
    
    if (clickedCard) {
      const datalink = clickedCard.getAttribute('data-link');
      
      if (datalink) {
        handleCardClick(datalink);
      }
    }
  });
  

  cardContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('card',) && !event.target.classList.contains('selected')) {
      event.target.classList.add('hovered');
    }
  });

  cardContainer.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('card') && !event.target.classList.contains('selected')) {
      event.target.classList.remove('hovered');
    }
  });

  const envoyerButton = document.createElement('button');
  envoyerButton.textContent = 'Envoyer';

  envoyerButton.addEventListener('click', () => {
    if (selectedCard) {
      console.log('Card ajoute:', selectedCard);
      const view = View(selectedCard);
      app.innerHTML = '';
      app.appendChild(view);

    } else {
      console.log('aucun card ajoute.');
    }
  });

  const formElement = document.createElement('form');
  formElement.appendChild(title);
  formElement.appendChild(cardContainer);
  formElement.appendChild(envoyerButton);

  return formElement;
};

export default CarteView;

