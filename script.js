let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let scroll_top = document.querySelector('#scroll_top');


// Navbar
menu.onclick = ()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', ()=>{
    menu.classList.remove('active');
    navbar.classList.remove('active');
})

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadows', this.window.scrollY > 0);
})

window.onscroll = ()=>{
    if(this.window.scrollY > 200){
        scroll_top.style.display = "block";
    }
    else
    {
        scroll_top.style.display = "none";
    }
}
scroll_top.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
})





// Carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1.15,
            nav:true
        },
        500:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3.2,
            nav:true,
            loop:false
        }
    }
});



// Aos
AOS.init({
    duration: 800,
    offset:300,
    easing: 'ease-in-sine'
});