import renderGamePage from './renderGamePage.js';
const app = document.querySelector('.app');
const header = document.querySelector('header');

function renderMainPage() {
  header.innerHTML = '';
  const mainPageHtml = `
<div class="container">
  <div class="main">
    <p class="main-text">Выберите сложность</p>
    <div class="main-checbox">
        <input type="radio" id="easy" name="difficulty"/><label
          for="easy"
          class="main-checbox-text"
          >1</label
        >
        <input type="radio" id="medium" name="difficulty" /><label
          for="medium"
          class="main-checbox-text"
          >2</label
        >
        <input type="radio" id="hard" name="difficulty" /><label
          for="hard"
          class="main-checbox-text"
          >3</label
        >
    </div>
    <button class="button-start">Старт</button>
  </div>
</div>

`;
  app.innerHTML = mainPageHtml;
  const boxSelectedDifficulty = document.querySelector('.main');
  boxSelectedDifficulty.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.main-checbox-text')) {
      localStorage.setItem('checked', target.getAttribute('for'));
    }
    if (target.closest('.button-start')) {
      let levelDifficulty = localStorage.getItem('checked');
      renderGamePage(levelDifficulty);
    }
  });
}

export { renderMainPage };
