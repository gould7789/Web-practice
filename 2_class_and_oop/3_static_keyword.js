/**
 * Static Keyword
 */
class Animal {
    name;
    age;
    static category = '강아지'; // static을 사용하면 클래스에 자체에 귀속됨

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static returnCategory() {
        return '강아지';
    }
}

const dog = new Animal('뽀삐', 5);
console.log(dog);

console.log(Animal.category);
console.log(Animal.returnCategory());

/**
 * factory constructor
 */

class Animal2 {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 사전에 타입을 지정해둠으로서 객체를 만들 때 어떤 파라미터를 넣어야할지 명시 가능
    static fromObject(object) {
        return new Animal2(
            object.name,
            object.age
        );
    }

    static fromList(list) {
        return new Animal2(
            list[0],
            list[1]
        );
    }
}

const cat = Animal2.fromObject({
    name: '나비',
    age: 4
});
console.log(cat);

const bird = Animal2.fromList([
    '블루',
    10
]);
console.log(bird);