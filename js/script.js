//display all block
let viewAllLink = document.querySelectorAll(".viewAll");
let cardBottom = document.querySelector(".card__bottom");
let tipicsBottom = document.querySelector(".topics__card__bottom");

for (let i = 0; i < viewAllLink.length; i++) {
viewAllLink[i].addEventListener('click' , () => {
    const viewAllContains = viewAllLink[i].classList;

    if(viewAllContains.contains("viewAllLatest")){
      cardBottom.classList.toggle("activeAll");
    }
    else if(viewAllContains.contains("viewAllTopics")){
      tipicsBottom.classList.toggle("TopicsActiveAll");
    }
  })
}

//smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//menu burger
 let burgerBtn = document.querySelector(".burger");
 let headListBtn = document.querySelector(".header__list__btn");
 let body = document.querySelector("body");

burgerBtn.addEventListener('click' , () => { 
    burgerBtn.classList.toggle(".cross");
    headListBtn.classList.toggle("active");
    body.classList.toggle("noneScroll");

    headListBtn.addEventListener('click' , () => {
       headListBtn.classList.remove("active");
       body.classList.remove("noneScroll");
    })
 })