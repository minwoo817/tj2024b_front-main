/*
    -for 중첩
    for(){
        for(){
        
        }
    }
*/
// [1] for 중첩
    //i는 3번 반복, j는 5번 반복 => 총 i의 출력횟수 : 3, 총 j의 출력횟수 : 15
    //즉 상위 for문이 1회전마다 하위 for문 전체 회전한다.
/*
    for(let i = 1; i <= 3; i++){
    console.log(i);
    for(let j = 1; j <= 5; j++){
        console.log(`---> ${j}`)
    }
}
*/
//[2] 구구단 2~9단 짜기
/*
let multi = 0
for(let i = 2; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        multi = i * j
        console.log(`구구단 : ${i} * ${j} = ${multi}`)
    }
}
*/
// [3] 별 모양 출력하기, 입력받은 줄 수 만큼
// 예] 5를 입력했을 경우 아래와 같이 5줄의 직각삼각형 모양으로 출력
/*
    *
    **
    ***
    ****
    *****
    줄 패턴 : 1부터 5까지 1씩 증가 반복, 줄바꿈 \n(이스케이프/제어문자)
    별 패턴 : 1부터 현재 줄수 까지 1씩 증가 반복
*/
let num = Number(prompt("줄 수 입력 : "))
let out = '' //출력할 데이터가 갖는 변수
for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){
        out += '*'  // => out = out + '*', 누적합계 : 기존데이터와 연산
    }
    out += '\n' // 줄바꿈, console.log() : 출력 후 줄바꿈 포함
}
console.log(out)
