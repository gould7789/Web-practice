/**
 * try...catch
 * 
 * 1) 발생시킬 때 -> 던진다고 함 (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 함 (catch)
 */

function runner(){
    try {
        console.log('Hello');

    throw new Error('오류 발생!'); // 에러가 발생하게 되면 throw를 통해서 catch로 이동

    console.log('Hungry');

    } catch(e) {
        console.log('---catch---');
        console.log(e)
    } finally {
        // try에서 에러의 실행여부와 상관없이 무조건 실행
        console.log('---finally---')
    }
}
runner();