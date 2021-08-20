// get image selector id
const divOne = document.getElementById('first');
const divTwo = document.getElementById('second');
const divThree = document.getElementById('third');
const divFour = document.getElementById('fourth');

// get image source
const img = document.getElementById('art');

// get image description and price
const describe = document.getElementById('describe');
const price = document.getElementById('price');

// get shipping service charge
const regular = document.getElementById('regular');
const express = document.getElementById('express');
const shippingField = document.getElementById('shipping');

// get total price
const total = document.getElementById('total');

// handle shipping charges event button
regular.addEventListener('click', function () {
    shippingField.innerText = '10';
    updateTotal();
})

express.addEventListener('click', function () {
    shippingField.innerText = '30';
    updateTotal();
})


// update total price
function updateTotal() {
    const shippingCharges = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharges + productPrice;
    total.innerText = grandTotal;
}

// handle image changes event
divOne.addEventListener('click', function () {
    // Set img source path
    img.src = 'images/1.jpg';
    // set img description
    describe.innerText = 'Vivamus consectetur porta dictum. Nunc porta justo ac velit volutpat, quis interdum sem gravida. Nam pretium ullamcorper justo et consequat.'
    // set img price
    price.innerText = '750';
    // update total price
    updateTotal()
});

divTwo.addEventListener('click', function () {
    // Set img source path
    img.src = 'images/2.jpg';
    // set img description
    describe.innerText = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ullamcorper velit vel mauris tincidunt elementum.'
    // set img price
    price.innerText = '699';
    // update total price
    updateTotal()
});

divThree.addEventListener('click', function () {
    // Set img source path
    img.src = 'images/3.jpg';
    // set img description
    describe.innerText = 'Donec porttitor mauris nec faucibus tempor. Maecenas tempus arcu vitae varius ornare. Maecenas dapibus sapien vitae volutpat rutrum.'
    // set img price
    price.innerText = '900';
    // update total price
    updateTotal()
});

divFour.addEventListener('click', function () {
    // Set img source path
    img.src = 'images/4.jpg';
    // set img description
    describe.innerText = 'Cras feugiat semper dui, et accumsan quam condimentum sed. Nulla eget lacus neque. Nam fermentum dui sapien, ligula venenatis vitae.'
    // set img price
    price.innerText = '550';
    // update total price
    updateTotal()
});
