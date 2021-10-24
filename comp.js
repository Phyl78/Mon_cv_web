const fas1 = document.querySelector('.fa1')
const fas2 = document.querySelector('.fa2')
const fas3 = document.querySelector('.fa3')


const TL1 = new TimelineMax({paused: false})

TL1

.from (fas1,1,{opacity:0, x:-100})
.from (fas2,1,{opacity:0, x:100})
.from (fas3,1,{opacity:0, x:-100})