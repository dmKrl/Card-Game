import Timer from 'easytimer.js';
import generationRandomCard from './generationRandomCard';
import renderResultPage from './renderResultPage';
const template = document.querySelector('.game') as HTMLTemplateElement;

function renderPagesLevels(
  app: HTMLDivElement,
  quantityCardsInLevel: number,
  levelDifficulty: string,
) {
  const timer: Timer = new Timer();
  const headerTimer = document.querySelector(
    '.header-text',
  ) as HTMLParagraphElement;
  app.innerHTML = `<div class="level">      
    <div class="level-value">
    </div>
  </div>`;
  const levelValue = document.querySelector('.level-value') as HTMLDivElement;
  levelValue.classList.add(`level-${levelDifficulty}`);

  let index = 0;

  // Цикл разметки поля с карточками, в зависимости от уровня сложности
  do {
    const clone = template.content.cloneNode(true) as HTMLElement;
    const levelCard = clone.querySelector('.level-card') as HTMLElement;
    levelCard.classList.add('level-card-shirt');
    levelValue.appendChild(clone);
    index++;
  } while (index < quantityCardsInLevel);

  const NodeListCards = document.querySelectorAll('.level-card');
  const cards = Array.from(NodeListCards) as HTMLElement[];

  handlerCards(cards, timer, headerTimer);
}

// Логика карточной игры
function handlerCards(
  cards: HTMLElement[],
  timer: Timer,
  headerTimer: HTMLParagraphElement,
): void {
  const generatedArrCards: string[] = [];
  const comparisonValuesCards: string[] = [];
  setTimeout(() => {
    const findDup = findDuplicates(generatedArrCards);
    findDup.length === 0 ? handlerCards(cards, timer, headerTimer) : false;
  }, 100);

  cards.map((card) => {
    const generatedRandomCardImages: string = generationRandomCard();
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
      const headerTimerValue = headerTimer.textContent as string;
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
  generatedRandomCardImages: string,
  generatedArrCards: string[],
) {
  generatedArrCards.push(generatedRandomCardImages);
  return generatedArrCards;
}

// Функция поиска одинаковых элементов в массиве
function findDuplicates(arr: string[]) {
  const arrDup = arr.filter((item, index) => arr.indexOf(item) !== index);
  return arrDup;
}

export default renderPagesLevels;
