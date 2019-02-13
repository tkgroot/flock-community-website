function myFunction() {
    var overlayMenu = document.querySelector('#overlay-menu');    
    if (!overlayMenu.classList.contains('menu-on')) {
        overlayMenu.classList.add('menu-on');
        changeMenuDisplay('block', 50);
    } else {
        timeoutHandle = overlayMenu.classList.remove('menu-on');
        changeMenuDisplay('none', 700);
    }
}
var timeoutHandle;
function changeMenuDisplay(style, time) {
    var menu = document.querySelector('#menu');
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(function() {
        menu.style.display = style
    }, time)
}


