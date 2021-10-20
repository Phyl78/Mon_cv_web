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
.typeString('  en <span style ="color : midnightblue">  Design UI/UX </span> à partir d\'octobre 2021 ! ')

.start()



// var clare = document.getElementById('alor'); 

// clare.addEventListener('mouseover', function(e){
//     this.style.border= "2px solid blue";
// });

// clare.addEventListener('mouseout', function(e){
//     this.style.border= "none";
// });



// var clare = document.getElementById('alor'); 

// clare.addEventListener('mouseover', function(e){
//     this.style.border= "2px solid grey";
// });

// clare.addEventListener('mouseout', function(e){
//     this.style.border= "none";
// });

