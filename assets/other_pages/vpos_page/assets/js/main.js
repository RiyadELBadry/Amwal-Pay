/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1500,
    reset: true,
});

sr.reveal(`.online .text, .vpos .box:nth-child(2)`, {
    origin: 'top',
    interval: 200,
});

sr.reveal(`.home h1, .vpos .box:nth-child(1)`, {
    origin: 'left'
});

sr.reveal(`.vpos .box:nth-child(3)`, {
    origin: 'right'
});

sr.reveal(`.home p`, {
    origin: 'bottom'
});