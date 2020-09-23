/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var h3El = document.createElement('h3');
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  console.table(Product.allProducts);
  for (var i in Product.allProducts) {
var optEl =document.createElement('option');
optEl.value= Product.allProducts[i].filepath;
console.log(Product.allProducts[i]);
optEl.text=Product.allProducts[i].name;
selectElement.appendChild(optEl);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {


  // TODO: Prevent the page from reloading
  event.preventDefault();


  // Do all the things ...

  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var productSelector = document.getElementById('items');
  var quantityInput = document.getElementById('quantity');
  var itemQuant = quantityInput.value;
  console.log('quantity of item needed is '+ itemQuant);
  var itemName = productSelector.options[productSelector.selectedIndex].text;
  console.log('Selected item is '+ itemName);
  var myItem = new CartItem (itemName, itemQuant);
  cart.items.push(myItem);
  console.table(cart.items);

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var itemCount = document.getElementById('itemCount');
  h3El.innerHTML= '';
  h3El.textContent= `(${cart.totalItems()})`;
  itemCount.appendChild(h3El);

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var cartPreview = document.getElementById('cartContents');
  var cartPreviewList = document.createElement('ul');
  cartPreviewList.setAttribute('class', 'cart-preview-header');
  console.log(cartPreviewList);
  cartPreview.appendChild(cartPreviewList);
  console.log('cart items in update preview: ', cart.items);
  cart.items.forEach((item)=> {
    console.log(`item: ${item.product},quantity: ${item.quantity}`);
    var cartPreviewItem = document.createElement('li');
    cartPreviewList.innerHTML='';
    cartPreviewItem.textContent= `item: ${item.product}, quantity: ${item.quantity}`;
    cartPreviewList.appendChild(cartPreviewItem);

  });
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

