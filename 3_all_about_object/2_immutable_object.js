/**
 * Immutable Object
 */
const dog = {
    name: '뽀삐',
    year: 2023,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(dog);

// Extensible: 확장이 가능한지 설정 여부 확인
console.log(Object.isExtensible(dog)); // true일 경우 확장 가능
dog['category'] = '말티즈';
console.log(dog); // category가 추가된 것이 확인

Object.preventExtensions(dog); // 확장을 불가능하게 변경
console.log(Object.isExtensible(dog)); 
delete dog['category']; // 삭제는 가능함
console.log(dog);
console.log('=====================================');

// Seal
const dog2 = {
    name: '뭉뭉',
    year: 2018,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(dog2);
console.log(Object.isSealed(dog2)); // Seal 여부 확인. 디폴트로 false
Object.seal(dog2); // seal을 true로 변경

dog2['category'] = '말티즈';
console.log(dog2); // seal이 true일 때는 추가도 삭제도 되지 않음. 에러는 출력 안됨.
console.log('=====================================');

// Freezed: 읽기 외 전부 블가능
const dog3 = {
    name: '사랑이',
    year: 2013,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(dog3)); // 디폴트로 false 상태
Object.freeze(dog3); // true로 변경. 수정 및 삭제를 시도하면 에러를 출력함.