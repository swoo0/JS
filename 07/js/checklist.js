// itemList라는 배열 생성
var itemList = [];

// #add인 요소를 가져와 addBtn에 저장
var addBtn = document.querySelector("#add");

// addBtn 클릭 시 addList함수 실행 설정.
addBtn.onclick = addList;

function addList() {
    var item = document.querySelector("#item").value;  // 텍스트 필드 내용 가져옴
    // if (item != null) {
    if (!item) {
        return;
    } else {
        itemList.push(item);  // itemList 배열의 끝에 item 변수 값 추가
        document.querySelector("#item").value = null;  // id=”item”인 요소의 값을 지움
        document.querySelector("#item").focus();  // 텍스트 필드에 focus( ) 메서드 적용
    }
    showList();
}

function showList() {
    var list = "<ul>"
    for (var i=0; i<itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close"); // 삭제버튼을 변수로 저장. 배열 형태가 됨
   
    for (var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    // console.log(this);
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}