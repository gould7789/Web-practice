// 자바스크립트의 한 줄 주석 처리
/*
여러 줄 주석 처리
 */

// 연결된 html 파일에 내용을 추가 하고 싶을 때
// 1. id 가 title인 요소를 선택
const titleElement = document.querySelector("#title");

// // 2. 그 안에 글자를 넣음
titleElement.textContent = "안녕하세요"

// 변수
// let: 식별자가 중복될 수 없는 변수 키워드
let num = 10 + 20;

console.log(num); // 화면에는 안 보이지만 콘솔 창에 기록됨

// 상수
// const: 변수의 재할당이 안되는 키워드
const c_num = 10;
// num = 30; <- 재할당 불가능

// 탬플릿 문자열
// 백틱으로 문자열을 정의하는 방법
let string = `문자열을 큰따옴표(")나
작은 따옴표(')로 감싸면 됩니다.`;
console.log(string)

// ${} 문법을 이용해 문자열에 변수 또는 식을 넣을 수 있음
let dan = 3;
let gugu = 8;
let string2 = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;
console.log(string2)

// 객체 리터럴
let studentScore = {
    koreanScore : 80,
    englishScore : 70,
    mathScore : 90,
    scienceScore : 60
};
console.log(studentScore.koreanScore);
console.log(studentScore['englishScore']);