import genetationRandomCard from './genetationRandomCard';
import { renderMainPage } from './renderMainPage';
const template = document.querySelector('.game');

function renderPagesLevels(app, quantityCardsInLevel, levelDifficulty) {
  app.innerHTML = `
  <div class="level">      
    <div class="level-value">
    </div>
  </div>`;
  const levelValue = document.querySelector('.level-value');
  levelValue.classList.add(`level-${levelDifficulty}`);

  let index = 0;
  do {
    const clone = template.content.cloneNode(true);
    let levelCard = clone.querySelector('.level-card');
    levelCard.classList.add('level-card-shirt');
    levelValue.appendChild(clone);
    index++;
  } while (index < quantityCardsInLevel);

  const NodeListCards = document.querySelectorAll('.level-card');
  const cards = Array.from(NodeListCards);

  handlerCards(cards);
}

function handlerCards(cards) {
  const generatedArrCards = [];
  const counter = [];
  setTimeout(() => {
    const findDup = findDuplicates(generatedArrCards);
    findDup.length === 0 ? handlerCards(cards) : false;
  }, 100);

  cards.map((card) => {
    card.classList.toggle('level-open');
    const generatedRandomCardImages = genetationRandomCard();
    generationArrIdentificalElements(
      generatedRandomCardImages,
      generatedArrCards,
    );

    card.style.backgroundImage = `url(${generatedRandomCardImages})`;

    setTimeout(() => {
      card.classList.toggle('level-open');
      card.style.backgroundImage = `url(${'/static/image/cardShirt.png'})`;
    }, 5000);

    card.addEventListener('click', () => {
      card.classList.toggle('level-open');
      card.style.backgroundImage = `url(${generatedRandomCardImages})`;
      counter.push(card.style.backgroundImage);
      setTimeout(() => {
        if (counter.length === 2 && counter[0] === counter[1]) {
          alert('Ты выиграл');
          renderMainPage();
        }
        if (counter.length === 2 && counter[0] !== counter[1]) {
          alert('Ты проиграл');
          renderMainPage();
        }
      }, 100);
    });
  });
}

// функция генерации массива
function generationArrIdentificalElements(
  generatedRandomCardImages,
  generatedArrCards,
) {
  generatedArrCards.push(generatedRandomCardImages);
  return generatedArrCards;
}

// Функция поиска одинаковых элементов в массиве
function findDuplicates(arr) {
  const arrDup = arr.filter((item, index) => arr.indexOf(item) !== index);
  return arrDup;
}

export default renderPagesLevels;
