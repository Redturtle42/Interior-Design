/* ---------- NAV-BAR ---------- */

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";

}
var zoomImg = function () {
    var clone = this.cloneNode();
    clone.classList.remove("zoomD");
    var lb = document.getElementById("lb-img");
    lb.innerHTML = "";
    lb.appendChild(clone);
    lb = document.getElementById("lb-back");
    lb.classList.add("show");
};

/* ---------- FULL-SIZE PICTURE ---------- */

window.addEventListener("load", function () {
    var images = document.getElementsByClassName("zoomD");
    if (images.length > 0) {
        for (var img of images) {
            img.addEventListener("click", zoomImg);
        }
    }
    document.getElementById("lb-back").addEventListener("click", function () {
        this.classList.remove("show");
    })
});

/* ---------- FADE-IN TO REFRESH ---------- */

var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}