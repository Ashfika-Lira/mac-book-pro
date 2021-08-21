// best Price section
const bestPrice = document.getElementById('basic-total');

// memory cost
const memory8gb = document.getElementById('memory-8gb-btn');
const memory16gb = document.getElementById('memory-16gb-btn');
const extraMemory = document.getElementById('memory-cost');

// storage cost
const storage256gb = document.getElementById('storage-256gb-btn');
const storage512gb = document.getElementById('storage-512gb-btn');
const storage1tb = document.getElementById('storage-1tb-btn');
const extraStorage = document.getElementById('storage-cost');

// delivery charge
const freeDelivery = document.getElementById('free-delivery-btn');
const premiumDelivery = document.getElementById('premium-delivery-btn');
const deliveryCharge = document.getElementById('delivery-cost');

// total price
let totalPrice = document.getElementById('total-cost');

// coupon-code
const couponCode = document.getElementById('coupon-code');

// coupon code apply button
const applyButton = document.getElementById('apply-btn');

// discount price
const discountPrice = document.getElementById('deduct-total');



// Memory part
memory8gb.addEventListener('click', function() {
    extraMemory.innerText = '0';
    calculateTotal();
})
memory16gb.addEventListener('click', function() {
    extraMemory.innerText = '180';
    calculateTotal();
});
// Memory part



// Storage Section
storage256gb.addEventListener('click', function() {
    extraStorage.innerText = '0';
    calculateTotal();
})
storage512gb.addEventListener('click', function() {
    extraStorage.innerText = '100';
    calculateTotal();
})
storage1tb.addEventListener('click', function() {
    extraStorage.innerText = '180';
    calculateTotal();
});
// Storage Section



// Delivery Section
freeDelivery.addEventListener('click', function() {
    deliveryCharge.innerText = '0';
    calculateTotal();
})
premiumDelivery.addEventListener('click', function() {
    deliveryCharge.innerText = '20';
    calculateTotal();
});
// Delivery Section


// Total price calculate
function calculateTotal() {
    total();
    discountPrice.innerText = totalPrice.innerText;
}

function total() {
    const best = parseFloat(bestPrice.innerText);
    const memoryCost = parseFloat(extraMemory.innerText);
    const storageCost = parseFloat(extraStorage.innerText);
    const deliveryCost = parseFloat(deliveryCharge.innerText);

    totalPrice.innerText = best + memoryCost + storageCost + deliveryCost;
}

applyButton.addEventListener('click', function() {
    if (couponCode.value == 'stevekaku') {
        total();
        const amountInt = parseFloat(totalPrice.innerText);
        const offer = amountInt * (20 / 100);
        discountPrice.innerText = discountPrice.innerText - offer;
        couponCode.value = '';
    } else {
        calculateTotal();
    }
})