import renderHeader from './renderHeader';
import renderPageSelectedDifficulty from './renderPageSelectedDifficulty';

function renderGamePage(levelDifficulty) {
  renderHeader();
  renderPageSelectedDifficulty(levelDifficulty);
}

export default renderGamePage;
