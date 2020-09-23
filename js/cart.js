/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
var h3El= document.createElement('h3');
function loadCart() {
  console.log(localStorage.getItem('cart'));
  var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  var loadCart= [];
  
  for(let i=0; i< cart.items.length; i++){
    loadCart.push(new CartItem(cart.items[i].product,cart.items[i].quantity));
}
  cart = new Cart(loadCart);
  console.log(cart);
  console.table(items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = document.getElementById('cart').getElementByIdTagName('tbody')[0];
  tbody.innerHTML= '';

  }
  function updateCounter (){
    var itemCount = document.getElementById('itemCount');
    h3El.innerHTML= '';
    h3El.textContent= `(${cart.totalitems()})`;
    itemCount.appendChild(h3El);

    
  }
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  updateCounter();

  // TODO: Find the table body
var tbody = document.getElementById('cart').getElementByIdTagName('tbody')[0];
console.log(tbody);

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
console.log('cart items length: '+ cart.items.length);
for(let i=0; i <cart.items.length; i++){
  var trEl = document.createElement('tr');
  var tdRem = document.createElement('td');
  var buttonRemove = document.createElement('button');
  buttonRemove.id= i;
  buttonRemove.textContent= 'X';
  tdRem.appendChild(buttonRemove);
  console.log(buttonRemove);
  var tdElquant = document.createElement('td');
  tdElquant.textContent= cart.items[i].quantity;
  console.log(cart.items[i].quantity);
  var tdElItem = document.createElement('td');
  tdElItem.textContent= cart.items[i].product;
  console.log(cart.items[i].product);
  trEl.appendChild(tdRem);
  trEl.appendChild(tdElquant);
  trEl.appendChild(tdElItem);
  tbody.appendChild(trEl);

}
console.log(tbody);
}

function removeItemFromCart(event) {
  console.log('click remove target: '+event.target.id);
  cart.removeItem(event.target.id);
  renderCart();


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
table.addEventListener('click', removeItemFromCart);



