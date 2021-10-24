const fas1 = document.querySelector('.fa1')
const fas2 = document.querySelector('.fa2')
const fas3 = document.querySelector('.fa3')


const TL1 = new TimelineMax({paused: false})

TL1

.from (fas1,1,{opacity:0, x:-100})
.from (fas2,1,{opacity:0, x:100})
.from (fas3,1,{opacity:0, x:-100})


const carte1 = document.querySelector('.exp1')
const caceis= document.querySelector('.im1')
const friedland = document.querySelector('.im2')
const carte2= document.querySelector('.exp2')
const carte3 = document.querySelector('.exp3')
const grdf = document.querySelector('.im3')


const TL2 = new TimelineMax({paused: false}); 

TL2
.from (carte1,1,{opacity:0, x:-100})
.from (caceis,1,{opacity:0, x:100})
.from (friedland,1,{opacity:0, x:-100})
.from (carte2,1,{opacity:0, x:100})
.from (carte3,1,{opacity:0, x:-100})
.from (grdf,1,{opacity:0, x:100})



const carte4 = document.querySelector('.child1')
const lamanu1 = document.querySelector('.child2')
const lamanu2 = document.querySelector('.child3')
const carte5 = document.querySelector('.child4')
const carte6 = document.querySelector('.child5')
const iae = document.querySelector('.child6')
const carte7 = document.querySelector('.child8')
const uca = document.querySelector('.child7')



const TL3 = new TimelineMax({paused: false});

TL3
.from (carte4,1,{opacity:0, x:-100})
.from (lamanu1,1,{scale:0}, '-=0.4') 
.from (lamanu2,1,{scale:0}, '-=0.4') 
.from (carte5,1,{opacity:0, x:100},'-=0.4')
.from (carte6,1,{opacity:0, x:-100}, '-=0.4')
.from (iae,1,{scale:0},'-=0.4')
.from (uca,1,{scale:0},'-=0.4')
.from (carte7,1,{opacity:0, x:100},'-=0.4')