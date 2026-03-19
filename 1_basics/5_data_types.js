/**
 * Data Types
 * 
 * 여섯개의 Primitive Type
 * 한 개의 오브젝트 타입
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 */

// number 타입
const age = 28;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log('-------------')

const infinity = Infinity;
const uninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof uninfinity);
console.log('-------------')

// string 타입
const code = '코드';
console.log(typeof code);

const dinner = "'밥' 맛있다"
console.log(dinner);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline - \n
 * 2) tap - \n
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다
 */
const lunch = '김밥\n라면';
console.log(lunch);

const smallQutoation = '깁밥\'라면';
console.log(smallQutoation);

const lunch2 = `깁밥 '''.','//'''///
라면`;
console.log(lunch2);

const groupName = '김밥';
console.log(groupName + ' 라면');
console.log(`${groupName} 라면`);
console.log('-------------')

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-------------')

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('-------------')

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때
 * 사용됨
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log('-------------')

/**
 * symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용함
 * 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용
 */
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);
console.log('-------------')

/**
 * object 타입
 */
const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary);
console.log('-------------')

/**
 * array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const dinnerAraay = ['김밥', '라면', '만두'];
console.log(dinnerAraay);

// index
console.log(dinnerAraay[0]);
console.log(dinnerAraay[1]);
console.log(typeof dinnerAraay);
console.log('-------------')

/**
 * static typing - 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다 : C언어
 * 
 * dynamic typing - 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 추론 한다 : Java Script
 */