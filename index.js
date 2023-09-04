/**
 * removing link if site in an iframe
 */
if(window.location !== window.parent.location){
    const header = document.querySelector('header');
    const child = document.querySelector('.linkToThree');
    header.removeChild(child);
}