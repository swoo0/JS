var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");


// userId.onchange = checkId;

userId.addEventListener("change", checkId);
pw1.addEventListener("change", checkPw);
pw2.addEventListener("change", comparePw);


function checkId() {
    if (userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select();
    }
}

function checkPw() {
    if (pw1.value.length < 8) {
        alert("8자리 이상의 영문과 숫자를 사용하세요.")
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw() {
    if (pw1.value != pw2.value) {
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
    }
}