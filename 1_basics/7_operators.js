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

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
// 10 > 0: 조건, ?: 앞의 조건이 참인지 거짓인지 판별
// true면 '10이 0보다 크다' 출력 false라면 '10이 0보자 작다' 출력. :로 구분
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보자 작다');
console.log('-------------');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true여야 true를 반환한다
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// ||는 하나만 treu여도 true를 반환한다
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측값 반환
 * &&를 사용했을 때 좌측이 false면 좌측값 반환
 * ||를 사용했을 때 좌측이 true면 좌측값 반환
 * ||를 사용했을 때 좌측이 false면 우측값 반환
 */
console.log('-------------');

console.log(true || '점심');
console.log(false || '저녁');
console.log(false && '점심');
console.log(true && '저녁');
console.log(true && true && '아침');

/**
 * 지수 연산자
 */
console.log(2**2);
console.log(10**3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '아침식사';
console.log(name);

name = name ?? '저녁식사';
console.log(name);

let name2;
name2 ??= '점심식사';
console.log(name2);
