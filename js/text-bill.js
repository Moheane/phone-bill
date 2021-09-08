
const billTypeText = document.querySelector(".billTypeText");
const addToBillBtn = document.querySelector(".addToBillBtn");
const callTotalOne = document.querySelector(".callTotalOne");
const smsTotalOne = document.querySelector(".smsTotalOne");
const total = document.querySelector(".red");

var totalCalls = 0;
var radioTotalSms = 0;

function textBill() {
    var typedValue = billTypeText.value.trim();

    if (typedValue === "call") {
        totalCalls += 2.75
    }
    else if (typedValue === "sms") {
        radioTotalSms += 0.75;
    }

    callTotalOne.innerHTML = totalCalls.toFixed(2);
    smsTotalOne.innerHTML = radioTotalSms.toFixed(2);
    var totalCost = totalCalls + radioTotalSms;
    var number = totalCost.toFixed(2);

    if (totalCost >= 30 && totalCost < 50) {
        total.classList.add("warning");
    }
    else if (totalCost >= 50) {
        total.classList.add("danger");
    }
    total.innerHTML = "R" + number;
};

addToBillBtn.addEventListener('click', textBill);