/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가됨. 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정됨.
 */
const testFunction = function() {
    return this;
}

// 실제 this는 글로벌과 매핑이 됨
console.log(testFunction());
console.log(testFunction() === global);

const dog = {
    name: '뽀삐',
    year: 2024,
    sayHello: function() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    },
}

console.log(dog.sayHello());

function Animal(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

const dog2 = new Animal('콩이', 2019);
console.log(dog2.sayHello());

Animal.prototype.dance = function() {

    // 이 경우 this는 무조건 글로벌에 매핑됨
    function dance2() {
        return `${this.name}이 춤을 춥니다.`
    }
    
    return dance2()
}

// 출력이 undefined로 나옴
console.log(dog2.dance());

/**
 * this 키워드가 어떤 것을 가르키는지
 * 
 * 1) 일반 함수로 호출할 때는 this가 최상위 객체 (global 또는 window)를 가리킴
 * 2) 메서드로 호출할 때는 호출된 객체를 가리킴
 * 3) new 키워드를 사용해서 객체를 생성했을 때는 객체를 가리킴
 */

/**
 * this를 바인딩 하는 방법
 * 1. apply()
 * 2. call()
 * 3. bind()
 */

// 이 함수의 this가 dog3에 매핑되게 하고 싶다면
function returnName() {
    return this.name;
}

const dog3 = {
    name: '빵이',
}

// returnName을 dog3에 바인딩해서 콜하겠다는 의미
console.log(returnName.call(dog3));
console.log(returnName.apply(dog3));

/**
 * 1. call() -> 컴마를 기반으로 argument를 순서대로 넘겨줌
 * 2. apply() -> argument를 리스트로 입력해야함
 */
function multiply(x, y, z) {
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(dog3, 3, 4, 5))
console.log(multiply.apply(dog3, [3, 4, 5]))

/**
 * bind()
 */
const lateFunc = multiply.bind(dog3, 3, 4, 5);
console.log(lateFunc());