import renderGamePage from './renderGamePage.js';
const app = document.querySelector('.app');

function renderMainPage() {
  const mainPageHtml = `
<div class="main">
  <p class="main-text">Выберите сложность</p>
  <div class="main-checbox">
      <input type="radio" id="es" name="difficulty"/><label
        for="es"
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
  <button class="main-start">Старт</button>
</div>
`;
  app.innerHTML = mainPageHtml;
  const boxSelectedDifficulty = document.querySelector('.main');

  boxSelectedDifficulty.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('.main-checbox-text')) {
      localStorage.setItem('checked', target.getAttribute('for'));
    }
    if (target.closest('.main-start')) {
      let levelDifficulty = localStorage.getItem('checked');
      renderGamePage(levelDifficulty);
    }
  });
}

export { renderMainPage };
