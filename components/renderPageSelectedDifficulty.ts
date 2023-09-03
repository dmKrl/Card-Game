import renderPagesLevels from './renderPagesLevels';

const app = document.querySelector('.app') as HTMLDivElement;

function renderPageSelectedDifficulty(levelDifficulty: string): void {
  app.innerHTML = '';
  const quantityCardsInLevel = [6, 12, 18];
  switch (levelDifficulty) {
    case 'easy':
      renderPagesLevels(app, quantityCardsInLevel[0], levelDifficulty);
      break;
    case 'medium':
      renderPagesLevels(app, quantityCardsInLevel[1], levelDifficulty);
      break;
    case 'hard':
      renderPagesLevels(app, quantityCardsInLevel[2], levelDifficulty);
      break;
    default:
      break;
  }
}

export default renderPageSelectedDifficulty;
