// JavaScript Document
function copyCode(id) {
    if (window.clipboardData) {
        var obj = document.getElementById(id);
        window.clipboardData.setData("Text", obj.innerText);
    }
}
