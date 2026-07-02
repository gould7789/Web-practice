/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만, 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티(getter, setter)
 */

const dog = {
    name: '뽀비',
    age: 5,
};

/**
 * 1. value - 실제 프로퍼티의 값
 * 2. writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정 할 수 없음
 * 3. enumerable - 열거가 가능한지 여부. for 루프 등을 사용 할 수 있으면 true를 반환
 * 4. configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능함
 */
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));
console.log(Object.getOwnPropertyDescriptor(dog, 'age'));
console.log(Object.getOwnPropertyDescriptors(dog));

const dog2 = {
    name: '뭉이',
    year: 2023,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(dog2);
console.log(dog2.age);
dog2.age = 32;
console.log(dog2.age);
console.log(dog2.year);

console.log(Object.getOwnPropertyDescriptors(dog2, 'age'));

// 키를 추가하며 원하는대로 어트리뷰트를 정의 가능
Object.defineProperty(dog2, 'weight', {
    value: 15,
    // 따로 정의를 하지 않으면 디폴트로 false가 들어감
    writable: false,
    enumerable: true,
    configurable: true,
});
console.log(dog2);
console.log(Object.getOwnPropertyDescriptor(dog2, 'weight'));

// Enumerable
console.log(Object.keys(dog2));
for(let key in dog2) {
    console.log(key);
}

Object.defineProperty(dog2, 'name', {
    enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(dog2, 'name'));

console.log('----------');
console.log(Object.keys(dog2));
for(let key in dog2){
    console.log(key);
}

// Configurable
Object.defineProperty(dog2, 'weight', {
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(dog2, 'weight'));