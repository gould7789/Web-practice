/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}

function levelOne() {
    var numberOne = 40;

    console.log(numberOne);
}

levelOne();

console.log(numberOne);

function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;

        // 가장 가까운 스코프의 변수를 활용함
        console.log(`levelTwo numberTwo: ${numberTwo}`)
        console.log(`lebelTwo numberOne: ${numberOne}`)
    }

    levelTwo();
    console.log(`levelOne numberOne: ${numberOne}`);
}

levelOne();
console.log(numberOne);

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다
 * 
 * Dynamic Scope
 * 실행된 위치가 상위 스코프를 정한다
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo();
}

// functionTwo의 상위 스코프인 글로벌 변수 numberThree에서 가져오게 됨
function functionTwo() {
    console.log(numberThree);
}

functionOne();

var i = 999;

for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope: ${i}`);

i = 999;
// block level scope
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope: ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어냄
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어냄
 */