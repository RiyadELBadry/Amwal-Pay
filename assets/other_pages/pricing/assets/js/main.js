/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home .title`, {
    origin: 'top',
    interval: 200,
});

sr.reveal(`.home .box`, {
    origin: 'left'
});