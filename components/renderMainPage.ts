import renderGamePage from './renderGamePage';
const app = document.querySelector('.app') as HTMLDivElement;
const header = document.querySelector('.head') as HTMLDivElement;

function renderMainPage(): void {
  header.innerHTML = '';
  const mainPageHtml: string = `
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
  const boxSelectedDifficulty = document.querySelector(
    '.main',
  ) as HTMLDivElement;
  boxSelectedDifficulty.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.closest('.main-checbox-text') as HTMLLabelElement) {
      localStorage.setItem('checked', target.getAttribute('for') as string);
    }
    if (target.closest('.button-start')) {
      let levelDifficulty = localStorage.getItem('checked');
      renderGamePage(levelDifficulty as string);
    }
  });
}

export { renderMainPage };
