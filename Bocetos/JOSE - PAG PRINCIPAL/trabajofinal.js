const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

let nav = document.querySelector('.toogle-button');
console.log(nav);
document.querySelector('.boton').addEventListener('click', function(){
    nav.classList.toggle('active');
});