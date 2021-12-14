var r = prompt("원의 반지름은? (cm)");
var circle1 = new Circle(r);
document.write("<p>반지름이 " + r + "cm일 때</p>");
document.write("<p>원의 둘레 : 약 " + circle1.circumference() + "cm</p>");
document.write("<p>원의 넓이 : 약 " + circle1.area() + "cm</p>");

function Circle(radius) {
    this.radius = radius,
    this.circumference = function() {
        return Math.floor(this.radius * 2 * Math.PI);
    } 
    this.area = function() {
        return Math.floor(Math.pow(this.radius, 2) * Math.PI);
    }
}