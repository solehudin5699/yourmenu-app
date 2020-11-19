import "./kolom-info.js";
class kolomUtama extends HTMLElement {
    set allMenu(allMenu) {
        this._allMenu = allMenu;
        this.render();
    }
    resultEror(message) {
        this.innerHTML = "";
        this.innerHTML = `<h1>${message}</h1>`;
    }
    render() {
        this.innerHTML = "";
        this._allMenu.forEach(menu => {
            const kolInfo = document.createElement("kolom-info");
            kolInfo.menu = menu;
            this.appendChild(kolInfo);
        })
    }
}
customElements.define("kolom-utama", kolomUtama);