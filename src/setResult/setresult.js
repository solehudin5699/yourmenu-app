import "../component/kolom-utama.js";
import "../component/kolom-cari.js";
import getKeyword from "../getData/getkeyword.js";

const setResult = () => {
    const elemenCari = document.querySelector("kolom-cari");
    const kolomPenampil = document.querySelector("kolom-utama");
    const tombolClick = () => {
        getKeyword.cariMenu(elemenCari.value)
            .then(viewResult)
            .catch(viewResultEror)
    };
    const viewResult = results => {
        if (elemenCari.value.length) {
            kolomPenampil.allMenu = results;
        }
    };
    const viewResultEror = message => {
        kolomPenampil.resultEror(message);
    }
    elemenCari.clickEvent = tombolClick;
};
export default setResult;