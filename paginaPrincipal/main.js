let nav = document.querySelector('.menu-lateral');
console.log(nav);
document.querySelector('.boton').addEventListener('click', function(){
    nav.classList.toggle('active');
});