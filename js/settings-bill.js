
//text bill

// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
let final = document.querySelector(".final");
let callTotalSettings = document.querySelector(".callTotalSettings");
let smsTotalSettings = document.querySelector(".smsTotalSettings");
let totalSettings = document.querySelector(".totalSettings");
let radioaddSettings = document.querySelector(".radioaddSettings");


var radioTotalCalls = 0;
var radioTotalSms = 0;

function radioBillTotal() {
    const checkedBtn = document.querySelector(".billItemTypeWithSettings:checked");
    let billItemType = checkedBtn.value;
    if (billItemType == "call") {
        radioTotalCalls += 2.75;
    }
    else if (billItemType == "sms") {
        radioTotalSms += 0.75;
    }

    callTotalSettings.innerHTML = radioTotalCalls.toFixed(2);
    smsTotalSettings.innerHTML = radioTotalSms.toFixed(2);
    let radioTotal= radioTotalCalls + radioTotalSms;
    let number = radioTotal.toFixed(2);
    
    if (radioTotal >= 30 && radioTotal < 50) {
        final.classList.add("warning");
    }
    else if (radioTotal >= 50) {
        final.classList.add("danger");
        number = 50;
    }
    totalSettings.innerHTML = number;
    console.log(radioTotalCalls)
}

radioaddSettings.addEventListener('click', radioBillTotal);