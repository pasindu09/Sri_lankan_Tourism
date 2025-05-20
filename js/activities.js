if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
   } else {
    ready()
   }

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var a = 0; a < removeCartItemButtons.length; a++) {
        var button = removeCartItemButtons[a]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('item-three-input')
    for (var a = 0; a < quantityInputs.length; a++) {
        var input = quantityInputs[a]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('class-java-button')
    for (var a = 0; a < addToCartButtons.length; a++) {
        var button = addToCartButtons[a]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('button-one')[0].addEventListener('click', purchaseClicked)
    document.getElementsByClassName('button-two')[0].addEventListener('click', removeCart)
    document.getElementsByClassName('btn-lastPurchase')[0].addEventListener('click',lastPurchaseClicked)
}
function lastPurchaseClicked(){
    var cartItems = document.getElementsByClassName('item-five')[1]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
    alert('Thank you for your purchase')
}

function purchaseClicked() {


var cartItemContainer = document.getElementsByClassName('item-five')[0]
var cartItemContainer2 = document.getElementsByClassName('item-five')[1]
cartItemContainer2.append(cartItemContainer.cloneNode(true));
cartItemContainer.innerHTML = "";
   
  
    updateCartTotal()
}
function removeCart(){
    var cartItems = document.getElementsByClassName('item-five')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


function removeCartItem(buttonClicked) {
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(input) {
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('span-element')[0].innerText
    var price = shopItem.getElementsByClassName('class-java-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('img-ticket')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('order-two')
    var cartItems = document.getElementsByClassName('item-five')[0]
    var cartItemNames = cartItems.getElementsByClassName('item-one-title')
    for (var a = 0; a < cartItemNames.length; a++) {
        if (cartItemNames[a].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="item-one item-four">
            <img class="item-one-image" src="${imageSrc}" width="100" height="100">
            <span class="item-one-title">${title}</span>
        </div>
        <span class="item-two item-four">${price}</span>
        <div class="item-three item-four">
            <input class="item-three-input" onchange="quantityChanged(this)" type="number" value="1">
            <button class="btn btn-danger" onclick="removeCartItem(this)" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('item-five')[0]
    var cartRows = cartItemContainer.getElementsByClassName('order-two')
    var total = 0
    for (var a = 0; a < cartRows.length; a++) {
        var cartRow = cartRows[a]
        var priceElement = cartRow.getElementsByClassName('item-two')[0]
        var quantityElement = cartRow.getElementsByClassName('item-three-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('amount-got')[0].innerText = 'Rs. ' + total

    var cartItemContainer = document.getElementsByClassName('item-five')[1]
    var cartRows = cartItemContainer.getElementsByClassName('order-two')
    var total = 0
    for (var a = 0; a < cartRows.length; a++) {
        var cartRow = cartRows[a]
        var priceElement = cartRow.getElementsByClassName('item-two')[0]
        var quantityElement = cartRow.getElementsByClassName('item-three-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('amount-got')[1].innerText = 'Rs. ' + total
}

function loyal(){
    var cartItemContainer = document.getElementsByClassName('item-five')[0];
    localStorage.setItem("order",cartItemContainer.innerHTML);
    alert('current oreder added to local storage')
    var cartItemContainer = document.getElementsByClassName('item-five')[0]
    var cartRows = cartItemContainer.getElementsByClassName('order-two')
    if(cartRows.length>3){
        var points = 0;
        if (!(localStorage.getItem("points") === null)) {
            points = parseInt(localStorage.getItem("points"));
        }

        points += parseInt(20*cartRows.length);

        localStorage.setItem("points",points);

    }
}

function order(){
    var cartItemContainer = document.getElementsByClassName('item-five')[0];
    cartItemContainer.innerHTML = localStorage.getItem("order");
    updateCartTotal()
}

function lar(){
    if (!(localStorage.getItem("points") === null)) {
        alert("Points : " + localStorage.getItem("points"));
    }else{
        alert("Points : 0");
    }
}