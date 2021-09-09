function phone_bill(params) {
    let call = 0;
    let sms = 0;
    
    function makeCall() {
        call+=2.75;
        
    };

    function makeSms() {
        sms+=0.75;
        
    };

    function callTotal() {
        return call;
    }

    function smsTotal() {
        return sms 
    }

    function grandTotal() {
        return call + sms
    }

    return{
        makeCall,
        makeSms,
        callTotal,
        smsTotal,grandTotal
    }
}