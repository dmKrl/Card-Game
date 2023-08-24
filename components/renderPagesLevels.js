const template = document.querySelector('.game');

function renderPagesLevels(app, quantityCardsInLevel, levelDifficulty) {
  app.innerHTML = `
  <div class="level">      
    <div class="level-value">
    </div>
  </div>`;
  const levelValue = document.querySelector('.level-value');
  levelValue.classList.add(`level-${levelDifficulty}`);

  let index = 0;
  do {
    const clone = template.content.cloneNode(true);
    let levelCard = clone.querySelector('.level-card');
    levelCard.classList.add('level-card-shirt');
    levelValue.appendChild(clone);
    index++;
  } while (index < quantityCardsInLevel);
}

export default renderPagesLevels;
