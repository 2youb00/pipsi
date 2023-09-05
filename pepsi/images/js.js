////       ( )    /////////
let image = document.getElementById('image') ; 
let one = document.getElementById('one') ; 
let two = document.getElementById('two') ; 
let three3 = document.getElementById('three3') ; 
let container = document.getElementById('container') ;
container.style.transition = 'all 1s ease';
two.addEventListener('click',function() {
    //image.style.opacity='0.5';//
    image.src=two.src;
    container.style.backgroundColor = '#C0C0C0';
    two.style.opacity='1'
    three3.style.opacity='0.7';
    one.style.opacity='0.7';
    //C0C0C0//
})

three3.addEventListener('click',function() {
    image.src=three3.src;
    container.style.backgroundColor = '#000000';
    three3.style.opacity='1'
    two.style.opacity='0.7';
    one.style.opacity='0.7';
})

one.addEventListener('click',function() {
    image.src=one.src;
    container.style.backgroundColor = '#3481c9';
    one.style.opacity='1'
    three3.style.opacity='0.7'
    two.style.opacity='0.7'

})