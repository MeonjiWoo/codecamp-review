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
    // if문을 활용한 에러핸들링 추가

    const Token = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0')

    console.log(Token);

    return Token;
}

getToken(9)
getToken()
getToken(12)
getToken(0)

