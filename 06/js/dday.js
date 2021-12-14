var now = new Date();
// 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체 생성
var firstDay = new Date("2021-11-11");
// 처음 만날 날의 날짜 정보를 firstDay 객체로 만듬.

var toNow = now.getTime();
// 오늘 날짜를 밀리초로 변경.
var toFirst = firstDay.getTime();
// 처음 만난날 밀리초로 변경.

var passedTime = toNow - toFirst;
// 오늘 날짜 - 처음만난날 (밀리초 단위)

var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = passedDay + "일";


// // 100일 후.
// var future = toFirst + 100 * (1000*60*60*24);

// var someDay = new Date(future);

// var year = someDay.getFullYear();
// var month = someDay.getMonth();
// var date = someDay.getDate();

// document.querySelector("#date100").innerText = year + "년" + month + "월" + date + "일";


calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    var future = toFirst + days * (1000*60*60*24);
    var someDay = new Date(future);
    var year = someDay.getFullYear();
    var month = someDay.getMonth() + 1;
    var date = someDay.getDate();

    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}