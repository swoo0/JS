var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

// 방법 1
/* for (var i=0; i<smallPics.length; i++) {
    smallPics[i].onclick = showBig;
}

function showBig() {
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
} */

// 방법 2
for (var i=0; i<smallPics.length; i++) {
    smallPics[i].onclick = function(event) {
        bigPic.src = this.src;
    }
}