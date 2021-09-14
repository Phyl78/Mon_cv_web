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