const menuBtn = document.getElementsByClassName('barsbtn')[0]
const nav = document.getElementsByClassName('navigation')[0]
const mobile = document.getElementsByClassName('mobile')[0]

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('toggled')
    console.log(nav.classList.length)

    if(nav.classList.length === 2) {
        mobile.classList.toggle('set')
    } else {
        setTimeout(() => {
            mobile.classList.toggle('set')
        }, 1000)
    }
})