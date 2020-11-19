import "../style/auto-hide.js"
class kolomCari extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    get value() {
        return this.querySelector("input").value;
    }
    render() {
        this.innerHTML = `
            <div id="cari">
                <div id="judul"><h2>What Meals will You Make?</h2></div>
                <input placeholder="Serch your keyword: cake, meatballs, etc..." type="search">
                <button type="submit">Find It</button>
            </div>`;
        // this.querySelector("input").addEventListener("keyup", (event) => {
        //     if (event.keyCode === 13) {
        //         event.preventDefault();
        //         this.querySelector("button").click();
        //     }
        // });
        this.querySelector("button").addEventListener("click", this._clickEvent);
    }
}
customElements.define("kolom-cari", kolomCari);