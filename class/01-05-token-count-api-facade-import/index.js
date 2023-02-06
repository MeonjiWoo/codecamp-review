import { checkValidationPhoneNumber, getToken, sendTokenToSMS } from "./phone.js";

function createTokenOfPhone(phoneNumber ,count){

    const isVaild = checkValidationPhoneNumber(phoneNumber);

    if(isVaild === true){
        const Token = getToken(count)
        sendTokenToSMS(phoneNumber, Token)
    };
}

createTokenOfPhone('01050600172',111)


