/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home .title, .home .experience, .home .back`, {
    origin: 'top'
});

sr.reveal(`.home ul, .home p`, {
    origin: 'left'
});