class kolomInfo extends HTMLElement {
    set menu(menu) {
        this._menu = menu;
        this.render();
    }
    render() {
        this.innerHTML = `
            <div id="gambar"><img src="${this._menu.strMealThumb}" alt="${this._menu.strMeal}"></div>
            <div id="info">
                <h3 style="text-align:center">${this._menu.strMeal}</h3><hr style="color:white">
                <p>HOW TO MAKE?<br><br>${this._menu.strInstructions}<br><br>
                <a href="${this._menu.strSource}" target="_blank">Click for Details</a></p>
            </div>`;
    }
}
customElements.define("kolom-info", kolomInfo);