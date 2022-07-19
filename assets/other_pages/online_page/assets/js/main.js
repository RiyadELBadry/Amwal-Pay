/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.home h1, .online .text`, {
    origin: 'top',
    interval: 200,
});

sr.reveal(`.online .box:nth-child(1)`, {
    origin: 'left'
});

sr.reveal(`.online .box:nth-child(3)`, {
    origin: 'right'
});

sr.reveal(`.home p, .online .box:nth-child(2)`, {
    origin: 'bottom'
});