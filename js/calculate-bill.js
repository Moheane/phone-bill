//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billStringElement = document.querySelector(".billString");
//get a reference to the billString
const totalString = document.querySelector(".total");



//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button




function calculateBill() {

    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
        }
    }
    totalString.innerHTML = "R"+billTotal;
    if (billTotal >= 20 && billTotal<30) {
        totalString.classList.add("warning");
    }
    else if (billTotal >= 30) {
        totalString.classList.add("danger");
    }
}


calculateBtn.addEventListener("click", calculateBill)