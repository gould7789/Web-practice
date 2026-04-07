/**
 * Object: 객체
 */

// key: value 형태로 데이터를 저장하는 자료구조
// 객체는 중괄호 {}로 감싸서 표현한다.
// 객체의 key는 문자열 또는 심볼이어야 한다.
// 객체의 value는 어떤 타입이든 될 수 있다.

const person = {
    name: 'Alice',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'traveling'],
    address: {
        city: 'New York',
        country: 'USA'
    },
    dance: function() {
        return `${this.name} is dancing!`; // this는 현재 객체를 가리킨다.
    }
};

console.log(person.name); // 'Alice'
console.log(person['age']); // 30
console.log(person.dance()); // 'Alice is dancing!'

const key = 'name';
console.log(person[key]); // 'Alice'

// 객체의 속성 추가
person.gender = 'female';
console.log(person.gender); //

// 객체의 속성 삭제
delete person.isStudent;
console.log(person.isStudent); // undefined

// 객체의 속성 업데이트
person.age = 31;
console.log(person.age); // 31

// 객체의 속성 복사 및 추가
const newKey = 'name';
const newValue = 'Bob';

const newPerson = {
    ...person, // 기존 객체의 속성을 복사
    [newKey]: newValue // 새로운 key-value 추가
};

console.log(newPerson.name); // 'Bob'
console.log(person.name); // 'Alice' (원래 객체는 변경되지 않음)

// 모든 키값 가져오기
console.log(Object.keys(person)); // ['name', 'age', 'hobbies', 'address', 'dance', 'gender']

// 모든 값 가져오기
console.log(Object.values(person)); // ['Alice', 31, ['reading', 'traveling'], { city: 'New York', country: 'USA' }, [Function: dance], 'female']

// 모든 키-값 쌍 가져오기
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 31], ['hobbies', ['reading', 'traveling']], ['address', { city: 'New York', country: 'USA' }], ['dance', [Function: dance]], ['gender', 'female']]