var prevScrollpos = window.pageYOffset;
var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
window.onscroll = function () {
    if (w <= 768) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("cari").style.top = "0";
        } else {
            document.getElementById("cari").style.top = "-150px";
        }
        prevScrollpos = currentScrollPos;
    }
}