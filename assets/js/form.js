var form1 = document.getElementById("form1");
var button = document.querySelector(".main-button");
console.log(button);
button.addEventListener('keyup', () => {
    button.setAttribute("display","visibility:hidden");
    form1.setAttribute("width","50px");
    form1.setAttribute("height","50px");
    form1.setAttribute("background-color","white");
});