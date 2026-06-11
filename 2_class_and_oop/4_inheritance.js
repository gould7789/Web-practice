/**
 * Inheritance
 */

class Animal {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    cry() {
        return `${this.name} 울음소리.`
    }
}

class Dog extends Animal {
    greet() {
        return '나는 강아지.';
    }
}

class Cat extends Animal {
    hello() {
        return '안녕. 고양이.';
    }
}

// Dog 클래스는 Animal 클래스에서 상속을 받았기 때문에, 생성자도 사용가능
const dog = new Dog('뽀삐', 5);
console.log(dog);
console.log(dog.greet());
console.log(dog.cry());

const cat = new Cat('나비', 3);
console.log(cat.cry());

// 해당 객체가, 해당 클래스의 객체가 맞는지 확인
console.log(dog instanceof Animal);