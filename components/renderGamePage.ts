import renderHeader from './renderHeader';
import renderPageSelectedDifficulty from './renderPageSelectedDifficulty';

function renderGamePage(levelDifficulty: string) {
  renderHeader();
  renderPageSelectedDifficulty(levelDifficulty);
}

export default renderGamePage;
