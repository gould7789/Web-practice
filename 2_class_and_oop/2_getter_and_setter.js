/**
 * Getter and Setter
 */
class Animal {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반화할 때
     * 2) private한 값을 반화할 때
     */
    get nameAndYear() {
        return `${this.name}-${this.age}`;
    }

    /**
     * 1) 값을 새로 저장할 때
     */
    set setName(name) {
        this.name = name;
    }
}

const dog = new Animal('뽀삐', 5);
console.log(dog);
console.log(dog.nameAndYear);

// setter 사용
dog.setName = '굴드';
console.log(dog);

class Animal2 {
    #name; // private를 선언할 때는 #을 붙임
    age;

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const dog2 = new Animal2('가나디', 7);
console.log(dog2);
console.log(dog2.name);

dog2.name = '강아지';
console.log(dog2.name);