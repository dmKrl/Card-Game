function renderEasyLevel(app) {
  const easyHtml = `
    <div class="level">
        <div class="level-value level-easy">
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
            <div class="level-card level-card-shirt"></div>
        </div>
    </div>

    `;
  app.innerHTML = easyHtml;
}

export default renderEasyLevel;
