/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야할까
 */

function calculate(num) {
    console.log((num * 10 / 2 % 3).toString());
}

calculate(2); 

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고함
 * 
 * 실제 입력하는 값은 argument라고함
 */

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

// default parameter
function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2);

/**
 * 반환받기
 * return 받기
 */

function multiply(x, y) {
    return x * y;
}

const result = multiply(2, 4);
console.log(result); 

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y
}
console.log(multiply2(3, 4));

// body에 한 줄의 코드만 있을 때 간략화 가능
const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 6));

// parameter가 한 개일 때는 ()없이도 가능
const multiply4 = x => x * 2;
console.log(multiply4(2));

// 연속으로 출력 가능
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

// argument keyward
const multiplyTwo = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log('-----------');
console.log(multiplyTwo(4, 5, 6))

// 갯수가 지정되지 않은 argument
const multiplyAll = function(...argument) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8));

// 함수의 즉시 실행 (immediately invoked function)
(function(x, y) {
    console.log(x * y);
})(4, 5)

// instanceof: 왼쪽값이 오른쪽 타입이 맞는지 확인
console.log(multiply instanceof Object);