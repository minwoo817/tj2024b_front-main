/*
    - 반복문과 배열 관계
    1. 배열의 인덱스는 순차적인 순서가 존재한다.
        배열이란? 여러개 요소/값들을 순서대로 나열한 자료의 타입
        인덱스란? 배열 내 저장된 순서 번호
        let 배열변수 = ['유재석', '강호동', '하하']
                index =   0         1       2
                length =  3
    2. 0부터 마지막 인덱스까지 1씩 증가
    3. 마지막 인덱스 구하는 방법? 배열변수.length-1
    4. 배열 순회, 배열 내 모든 요소를 하나씩 호출하는 작업
        for(let index = 0; index <= 배열변수.length -1; index++){
            배열변수[index]
        }
*/
// [1] 배열의 데이터
/*
let fruitbox = ['사과', '포도', '딸기']; // 3개의 문자열을 저장하는 배열 선언 후 'fruitbox'변수에 대입
// - 배열 내 모든 요소를 하나씩 출력하세요.
for(let index = 0; index <= fruitbox.length - 1; index++){
    console.log(fruitbox[index])
}
*/
// [2] 3개의 점수를 입력받아 점수배열에 모두 저장하시오.
// [반복문 없이]
/*
let scorelist = []
let score1 = prompt('점수 1 : ')
scorelist.push(score1);
let score2 = prompt('점수 2 : ')
scorelist.push(score2);
let score3 = prompt('점수 3 : ')
scorelist.push(score3);
*/
// 중복코드 : let score1 = prompt('점수? : '), scorelist.push(score?)
// 중복되지않는코드 : 1 2 3, 패턴 : 1부터 3까지 1씩 증가
// [반복문 코드]
let scorelist = [] // 전역변수 : { } 안에서 선언되지 않는 변수
for(let i = 1; i <= 3; i++){
    // (두번째 반복) 첫번째 반복때 입력한 score 50이 존재할까요?
    // 점수변수는 존재하지 않는다. 50값을 배열에 저장했기 때문에 50은 배열에 저장이 되어있다.
    let score = prompt(`점수${i}`);        // 지역변수? 특정한 { } 안에서 선언된 변수를 지역변수
    scorelist.push(score);                // - { } 밖으로 못나감, } 중괄호가 끝나면 변수는 사라짐(자동삭제)
    // (첫번째 반복) 예] 내가 prompt 함수로 50 입력했다면 score에 50 대입된다. 그리고 score를 배열에 대입했다.
    // 그 후 score변수에 저장된 50은 존재한다
}
// [3] scorelist 배열에 저장된 3개의 모든 점수들을 <li> 마크업에 출력하시오.
// [반복문 없이]
let outHTML = `<ol>` 
outHTML += `<li>${scorelist[0]}</li>` 
outHTML += `<li>${scorelist[1]}</li>` 
outHTML += `<li>${scorelist[2]}</li>` 
outHTML += `</ol>`
document.write(outHTML);
//[반복문 코드] 반복코드 : outHTML += `<li> ${scorelist[0]} </li>
let outHTML2 = `<ol>`
for(let index = 0; index <= scorelist.length - 1; index++){ //index는 0부터 마지막 인덱스까지 1씩 증가 반복
    outHTML2 += `<li> ${scorelist[index]} </li>`
}
outHTML2 += `<ol>`
document.write(outHTML2)
