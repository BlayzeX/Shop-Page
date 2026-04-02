 const icon =  document.getElementById('div-Icon');
 const span = document.getElementById('cart-count');
icon.addEventListener('click', function() {
    document.querySelector('.cart').classList.toggle('open');
    icon.classList.toggle("margin");
    span.classList.toggle("margin");
});
document.getElementById('cancel-button').addEventListener('click', function(){
    document.querySelector('.cart').className = 'cart';
});
