import { renderMainPage } from './renderMainPage';

const header: HTMLDivElement = document.querySelector(
  '.head',
) as HTMLDivElement;
function renderHeader() {
  const headerHtml: string = `
  <div class="header">
  <div class="header-box">
  <div>
  <p class="header-text header-text-count">00<span>min</span>.00<span>sec</span></p>
  </div>
  <button class="button-start button-start-again">Начать заново</button>
  </div>
  </div>`;
  header.innerHTML = headerHtml;
  const buttonStartAgain = document.querySelector(
    '.button-start-again',
  ) as HTMLButtonElement;

  buttonStartAgain.addEventListener('click', () => {
    header.innerHTML = '';
    renderMainPage();
  });
}

export default renderHeader;
