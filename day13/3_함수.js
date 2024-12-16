// 매개변수 : parameter 
// 인자값/인수 : 들어갈 인, 인자값 - 변수

// (1) 함수 만들기/정의한다
// [1] 매개변수 x, 반환값 x
function fun1(){
    console.log('fun1 execute')
}
// [2] 매개변수 o, 반환값 x , console.log(), document.write() 등
function fun2(x, y){
    console.log(`fun2 execute ${x+y}`)
}
// [3] 매개변수 o, 반환값 o prompt() 등
function fun3(x, y){
     console.log(`fun3 execute`)
    let result = x + y;
    return result;
}
// [4] 매개변수 x, 반환값 o
function fun4(){
    console.log(`fun4 execute`);
    return 10;
}
// (2) 함수 호출
fun1() // 인자값도 없고 리턴값도 없는 함수 호출/사용
fun2(1, 2) // 인자값이 1과 2가 있고 리턴값은 없는 함수 호출/사용
fun3(1, 2) // 인자값이 1과 2가 있고 리턴값은 있는 함수 호출/사용
let result= fun3(1, 2) // 함수 결과를 다음 코드에서 사용할 예정이라면 변수에 대입
let result4 = fun4() // 인자값이 없고 리턴값만 있는 함수 호출/사용

/*
    간단한 과제
        1. 함수 표현하는 시각화
        2. 믹서기함수/자판기함수 빼고 생활 속 함수 구조를 닮은 구조 시각화(매개변수/리턴값)
        
*/