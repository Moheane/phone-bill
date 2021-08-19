
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
let updateSettings = document.querySelector(".updateSettings");
let callCostSetting = document.querySelector(".callCostSetting");
let smsCostSetting = document.querySelector(".smsCostSetting");
let warningLevelSetting = document.querySelector(".warningLevelSetting");
let criticalLevelSetting = document.querySelector(".criticalLevelSetting");

var radioTotalCalls = 0;
var radioTotalSms = 0;
var callCost = 2.75;
var smsCost = 0.75;
var warningLevel = 30;
var dangerLevel = 50;

function radioBillTotal() {
    const checkedBtn = document.querySelector(".billItemTypeWithSettings:checked");
    let billItemType = checkedBtn.value;
    if (billItemType == "call") {
        radioTotalCalls += callCost;
    }
    else if (billItemType == "sms") {
        radioTotalSms += smsCost;
    }

    callTotalSettings.innerHTML = radioTotalCalls.toFixed(2);
    smsTotalSettings.innerHTML = radioTotalSms.toFixed(2);
    let radioTotal= radioTotalCalls + radioTotalSms;
    let number = radioTotal.toFixed(2);
    
    if (radioTotal >= warningLevel && radioTotal < dangerLevel) {
        final.classList.add("warning");
    }
    else if (radioTotal >= dangerLevel) {
        final.classList.add("danger");
        number = dangerLevel;
    }
    totalSettings.innerHTML = number;
    console.log(radioTotalCalls)
}

radioaddSettings.addEventListener('click', radioBillTotal);


function updateFunc() {

    console.log(costperCall)
    totalSettings.classList.remove("danger");
    totalSettings.classList.remove("warning");
    var costperCall = parseFloat(callCostSetting.value);
    if (costperCall != 0) {
        callCost = costperCall;
        settingCalltotal = 0;
    }
    var costperSms = parseFloat(smsCostSetting.value);
    if (costperSms != 0) {
        smsCost = costperSms;
        settingSmstotal = 0;
    }

    var warningValue = parseFloat(warningLevelSetting.value);
    if (warningValue != callCost - smsCost) {
        warningLevel = warningValue;
    }
    var dangerValue = parseFloat(criticalLevelSetting.value);
    if (dangerValue != callCost - smsCost) {
        dangerLevel = dangerValue;
    }

}

updateSettings.addEventListener('click', updateFunc)