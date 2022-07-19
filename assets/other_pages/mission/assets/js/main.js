/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home h1`, {
    origin: 'top'
});

sr.reveal(`.home p`, {
    origin: 'left'
});