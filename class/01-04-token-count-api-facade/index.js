function checkValidationPhoneNumber(phoneNumber){
    if(phoneNumber.length !== 10 && phoneNumber.length !== 11){
        console.log("Error, 핸드폰 번호를 정확히 입력해주세요.");
        return false;
    } else {
        return true;
    }
    // if문을 활용한 에러핸들링 추가(phoneNumber)
}

function getToken(count){
    if(count === undefined){
        console.log("Error, count의 값을 입력해주세요.");
        return;
    } else if (count <= 0){
        console.log("Error, count의 값이 너무 작습니다.");
        return;
    } else if (count > 10){
        console.log("Error, count의 값이 너무 큽니다.");
        return;
    }
    // if문을 활용한 에러핸들링 추가(count)

    const Token = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0')

    return Token;
}

function sendTokenToSMS(phoneNumber, Token){
    console.log(`${phoneNumber}번호로 인증번호 ${Token}이 전송되었습니다.`)
}



function createTokenOfPhone(phoneNumber ,count){

    const isVaild = checkValidationPhoneNumber(phoneNumber);

    if(isVaild === true){
        const Token = getToken(count)
        sendTokenToSMS(phoneNumber, Token)
    };
}

createTokenOfPhone('01050600172',9)


