//  ---------------------- Bullets Home ----------------- //
var scrollTop = 0;
var index = 0;
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll('section');
const navigation = document.querySelector('.pullets');
function resetSelection() {
    for(var i = 0; i < navigation.children.length; i++) {
        navigation.children[i].classList.remove('selected');
    }
}
window.addEventListener('scroll', function() {
    scrollTop = window.scrollY;
    sections.forEach(function(section, i) {
        if(section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
            resetSelection();
            navigation.children[i].classList.add('selected');
        }
    });
});

navigation.querySelectorAll('a').forEach(function(item, i) {
    item.addEventListener('click', function() {
        resetSelection();
        window.scrollTo({
            top: i * windowHeight,
            behavior: 'smooth'
        });
    });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home .image, .vpos .texts, .pos .image`, {
    origin: 'top',
    interval: 200,
});

sr.reveal(`.online .texts`, {
    origin: 'left'
});

sr.reveal(`.home .texts, .online .image, .vpos .image`, {
    origin: 'right'
});

sr.reveal(`.pos .texts`, {
    origin: 'bottom'
});