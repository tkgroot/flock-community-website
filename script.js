/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var overlayMenu = document.querySelector('#overlay-menu');    
    if (!overlayMenu.classList.contains('menu-on')) {
        overlayMenu.classList.add('menu-on');
        // document.querySelector('body').style.overflowY = 'hidden';
    } else {
        overlayMenu.classList.remove('menu-on');
        // document.querySelector('body').style.overflowY = 'auto';
        
    }
}