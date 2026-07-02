function Animal(name, year) {
    this.name = name;
    this.year = year;

    this.cry = function() {
        return `${this.name}이(가) 소리를 냅니다.`;
    }
}

const dog = new Animal('뽀삐', 2024);
console.log(dog);
console.log(dog.cry());

// new를 사용하지 않았을 때
const dog2 = Animal('뽀삐', 2024); // new 키워드 없이 생성자 함수를 만들면 this가 global에 붙음 -> 사용하면 안됨
console.log(dog2);
console.log(global.name) // 자바스크립트 엔진을 node.js에서 실행할 때 필요한 값들을 다 들고있음

// 애로우 함수로는 생성자를 만들 수 없음
const AnimalArrow = (name, year)=>{
    this.name = name;
    this.year = year;
};

const dog3 = new AnimalArrow('뽀삐', 2024);
console.log(dog3);