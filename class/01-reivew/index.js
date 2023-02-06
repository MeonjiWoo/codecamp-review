import {checkToPhoneNumber, getToken, sendTokenToSMS} from "./phone.js"

function createTokenOfPhone(phoneNumber, count){
    const isVaild = checkToPhoneNumber(phoneNumber);

    if(isVaild === true){
        const token = getToken(count);
        sendTokenToSMS(phoneNumber, token);
    }
}

createTokenOfPhone("01050600172", 20)