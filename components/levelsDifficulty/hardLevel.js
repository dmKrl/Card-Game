function renderHardLevel(app) {
  const hardHtml = `
      <div class="level">
          <div class="level-value level-hard">
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
              <div class="level-card level-card-shirt"></div>
          </div>
      </div>
  
      `;
  app.innerHTML = hardHtml;
}

export default renderHardLevel;
