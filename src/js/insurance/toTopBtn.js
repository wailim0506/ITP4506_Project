/* For the to top button */
const goTopBtn = document.querySelector('.goTopBtn');
const chatBtn = document.querySelector('.chatBtn');
window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200) {
        goTopBtn.style.display = "flex"
        chatBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
