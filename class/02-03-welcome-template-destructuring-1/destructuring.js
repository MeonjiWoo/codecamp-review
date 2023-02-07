const user = {
    name: '김지우',
    age: 28,
    school: '다문대학교',
    createdAt: '2023-02-06'
}

// const name = user.name
// const age = user.age
// const school = user.school
// const createdAt = user.createdAt

const {name, age, school, createdAt} = user
// 객체를 구조분해할당 하게 될 경우 객체 안의 key값을 가져와 할당 => 객체 안의 존재하는 key값의 이름으로 재할당해야하며 순서는 상관없음


const classmates = ['철수', '영희', '훈이'];

// const child1 = classmates[0];
// const child2 = classmates[1];
// const child3 = classmates[2];

const [child1, child2, child3] = classmates;
// 배열은 구조분해할당 시, 배열의 순서가 매우 중요함
