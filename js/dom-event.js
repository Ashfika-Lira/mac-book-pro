//Memory part
function memoryCost(isChosenMemory) {
    const extraMemory = document.getElementById('memory-cost').innerText;
    const totalMemory = document.getElementById('memory-cost');


    if (isChosenMemory == '8gb') {
        totalMemory.innerText = 0;


    } else if (isChosenMemory == '16gb') {
        totalMemory.innerText = 180;


    }
    return totalMemory;

}

//Memory part

//storage section start
function storageCost(isChosenStorage) {
    const extraStorage = document.getElementById('storage-cost').innerText;
    const totalStorage = document.getElementById('storage-cost');

    if (isChosenStorage == '256gb-storage') {
        totalStorage.innerText = 0;

    } else if (isChosenStorage == '512gb-storage') {
        totalStorage.innerText = 100;

    } else if (isChosenStorage == '1tb-storage') {
        totalStorage.innerText = 180;
    }
    return totalStorage;

}
//storage section end

//Delivery Segment

function deliveryCost(isDeliveryCharge) {
    const deliveryCharge = document.getElementById('delivery-cost').innerText;
    const totalDeliveryCharge = document.getElementById('delivery-cost');

    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryCharge.innerText = 0;

    } else if (isDeliveryCharge == 'with-charge') {
        totalDeliveryCharge.innerText = 20;
    }

    return totalDeliveryCharge;

}
//Delivery Segment

// Total price calculate
function calculate(memory, storage, deliveryCharge, coupon) {

    const extraMemoryCost = memoryCost(memory).innerText;
    const totalMemoryCost = parseInt(extraMemoryCost);
    const extraStorageCost = storageCost(storage).innerText;
    const totalStorageCost = parseInt(extraStorageCost);
    const extraDeliveryCost = deliveryCost(deliveryCharge).innerText;
    const totalDeliveryCost = parseInt(extraDeliveryCost);





    const updateBalance = document.getElementById('basic-total').innerText;
    const finalBalance = document.getElementById('total-cost');
    finalBalance.innerText = totalMemoryCost + totalStorageCost + totalDeliveryCost + parseInt(updateBalance);
    const discountCost = document.getElementById('deduct-total');
    discountCost.innerText = finalBalance.innerText;

    //apply promo code section 
    coupon = document.getElementById('coupon-code').value;
    if (coupon == 'stevekaku') {
        const deductingAmount = parseFloat(finalBalance.innerText) * (20 / 100);
        const afterCouponCost = finalBalance.innerText - parseFloat(deductingAmount);
        discountCost.innerText = afterCouponCost;

    }



}



//memory-cost 
document.getElementById('memory-8gb-btn').addEventListener('click', function() {

    memoryCost('8gb');
    calculate('8gb');


});
document.getElementById('memory-16gb-btn').addEventListener('click', function() {

    memoryCost('16gb');

    calculate('16gb');


});


//Storage-Cost part
document.getElementById('storage-256gb-btn').addEventListener('click', function() {

    storageCost('256gb-storage');
    calculate('256gb-storage');


});
document.getElementById('storage-512gb-btn').addEventListener('click', function() {

    storageCost('512gb-storage');
    calculate('512gb-storage');


});
document.getElementById('storage-1tb-btn').addEventListener('click', function() {

    storageCost('1tb-storage');
    calculate('1tb-storage');


});
//delivery cost section
document.getElementById('free-delivery-btn').addEventListener('click', function() {

    deliveryCost('without-charge');
    calculate('without-charge');


});
document.getElementById('premium-delivery-btn').addEventListener('click', function() {

    deliveryCost('with-charge');
    calculate('with-charge');


});
//update coupon code
document.getElementById('apply-btn').addEventListener('click', function() {

    calculate('stevekaku');
    document.getElementById('coupon-code').value = '';
});