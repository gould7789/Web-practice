/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 반갑습니다.';
console.log(original);
console.log(clone);

let originalObj = {
    name: '멍이',
    group: '강아지'
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-------------');

originalObj['group'] = '고양이';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj == cloneObj);

// 테스트
const animal1 = {
    name: '뽀삐',
    category: '고양이'
};

const animal2 = animal1

const animal3 = {
    name: '뽀삐',
    category: '고양이'
};

console.log(animal1 == animal2); // true: 같은 주소값을 참조하고 있기 때문
console.log(animal1 == animal3); // false: 값은 같지만 다른 메모리 공간을 참조하고 있기 때문
console.log(animal2 == animal3); // false: aniaml1과 2는 주소값이 같기 때문에 똑같은 이유로 false

/**
 * Spread Operator
 */
const animal4 = {
    ...animal3
};
console.log(animal4);
console.log(animal3 == animal4);

// 복사하며 추가도 가능
const animal5 = {
    age: 5,
    ...animal3
};
console.log(animal5)