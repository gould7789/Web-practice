/**
 * Class Keyword
 */
class Animal {
    // javascript에서는 속성을 정의하는 것이 선택사항임
    name;
    age;

    // constructor: 생성자. 만들어두면 여러 객체를 같은 형식으로 생성 가능함
    constructor(name, age) {
        // this: 현재 인스턴스
        this.name = name;
        this.age = age;
    }

    // function이라고 굳이 달아주지 않아도 메서드로 인식함
    sayName() {
        return `안녕하세요. 저는 ${this.name}입니다.`;
    }
}

const dog = new Animal('뽀삐', 5);
console.log(dog)
const cat = new Animal('나비', 2);
console.log(cat)

console.log(dog.name);

console.log(dog.sayName());
console.log(cat.sayName());

console.log(typeof Animal);
console.log(typeof dog);