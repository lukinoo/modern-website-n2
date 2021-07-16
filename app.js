$(document).ready(function() {
    const tl = gsap.timeline({defaults: { ease: "power1.out"}});

    $('#fullPage').fullpage({
    autoScrolling: true,
    navigation: false,
    anchors: ['container-one','container-two','container-three'],
    navigationTooltips:['Home','About us','Contact'],
    showActiveTooltip: true,
    scrollingSpeed: 1100,
    onLeave: (origin,destination,direction) => {
        const section = destination.item;
        const hideTexts = section.querySelectorAll('h3');
        const tl = new TimelineMax()
        // nesting loop
        hideTexts.forEach(hide => {
            const item = hide.childNodes;
            item.forEach(text => {
                tl.fromTo(text,0.25,{y:"-100", opacity: 0},{y:0, opacity:1})
            })
        })
    }
    })
    $('.intro-button').click(function() {
        tl.to('.intro',{clipPath: "circle(0%)", duration: 1.2, dleay:0.3})
    })
})