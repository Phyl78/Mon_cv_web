// const retour = document.querySelector(".RetourEnHaut");

// retour.addEventListener('click',() =>{

//      window.scrollTo({
//          top: 0,
//          left:0,
//      })

// })

const retour = document.querySelector(".RetourEnHaut");

window.addEventListener("scroll", ()=>{

    if (window.pageYOffset>100){
        retour.classList.add("active");
    } else {
        retour.classList.remove("active");

    }
})


const txtAnim=document.querySelector('h5');

 new Typewriter( txtAnim, {
    //  loop:true,
     deleteSpeed: 20
 })

.changeDelay(20)
.typeString('Bonjour, moi c\'est Phyl')
.pauseFor(300)
.typeString('<strong>, Développeur web Front-End </strong> sur les langages :')
.pauseFor(1000)
.typeString('  <span style="color:maroon"> Html </span>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:blue"> CSS </span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color:yellow"> Javascript </span>')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color:violet"> Php </span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color:mediumslateblue"> Bootstrap </span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color:blue"> Wordpress </span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('et <span style="color:green">  VBA sous Excel  </span>!')
.pauseFor(1200)
.deleteChars(49)
.typeString('je recherche une alternance en <span style ="color : red"> Dev Front-end </span>')
.pauseFor(1200)
.deleteChars(18)
.typeString('ou')
.pauseFor(1000)
.deleteChars(3)
.typeString('  en <span style ="color : midnightblue">  Design UI/UX </span> dès que possible ! ')
.start()

// animations des expériences professionnelles

// const carte1 = document.querySelector('.exp1')
// const caceis= document.querySelector('.im1')
// const friedland = document.querySelector('.im2')
// const carte2= document.querySelector('.exp2')
// const carte3 = document.querySelector('.exp3')
// const grdf = document.querySelector('.im3')
// const scrolled = document.querySelector('.cor')

// animations des formations

// const carte4 = document.querySelector('.child1')
// const lamanu1 = document.querySelector('.child2')
// const lamanu2 = document.querySelector('.child3')
// const carte5 = document.querySelector('.child4')
// const carte6 = document.querySelector('.child5')
// const iae = document.querySelector('.child6')
// const carte7 = document.querySelector('.child8')
// const uca = document.querySelector('.child7')


// animations langue et certification 

// const langue = document.querySelector('.toeic')
// const certif = document.querySelector('.amf')


// const TL1 = new TimelineMax({paused: false}); 

// TL1
// .from (carte1,1,{opacity:0, x:-100})
// .from (caceis,1,{opacity:0, x:100})
// .from (friedland,1,{opacity:0, x:-100})
// .from (carte2,1,{opacity:0, x:100})
// .from (carte3,1,{opacity:0, x:-100})
// .from (grdf,1,{opacity:0, x:100})


// const TL2 = new TimelineMax({paused: false});

// TL2
// .from (carte4,1,{opacity:0, x:-100})
// .from (lamanu1,1,{scale:0}, '-=0.4') 
// .from (lamanu2,1,{scale:0}, '-=0.4') 
// .from (carte5,1,{opacity:0, x:100},'-=0.4')
// .from (carte6,1,{opacity:0, x:-100}, '-=0.4')
// .from (iae,1,{scale:0},'-=0.4')
// .from (uca,1,{scale:0},'-=0.4')
// .from (carte7,1,{opacity:0, x:100},'-=0.4')


// const TL3 = new TimelineMax({paused: false});

// TL3
// .from (langue,1,{opacity:0, y:-100})
// .from (certif,1,{opacity:0 , y:100})


// animation de la barre de navigation 

const menu = document.querySelectorAll('#alor')


const TL4 = new TimelineMax({paused:false})

TL4

.staggerFrom(menu,1,{opacity:0, y:-100})


// animations informations d'adresse 

const fas1 = document.querySelectorAll('.fa1')
const fas2 = document.querySelectorAll('.fa2')
const fas3 = document.querySelectorAll('.fa3')


const TL5 = new TimelineMax({paused:false})

TL5
.from (fas1,1,{opacity:0, x:-100})
.from (fas2,1,{opacity:0, x:100})
.from (fas3, 1,{opacity:0, x:-100})


// Début de la fonctionnalité du scroll


// annimation menu burger

const burger = document.querySelector('.burger'); 

burger.addEventListener('click', ()=>{

    burger.classList.toggle('active');
});





