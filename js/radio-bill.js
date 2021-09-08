
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const orange = document.querySelector(".orange");

var radioTotalCalls = 0;
var radioTotalSms = 0;

function radioBillTotal() {
    const checkedBtn = document.querySelector(".billItemTypeRadio:checked");
    var billItemType = checkedBtn.value;
    if (billItemType == "call") {
        radioTotalCalls += 2.75;
    }
    else if (billItemType == "sms") {
        radioTotalSms += 0.75;
    }

    callTotalTwo.innerHTML = radioTotalCalls.toFixed(2);
    smsTotalTwo.innerHTML = radioTotalSms.toFixed(2);
    var radioTotal= radioTotalCalls + radioTotalSms;
    var number = radioTotal.toFixed(2);
    
    if (radioTotal >= 30 && radioTotal < 50) {
        orange.classList.add("warning");
    }
    else if (radioTotal >= 50) {
        orange.classList.add("danger");
        number = 50;
    }
    orange.innerHTML = "R" + number;
}

radioBillAddBtn.addEventListener('click', radioBillTotal);