let totalPrice = 0;
const icon = document.getElementById('shop-icon');
const cart = document.getElementById('cart');
const cancel = document.getElementById('cancel-button');
icon.addEventListener('click', function(){
    cart.style.display = 'block';
});
cancel.addEventListener('click', function(){
    cart.style.display = 'none';
});
function addElement(productName){
   const cartCounnt = document.getElementById('cart-count');
   const cart = document.getElementById('cart');
   const body = document.querySelector('body');
   const images = {
     laptop: 'https://image2url.com/r2/default/images/1775161214671-8f5be9f8-d18f-4375-9da7-3e672acaed43.png',
     shirt: 'https://image2url.com/r2/default/images/1775162005757-15b2771f-4753-4419-aa34-0de5a47a0ba4.png',
     mouse: 'https://image2url.com/r2/default/images/1775162313263-cd6e8a77-ad80-4558-b9cb-424ac8272e5c.png',
     tablet: 'https://image2url.com/r2/default/images/1775242397529-bcd14c26-bf84-4f00-8abc-98b448ea0284.png',
     hoody: 'https://image2url.com/r2/default/images/1775243127423-4a2e2736-0a0e-49ed-a739-fe4787e758e0.png',
     camera: 'https://image2url.com/r2/default/images/1775243390056-8cfbe4a4-9a53-4562-b2fa-3c2a7f21dd2f.png'
    };
    const img = document.createElement('img');
    img.src = images[productName];
    img.width = 65;
    
   const items = document.getElementById('cart-items');
   const deleteBtn = document.createElement('button');
   deleteBtn.className = 'btn'
   deleteBtn.textContent = 'X';
   const div = document.createElement('div');
   div.className = 'div';
   const addToTotale = document.createElement('button');
   addToTotale.textContent = 'Add to Total'
   addToTotale.className = 'add';

   div.appendChild(img);
   div.appendChild(deleteBtn);
   div.appendChild(addToTotale);
   items.appendChild(div);

   const num = items.children.length;
  cartCounnt.textContent = num.toString();
  console.log(num);

  addToTotale.onclick = function(){
     const total = document.getElementById('totale');
     const prices = {
        laptop: 100,
        shirt: 50,
        mouse: 20,
        tablet: 70,
        hoody: 80,
        camera: 60
     };
     const price = prices[productName];
     totalPrice = totalPrice + price;
     total.textContent = totalPrice;
  };

   deleteBtn.onclick = function(){
    div.remove();
};
};
