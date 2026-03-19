/**
 * operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);
console.log('-------------')

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);
console.log('-------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

// 변수의 선언이 먼저 실행 됨
result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);