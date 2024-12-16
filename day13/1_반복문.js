/*
    - 학생들의 점수 출력하는 구현
        1. 학생이름배열
            let nameArray = ['유재석', '강호동', '신동엽']
        2. 학생점수배열
            let score = [92, 86, 72]
        3. 아래와 출력, 100점 만점이라고 했을 때 점수를 ● 표기, 나머지 점수 ○
            이름        점수 시각화(<div> <span> 내용 </span> </div> 사용 or <table> <tr> <td> 사용)
            유재석      ● * 92 + ○ * 8
            강호동      ● * 86 + ○ * 14
            신동엽      ● * 72 + ○ * 28
*/
// - 입력 x / 저장 o
// (1) 지문에서 주어진 자료 준비
let nameArray = ['유재석', '강호동', '신동엽']
let scores = [92, 86, 72]
// (2) 처리
    // 배열 내 이름/요소들을 순차적으로 출력 --> 배열 순회

//출력할 HTML(문자열) 구성
let outHTML = `<div> <span> 이름 </span> </div>`
    // 1. nameArray 배열 순회
for(let index = 0; index < nameArray.length; index++){ // index는 0부터 마지막 인덱스까지 1씩 증가
    // 2. index 번쨰 요소를 출력 // console.log(nameArray[index])
    // 4. 점수 출력, 현재 index 번째의 점수 출력 // console.log(scores[index])
    
    // 3. index 번째의 요소를 HTML(문자열) 구성
    outHTML += `<div> <span> ${nameArray[index]} </span> `
    // 4. 점수 출력, 현재 index 번째의 점수 출력 // console.log(scores[index])
    
    // 5. 점수는 1부터 현재 index 번쨰의 점수까지 반복
    let pointHTML = `` // 점수를 도형으로 구성한 문자열을 저장하는 변수
    for(let point = 1; point <= 100; point++){
        if(point <= scores[index]){ // 만약에 점수가 index번째 점수 이하이면 ●
            pointHTML += `●`
        }
        else {      // 내 점수보다 커지면 ○
            pointHTML += `○`
        } 
    }
    // 6. 구성한 점수 html을 이름과 연결하기
    outHTML += `<span> ${ pointHTML } </span> </div>`

}   
// (3) 출력, console[탭] 출력시 console.log / HTML 출력 시 document.write()
document.write(outHTML)
