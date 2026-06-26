/**
 * Super and Override
 */

class Animal{
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class Dog extends Animal {
    bark;

    // 생성자 override
    constructor(name, age, bark) {
        // super: 부모클래스를 나타냄. 그렇기에 생성자가 실행됨.
        super(name, age);
        this.bark = bark;
    }

    sayHello() {
        // 변수값을 불러올 때는 super값을 사용하면 안됨 -> undifined가 나옴. 대신 함수는 실행 가능
        // return `안녕하세요 ${this.name}입니다. 울음소리는 ${this.bark}입니다.`;
        return `${super.sayHello()} 울음소리는 ${this.bark}입니다.`
    }
}

const dog = new Dog("뽀비", 5, '멍멍');
console.log(dog);
console.log(dog.sayHello());