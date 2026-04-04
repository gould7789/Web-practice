/**
 * Array functions
 */
let arr = [1, 2, 3, 4, 5];

console.log(arr);

// push: 배열의 끝에 요소를 추가하는 함수
arr.push(6);
console.log(arr);

// pop: 배열의 끝에서 요소를 제거하는 함수
arr.pop();
console.log(arr);

// unshift: 배열의 시작에 요소를 추가하는 함수
arr.unshift(0);
console.log(arr);

// shift: 배열의 시작에서 요소를 제거하는 함수
arr.shift();
console.log(arr);

// indexOf: 배열에서 특정 요소의 인덱스를 반환하는 함수
console.log(arr.indexOf(3)); // 2

// includes: 배열에 특정 요소가 포함되어 있는지 확인하는 함수
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false

// length: 배열의 길이를 반환하는 속성
console.log(arr.length); // 5

// slice: 배열의 일부분을 추출하여 새로운 배열을 반환하는 함수
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]

// splice: 배열에서 요소를 제거하거나 교체하는 함수
arr.splice(2, 1); // 인덱스 2에서 1개의 요소 제거
console.log(arr); // [1, 2, 4, 5]

// concat: 두 개 이상의 배열을 합치는 함수
let arr2 = [6, 7, 8];
let combinedArr = arr.concat(arr2);
console.log(combinedArr); // [1, 2, 4, 5, 6, 7, 8]

// join: 배열의 모든 요소를 문자열로 결합하는 함수
let joinedStr = arr.join('-');
console.log(joinedStr); // "1-2-4-5"

// reverse: 배열의 요소 순서를 반대로 뒤집는 함수
arr.reverse();
console.log(arr); // [5, 4, 2, 1]

// sort: 배열의 요소를 정렬하는 함수
arr.sort((a, b) => a - b); // 오름차순 정렬
console.log(arr); // [1, 2, 4, 5]

// spread operator: 배열을 개별 요소로 분리하는 연산자
let newArr = [...arr, 6, 7];
console.log(newArr); // [1, 2, 4, 5, 6, 7]

// map: 배열의 각 요소에 대해 함수를 적용하여 새로운 배열을 반환하는 함수
let mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // [2, 4, 8, 10]

// filter: 배열의 각 요소에 대해 조건을 만족하는 요소만을 포함하는 새로운 배열을 반환하는 함수
let filteredArr = arr.filter(x => x > 2);
console.log(filteredArr); // [4, 5]

// reduce: 배열의 각 요소에 대해 함수를 적용하여 단일 값을 반환하는 함수
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 12

// find: 배열의 각 요소에 대해 조건을 만족하는 첫 번째 요소를 반환하는 함수
let found = arr.find(x => x > 2);
console.log(found); // 4

// findIndex: 배열의 각 요소에 대해 조건을 만족하는 첫 번째 요소의 인덱스를 반환하는 함수
let foundIndex = arr.findIndex(x => x > 2);
console.log(foundIndex); // 2

// some: 배열의 각 요소에 대해 조건을 만족하는 요소가 하나라도 있는지 확인하는 함수
let hasGreaterThan2 = arr.some(x => x > 2);
console.log(hasGreaterThan2); // true

// every: 배열의 각 요소에 대해 조건을 만족하는 요소가 모두 있는지 확인하는 함수
let allGreaterThan0 = arr.every(x => x > 0);
console.log(allGreaterThan0); // true

// reduce(): 배열의 각 요소에 대해 함수를 적용하여 단일 값을 반환하는 함수
let product = arr.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 40