import Timer from 'easytimer.js';
import genetationRandomCard from './genetationRandomCard';
import renderResultPage from './renderResultPage';
const template = document.querySelector('.game');

function renderPagesLevels(app, quantityCardsInLevel, levelDifficulty) {
  const timer = new Timer();
  const headerTimer = document.querySelector('.header-text');
  app.innerHTML = `
  <div class="level">      
    <div class="level-value">
    </div>
  </div>`;
  const levelValue = document.querySelector('.level-value');
  levelValue.classList.add(`level-${levelDifficulty}`);

  let index = 0;

  // Цикл разметки поля с карточками, в зависимости от уровня сложности
  do {
    const clone = template.content.cloneNode(true);
    let levelCard = clone.querySelector('.level-card');
    levelCard.classList.add('level-card-shirt');
    levelValue.appendChild(clone);
    index++;
  } while (index < quantityCardsInLevel);

  const NodeListCards = document.querySelectorAll('.level-card');
  const cards = Array.from(NodeListCards);

  handlerCards(cards, timer, headerTimer);
}

// Логика карточной игры
function handlerCards(cards, timer, headerTimer) {
  const generatedArrCards = [];
  const comparisonValuesCards = [];
  setTimeout(() => {
    const findDup = findDuplicates(generatedArrCards);
    findDup.length === 0 ? handlerCards(cards) : false;
  }, 100);

  cards.map((card) => {
    const generatedRandomCardImages = genetationRandomCard();
    card.classList.toggle('level-open');
    generationArrIdentificalElements(
      generatedRandomCardImages,
      generatedArrCards,
    );

    card.style.backgroundImage = `url(${generatedRandomCardImages})`;

    // Старт игры
    setTimeout(() => {
      card.classList.toggle('level-open');
      card.style.backgroundImage = `url(${'/static/image/cardShirt.png'})`;
      timer.start();
      timer.addEventListener('secondsUpdated', function () {
        headerTimer.innerHTML = timer.getTimeValues().toString();
      });
    }, 5000);

    card.addEventListener('click', () => {
      card.classList.toggle('level-open');
      card.style.backgroundImage = `url(${generatedRandomCardImages})`;
      comparisonValuesCards.push(card.style.backgroundImage);
      const headerTimerValue = headerTimer.textContent;
      setTimeout(() => {
        if (
          comparisonValuesCards.length === 2 &&
          comparisonValuesCards[0] === comparisonValuesCards[1]
        ) {
          timer.stop();
          renderResultPage(comparisonValuesCards, headerTimerValue);
        }
        if (
          comparisonValuesCards.length === 2 &&
          comparisonValuesCards[0] !== comparisonValuesCards[1]
        ) {
          timer.stop();
          renderResultPage(comparisonValuesCards, headerTimerValue);
        }
      }, 100);
    });
  });
}

// функция генерации массива, для логики сравнения карточек
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
