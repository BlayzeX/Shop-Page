const icon = document.getElementById('shop-icon');
const cart = document.getElementById('cart');
const cancel = document.getElementById('cancel-button');
icon.addEventListener('click', function(){
    cart.style.display = 'block';
});
cancel.addEventListener('click', function(){
    cart.style.display = 'none';
});
