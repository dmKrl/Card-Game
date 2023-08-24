import renderEasyLevel from './levelsDifficulty/easyLevel';
import renderHardLevel from './levelsDifficulty/hardLevel';
import renderMediumLevel from './levelsDifficulty/mediumLevel';

const app = document.querySelector('.app');
const game = document.querySelector('.game');
const gameField = game.content.querySelector('.game-field');
console.log(gameField);

function renderPageSelectedDifficulty(levelDifficulty) {
  console.log(levelDifficulty);
  switch (levelDifficulty) {
    case 'es':
      renderEasyLevel(app);
      break;
    case 'medium':
      renderMediumLevel(app);
      break;
    case 'hard':
      renderHardLevel(app);
      break;
    default:
      break;
  }
}

export default renderPageSelectedDifficulty;
