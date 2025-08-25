var contentImg = document.getElementById("photoIphone");
var backGroud = document.getElementById("homeColor");
var backGroudButtonProduct = document.getElementById("product");
function clickIphone(phone) {
  contentImg.src = phone;
}
function chnageBackGroud(color) {
  backGroud.style.backgroundColor = color;
}
function chnageBackGroudBottonProduct(button) {
  backGroudButtonProduct.style.backgroundColor = button;
}
