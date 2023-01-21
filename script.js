const navb = document.querySelector(".navbar");
const navbarOffsetTop = navb.offsetTop;
const sections = document.querySelectorAll('section');
const navbarlinks= document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercent = [97,89,85,87,80,70,50]


window.addEventListener('scroll',()=>{
    mainfn();
});

const mainfn = ()=>{
    if(window.pageYOffset >=navbarOffsetTop){
        navb.classList.add('sticky')
    }
    else{
        navb.classList.remove('sticky')
    }
    sections.forEach((section , i) =>{
        if(window.pageYOffset >= section.offsetTop -10){
            navbarlinks.forEach(navbarlink =>{
                navbarlink.classList.remove('change')
            })
            navbarlinks[i].classList.add('change')
        }
    })
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el, i)=>{
            el.style.width = `${progressBarPercent[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPercent[i]
        })
    }
}
mainfn();


window.addEventListener('resize',()=>{
    window.location.reload();
})