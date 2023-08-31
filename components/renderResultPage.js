import { renderMainPage } from './renderMainPage';

const popup = document.querySelector('.popup');
const app = document.querySelector('.app');

function renderResultPage(ArrayValues, headerTimerValue) {
  popup.style.visibility = 'visible';
  popup.style.opacity = 1;
  const mainPageHtml = `
  <div class="container">
  <div class="modal">
    <div class="main modal-main">
      ${
        ArrayValues[0] === ArrayValues[1]
          ? `<img src="./static/image/winner.png" alt="">
          <p class="main-text main-text-win">Вы выиграли!</p>`
          : `<img src="./static/image/lose.png" alt="">
          <p class="main-text main-text-win">Вы проиграли!</p>`
      }
        <p class="main-time">Затраченное время</p>
        <p class="main-date">${headerTimerValue}</p>
        <button class="button-start button-start-new">Играть снова</button>
    </div>
  </div>
  </div>
  
  `;
  popup.innerHTML = mainPageHtml;
  const buttonStartNewGame = document.querySelector('.button-start-new');

  buttonStartNewGame.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
    popup.style.opacity = 0;
    popup.innerHTML = '';
    app.innerHTML = '';
    renderMainPage();
  });
}

export default renderResultPage;
