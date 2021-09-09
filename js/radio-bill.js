
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const orange = document.querySelector(".orange");

var radioTotalCalls = 0;
var radioTotalSms = 0;
var factory = phone_bill();


callTotalTwo.innerHTML = radioTotalCalls.toFixed(2);
smsTotalTwo.innerHTML = radioTotalSms.toFixed(2);
smsTotalTwo.innerHTML = radioTotalSms.toFixed(2);

function radioBillTotal() {
    const checkedBtn = document.querySelector(".billItemTypeRadio:checked");
    var billItemType = checkedBtn.value;
    if (billItemType == "call") {
        factory.makeCall();
    }
    else if (billItemType == "sms") {
        factory.makeSms();
    }

    callTotalTwo.innerHTML = factory.callTotal().toFixed(2);
    smsTotalTwo.innerHTML = factory.smsTotal().toFixed(2);

    var number = factory.grandTotal().toFixed(2);
    
    if (factory.grandTotal() >= 30 && factory.grandTotal() < 50) {
        orange.classList.add("warning");
    }
    if (factory.grandTotal() >= 50) {
        orange.classList.add("danger");
        number = 50;
    }
    orange.innerHTML = "R" + number;
}

radioBillAddBtn.addEventListener('click', radioBillTotal);