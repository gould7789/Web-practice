// 반복문

// if문
let num = 10;
if (num % 2 == 0) {
    console.log("변수 num에 할당된 숫자는 짝수입니다.");
} else {
    console.log("변수 num에 할당된 숫자는 홀수입니다.")
}

// switch문
let food = "melon";
switch(food) {
    case "melon":
        console.log("fruit");
        break;
    case "apple":
        console.log("fruit");
        break;
    case "banana":
        console.log("fruit");
        break;
    case "carrot":
        console.log("vegetable");
        break;
    default:
        console.log("It's not fruits and vegetables.");
        break;
}