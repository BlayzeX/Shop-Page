let totalPrice = 0;
let cartItem = JSON.parse(localStorage.getItem('data')) || [];

const total = document.getElementById('totale');
const items = document.getElementById('cart-items');
const cartCounnt = document.getElementById('cart-count');
const cart = document.getElementById('cart');
const icon = document.getElementById('shop-icon');
const cancel = document.getElementById('cancel-button');

const prices = {
  laptop: 100,
  shirt: 50,
  mouse: 20,
  tablet: 70,
  hoody: 80,
  camera: 60,
};

const description = {
  laptop: 'High-performance laptop with 16GB RAM and 512GB SSD.',
  shirt: 'Comfortable cotton shirt available in various colors.',
  mouse: 'Ergonomic wireless mouse with adjustable DPI.',
  tablet: 'Portable tablet with a 10-inch display and long battery life.',
  hoody: 'Cozy hoodie made from soft fleece material.',
  camera: 'Compact digital camera with 20MP resolution and 4K video recording.'
};

const images = {
  laptop: 'https://image2url.com/r2/default/images/1775161214671-8f5be9f8-d18f-4375-9da7-3e672acaed43.png',
  shirt: 'https://image2url.com/r2/default/images/1775162005757-15b2771f-4753-4419-aa34-0de5a47a0ba4.png',
  mouse: 'https://image2url.com/r2/default/images/1775162313263-cd6e8a77-ad80-4558-b9cb-424ac8272e5c.png',
  tablet: 'https://image2url.com/r2/default/images/1775242397529-bcd14c26-bf84-4f00-8abc-98b448ea0284.png',
  hoody: 'https://image2url.com/r2/default/images/1775243127423-4a2e2736-0a0e-49ed-a739-fe4787e758e0.png',
  camera: 'https://image2url.com/r2/default/images/1775243390056-8cfbe4a4-9a53-4562-b2fa-3c2a7f21dd2f.png'
};

icon.addEventListener('click', () => cart.style.display = 'block');
cancel.addEventListener('click', () => cart.style.display = 'none');

function saveData() {
  localStorage.setItem('data', JSON.stringify(cartItem));
}

function recalcTotal() {
  totalPrice = 0;

  cartItem.forEach(item => {
    totalPrice += prices[item.product] * item.quantity;
  });

  total.textContent = totalPrice;

  cartCounnt.textContent = cartItem.reduce(
    (sum, item) => sum + item.quantity, 0
  );
}

function updateItemUI(productName) {
  const box = document.querySelector(`[data-product="${productName}"]`);
  if (!box) return;

  const item = cartItem.find(i => i.product === productName);

  box.querySelector('.addText').textContent = item.quantity;
  box.querySelector('.p').textContent =
    "$" + prices[productName] * item.quantity;
}

function addElement(productName, quantity = 1) {

  let item = cartItem.find(i => i.product === productName);

  // إذا غير موجود → نضيفه
  if (!item) {
    item = { product: productName, quantity: quantity };
    cartItem.push(item);
  }

  let existing = document.querySelector(`[data-product="${productName}"]`);

  if (existing) {
    updateItemUI(productName);
    return;
  }

  const div = document.createElement('div');
  div.className = 'div';
  div.dataset.product = productName;

  const img = document.createElement('img');
  img.src = images[productName];
  img.width = 75;
  img.className = 'img';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn';
  deleteBtn.textContent = 'X';

  const priceText = document.createElement('p');
  priceText.className = 'p';

  const descText = document.createElement('p');
  descText.className = 'description';
  descText.textContent = description[productName];

  const minusBtn = document.createElement('button');
  minusBtn.className = 'addBtn';
  minusBtn.textContent = '<';

  const plusBtn = document.createElement('button');
  plusBtn.className = 'backBtn';
  plusBtn.textContent = '>';

  const qtyText = document.createElement('p');
  qtyText.className = 'addText';

  div.appendChild(img);
  div.appendChild(deleteBtn);
  div.appendChild(priceText);
  div.appendChild(descText);
  div.appendChild(minusBtn);
  div.appendChild(qtyText);
  div.appendChild(plusBtn);

  items.appendChild(div);


  deleteBtn.onclick = () => {
    cartItem = cartItem.filter(i => i.product !== productName);
    div.remove();

    saveData();
    recalcTotal();
  };


  plusBtn.onclick = () => {
    let item = cartItem.find(i => i.product === productName);
    item.quantity++;

    updateItemUI(productName);

    saveData();
    recalcTotal();
  };

  minusBtn.onclick = () => {
    let item = cartItem.find(i => i.product === productName);

    if (item.quantity > 1) {
      item.quantity--;
    }

    updateItemUI(productName);

    saveData();
    recalcTotal();
  };

  updateItemUI(productName);
  recalcTotal();
}

function loadCart() {
  items.innerHTML = '';

  cartItem.forEach(item => {
    addElement(item.product, item.quantity);
  });

  recalcTotal();
}

loadCart();






