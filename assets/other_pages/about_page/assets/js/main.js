/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '200px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home .img`, {
    origin: 'top',
    interval: 200,
});

sr.reveal(`.home h1, .home h3, .home p`, {
    origin: 'left'
});

sr.reveal(`.online .box:nth-child(3)`, {
    origin: 'right'
});