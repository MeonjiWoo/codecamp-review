export function checkToPhoneNumber(phoneNumber){
    if(phoneNumber.length !== 10 && phoneNumber.length !== 11){
        console.log("Error, 핸드폰 번호를 정확하게 입력해주세요.");
        return false;
    } else {
        return true;
    }
}

export function getToken(count){
    if(count === undefined){
        console.log("Error, 인증번호의 자릿수를 입력해주세요.");
        return;
    } else if(count > 12){
        console.log("Error, 인증번호의 자릿수가 너무 높습니다.");
        return;
    } else if(count <= 0){
        console.log("Error, 인증번호의 자릿수가 너무 낮습니다.");
        return;
    }

    const token = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0')

    return token;
}

export function sendTokenToSMS(phoneNumber, count){
    console.log(`${phoneNumber} 번호로 인증번호 ${count}를 전송합니다.`);
}