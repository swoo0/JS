var first = parseInt(prompt("비교할 첫번째 숫자 : "));
var second = parseInt(prompt("비교할 두번째 숫자 : "));

compareNum(first, second);

function compareNum(a, b) {
    if (a > b) {
        alert(a + "(이)가 " + b + "보다 큽니다.");
    } else if (a < b) {
        alert(a + "(이)가 " + b + "보다 작습니다.");
    } else {
        alert(a + "(와)과 " + b + "는 같습니다.");
    }
};
