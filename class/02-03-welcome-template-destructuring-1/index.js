// 객체(object)를 사용한 함수 만들기
function getWelcomeTemplate({name, age, school, createdAt}) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createdAt}</div>                
            </body>
        </html>
    `;
}

const myUser = {
    name: '김지우',
    age: 28,
    school: '다문대학교',
    createAt : '2023-02-06'
}

const result = getWelcomeTemplate(myUser);
console.log(result);