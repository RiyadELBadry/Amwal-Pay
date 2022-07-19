/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home .title, .home .experience`, {
    origin: 'left'
});

sr.reveal(`.home ul, .home .btn`, {
    origin: 'right'
});