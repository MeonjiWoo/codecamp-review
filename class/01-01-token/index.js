function getTokenSix(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,'0')
    // 1. Math.random()은 랜덤으로 0.5873833299626832와 같은 숫자를 만들어주는 메서드다.
    // 2. 6자리의 인증번호를 만들기 위해 * 1000000를 해주고 Math.floor를 사용하여 소수점 아래 숫자를 제거한다.
    // 3. 앞자리의 숫자가 0일 경우 6자리의 인증번호가 아닌 토큰이 만들어지므로 .padStart(6, '0')을 사용하여 항상 6자리가 유지되게 만든다.
    console.log(result);

    return result;
}

getTokenSix()

function getToken(count){
    const Token = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0')
    // 1. count를 매개변수로 설정, 원하는 토큰의 자릿수를 count로 받아 토큰을 생성한다.
    // 2. ** 는 제곱 연산자
    // 3. .padStart()의 인자에도 count를 설정하여 입력한 자릿수가 유지된다.
    console.log(Token);

    return Token;
}

getToken(10)