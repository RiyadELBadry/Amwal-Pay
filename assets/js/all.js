/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
};
showMenu('menu', 'navigation');


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.links');

function linkAction() {
    const navMenu = document.getElementById('navigation');
    const toggle1 = document.getElementById('menu');
    // When we click on each nav__link, we remove the show-menu class
    toggle1.classList.remove('active');
    navMenu.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));