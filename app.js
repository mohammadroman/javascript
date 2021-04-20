const openside = document.querySelector('.openside');
const mainBox = document.querySelector('.mainBox');
const icon = document.querySelector('.openside');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

openside.addEventListener('click',function() {

    icon2.classList.toggle('icon22');
    icon1.classList.toggle('icon11');
    mainBox.classList.toggle('mainBox2');
});


//position fixet event
window.addEventListener('scroll',function() {

    const container = document.querySelector("#container");
    container.classList.toggle('fixet', window.scrollY > 50);

});

//sub menu Event
const subBox = document.querySelector(".subBox");
const pages = document.querySelector(".pages");

pages.addEventListener("click",function() {
    subBox.classList.add('subBox2');
});
    
//submenu
const program = document.querySelector(".program");
const subUlItemSub = document.querySelector(".subUlItemSub");

program.addEventListener("click",function() {

    subUlItemSub.classList.toggle('subUlItemSub2');
});


      

  
    
