/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-----------------')

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// *을 이용해서 6x6의 정사각형을 출력
let square = '';
let side = 6;

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for..in
 */
const lunch = {
    name : '라면',
    taste : '맛있다',
}

console.log('-----------------');

for (let key in lunch) {
    console.log(key);
}

const menu = ['라면', '김밥', '만두', '떡볶이'];

// key에는 해당 리스트의 인덱스 값들이 들어감
for (let key in menu) {
    console.log(key);
    console.log(`${key}: ${menu[key]}`);
}

/**
 * for..of
 */
// value에 해당 리스트이 값들이 들어감
for (let value of menu) {
    console.log(value);
}

/**
 * while
 */
let number = 0;

while (number < 10) {
    number ++;
}

console.log(number);

/**
 * break
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

/**
 * continue
 */

let number2 = 0;

while (number2 < 10) {
    number2 ++

    if (number2 === 5) {
        continue;
    }

    console.log(number2);
}