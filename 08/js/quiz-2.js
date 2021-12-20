var checkBttn = document.querySelectorAll(".check");

for (var i=0; i<checkBttn.length; i++) {
    checkBttn[i].addEventListener("click", function() {
            this.parentNode.style.color = "#ccc";
    });
}