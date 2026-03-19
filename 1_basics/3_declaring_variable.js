/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 사용하지 않음.
 * 2) let
 * 3) const
 */

var name = 'Hello World';
console.log(name);

var age = 28;
console.log(age);

// var, let은 변경 가능
let dinner = '맛있다';
console.log(dinner);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

dinner = '맛없다';
console.log(dinner);

// const는 변경할 수 없음
const lunch = '햄버거';
console.log(lunch);
