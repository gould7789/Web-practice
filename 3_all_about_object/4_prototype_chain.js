/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
console.log(testObj.__proto__);

function Animal(name, year) {
    this.name = name;
    this.year = year;
}

console.log(Animal.prototype);
console.dir(Animal.prototype, {
    showHidden: true,
});

// circular reference: 서로가 서로를 참조하는 관계
console.log(Animal.prototype.constructor === Animal);
console.log(Animal.prototype.constructor === Animal.prototype);

const dog = new Animal('뽀삐', 2023);
console.log(dog.__proto__);
console.log(dog.__proto__ === Animal.prototype);

console.log(testObj.__proto__ === Object.prototype);

// 결국 Animal 타입은 Object 타입을 부모로 가지게 된다
console.log(Animal.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

function Animal2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name}이(가) 인사를 합니다.` ;
    }
}

const dog2 = new Animal2('뽀삐', 2024);
const cat = new Animal2('나비', 2019);

console.log(dog2.sayHello());
console.log(cat.sayHello());
console.log(dog2.sayHello === cat.sayHello);
