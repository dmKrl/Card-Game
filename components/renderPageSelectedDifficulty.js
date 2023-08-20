const app = document.querySelector('.app');

function renderPageSelectedDifficulty(levelDifficulty) {
  if (levelDifficulty === 'es') {
    const gamePageHtml = `
        <div class="game">
        <label
        for="es"
        class="main-checbox-text"
        >EASY</label
      >
        </div>
        `;
    app.innerHTML = gamePageHtml;
  }
  if (levelDifficulty === 'medium') {
    const gamePageHtml = `
        <div class="game">
        <label
        for="medium"
        class="main-checbox-text"
        >MEDIUM</label
      >
        </div>
        `;
    app.innerHTML = gamePageHtml;
  }
  if (levelDifficulty === 'hard') {
    const gamePageHtml = `
        <div class="game">
        <label
        for="hard"
        class="main-checbox-text"
        >HARD</label
      >
        </div>
        `;
    app.innerHTML = gamePageHtml;
  }
}

export default renderPageSelectedDifficulty;
