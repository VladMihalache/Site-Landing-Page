const topProfile = document.querySelector(".topProfile");
const topReview = document.querySelector(".topReview");
const bottomProfile = document.querySelector(".bottomProfile");
const bottomReview = document.querySelector(".bottomReview");
const mobileBurger = document.querySelector(".mobileBurger");
const mobileNav = document.querySelector(".mobileNav");
const fas = document.querySelector(".fas");
const containers = document.querySelectorAll(".container")

function displayReview(customer, customerReview){
    customer.addEventListener('mouseover'  , (event) => {
        if(event.target.classList.contains("smallFace")) {
            event.target.classList.toggle("smallFace")
            event.target.classList.toggle("bigFace")
        }
    })
    customer.addEventListener('mouseout'  , (event) => {
        if(!event.target.classList.contains("locked")) {
            event.target.classList.toggle("bigFace")
            event.target.classList.toggle("smallFace")
        }
    })
    customer.addEventListener('click'  , (event) =>{
        if(customer === topProfile) {
            bottomProfile.classList.remove("locked")
            bottomProfile.classList.remove("bigFace")
            bottomProfile.classList.add("smallFace")
            bottomReview.classList.add("opacityZero")
            bottomReview.classList.remove("opacityOne")
        } else if(customer === bottomProfile) {
            topProfile.classList.remove("locked")
            topProfile.classList.remove("bigFace")
            topProfile.classList.add("smallFace")
            topReview.classList.remove("opacityOne")
            topReview.classList.add("opacityZero")
        }
        if(event.target.classList.contains("bigFace")){
            event.target.classList.toggle("locked")
            customerReview.classList.toggle("opacityZero")
            customerReview.classList.toggle("opacityOne")
        }
    
    })
}

displayReview(bottomProfile, bottomReview)
displayReview(topProfile, topReview)

mobileBurger.addEventListener("click", function(e) {
    if(!e.target.classList.contains("on")){
        mobileNav.style.transform = "translate(0, 0)";
        mobileBurger.classList.add("on")
        fas.classList.add("on")
    } else if(e.target.classList.contains("on")){
        mobileNav.style.transform = "translate(100%, 0)";
        mobileBurger.classList.remove("on")
        fas.classList.remove("on")
    }
})
for(let i=0;i<containers.length;i++){
    containers[i].addEventListener('mouseover', function(){
        containers[i].classList.add("selected")
        checkHover(containers[i]);
    })
    containers[i].addEventListener('mouseout', function(){
        containers[i].classList.remove("selected")
        checkHover(containers[i]);
    })
}
function checkHover(cont){
    if(cont.classList.contains("selected")){
        cont.children[0].children[0].style.opacity = 0;
        cont.children[0].children[1].style.opacity = 1;
        cont.children[1].classList.remove("grayColor")
        cont.children[1].classList.add("purpleColor")
        cont.children[3].classList.remove("grayColor")
        cont.children[3].classList.add("purpleColor")
    } else if(!cont.classList.contains("selected")){
        cont.children[0].children[1].style.opacity = 0;
        cont.children[0].children[0].style.opacity = 1;
        cont.children[1].classList.remove("purpleColor")
        cont.children[1].classList.add("grayColor")
        cont.children[3].classList.remove("purpleColor")
        cont.children[3].classList.add("grayColor")
    }
}