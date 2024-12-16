/*
입력 : prompt(), 출력 : console.log()
if vs if ~ else if
- 다수 조건의 다수 결과 vs 다수 조건의 1개 결과
if if if -> 각 if 별 여러개 조건문으로 인식
else if ~ else if : 하나의 조건문으로 인식

1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.

2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.

3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.

4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오. 

5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.

6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.

7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력 
아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.

8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.

9. 가위바위보 게임 
조건1 : 가위 0 , 바위 1 , 보 2 입니다.
조건2 : 플레이어 2 명 입니다.
실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
출력조건 : 
플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
비겼을경우 '무승부' 출력 하시오.

10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
    하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오.
    빈좌석 : 'X'  사용중인좌석 : 'O'

11 : 주차장 차량 검색대
    조건1 : let carArray = [ '250어7142' , '142가7415' ]  : 차량번호
    조건2 : let locationArray = [ 'A1' , 'B3' ]           : 주차위치
    조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
    조건4 : 차량번호 입력받아 내 차량 위치 찾기 
*/
/* 1
let score1 = Number(prompt("첫번째 점수 입력"))
let score2 = Number(prompt("두번째 점수 입력"))
let score3 = Number(prompt("세번째 점수 입력"))
let total = score1 + score2 + score3
if(total >= 90) {
    console.log(`성공`)
}
else {
    console.log(`실패`)
}
    */
/* 2
let num1 = Number(prompt("첫번째 정수 입력"))
let num2 = Number(prompt("두번째 정수 입력"))
if(num1 > num2) {
    console.log(num1)
}
else if(num2 > num1) {
    console.log(num2)
}
else {
    console.log(`error`)
}
*/
/* 3
let num3 = Number(prompt("첫번째 정수 입력"))
let num4 = Number(prompt("두번째 정수 입력"))
let num5 = Number(prompt("세번째 정수 입력"))

if(num3 > num4 && num3 > num5) {
    console.log(num3)
}
else if(num4 > num3 && num4 > num5) {
    console.log(num4)
}
else {
    console.log(num5)
}
*/
/* 4
let num6 = Number(prompt("첫번째 정수 입력"))
let num7 = Number(prompt("두번째 정수 입력"))
let num8 = Number(prompt("세번째 정수 입력"))

const arr = [num6, num7, num8]
arr.sort(function(a, b) {
    return a - b;       // a-b : 오름차순, b-a : 내림차순
})
console.log(`${arr}`)
*/
/*
let num6 = Number(prompt("첫번째 정수 입력"))
let num7 = Number(prompt("두번째 정수 입력"))
let num8 = Number(prompt("세번째 정수 입력"))
if(num6 < num7) { // > : 오름차순 < : 내림차순
    let temp = num6
    num6 = num7
    num7 = temp
}
if(num6 < num8) {
    let temp = num6
    num6 = num8
    num8 = temp
}
if(num7 < num8) {
    let temp = num7
    num7 = num8
    num8 = temp
}
console.log(`결과 : ${num6} ${num7} ${num8}`)
// 다수의 데이터를 비교할때는 if가 많아진다 --> 반복문 활용
*/
/* 5
let score4 = Number(prompt("점수 입력"))
if(score4 >= 90) {
    console.log(`A등급`)
}
else if(score4 >= 80) {
    console.log(`B등급`)
}
else if(score4 >= 70) {
    console.log(`C등급`)
}
else {
    console.log(`재시험`)
}
*/
/* 6 
let id = prompt("아이디를 입력하세요")
let pw = prompt("비밀번호를 입력하세요")
if(id == 'admin' && pw == '1234') {
    console.log(`로그인 성공`)
}
else {
    console.log(`로그인 실패`)
}
*/
/* 7
let fruitList = ['바나나', '사과']
let fruit = prompt("하나의 과일 입력")

if(fruit == fruitList[0] | fruit == fruitList[1]) {
    console.log('이미 존재하는 과일입니다')
}
else{
    fruitList.push(fruit)
    console.log(`${fruitList}`)
}
*/
/*
let fruitList = ['바나나', '사과']
let fruit = prompt("하나의 과일 입력")
let exist = fruitList.indexOf(fruit) //indexOf(`찾을 값`) : 지정한 찾을값이 배열 내 존재하면 찾은 인덱스 반환 없으면 -1 반환
if(exist != -1) {       //만약에 존재여부가 -1이 아니면(존재하지않으면) 배열 내 입력받은 과일값 추가
    fruitList.push(fruit)   //push(새로운 값) : 지정한 새로운 값을 배열 내 마지막 인덱스 요소의 추가
}
else{
    console.log(`이미 존재하는 과일입니다`)
}
*/
/* 8
let resident = prompt("주민등록번호 입력")
let first = resident.charAt(7)
if(first == 1 | first == 3) {
    console.log(`blue`)
}
else if(first == 2 | first == 4) {
    console.log(`red`)
}
else {
    console.log(`사람 아님`)
}
// 만약에 입력받은 데이터의(000817-1234567) 성별의 자릿수 : 8번째 자리
// 문자열은 " ", ' ', ` `으로 감싼 자료
// 문자를 여러개 저장하면 문자 배열 --> 문자열, C언어는 문자열을 배열로 만들기
// JS는 문자열을 배열로 취급하기 때문에 배열 함수를 사용할 수 있다.(인덱스 사용 가능)
*/
/*
let resident = prompt("주민등록번호 입력")
let colorx = 'black'
console.log(resident[7])
if(resident[7] == 1 || resident[7] == 3){
    colorx = 'blue'
}
else {
    colorx = 'red'
}
console.log(`결과 : ${colorx}`)
// 응용 
let outHTML = `<h3 style = 'color : ${colorx}'> ${resident} </h3>`
document.write{outHTML}
*/
/* 9
let scissors = '0'
let rock = '1'
let paper = '2'
let player1 = prompt("가위 0, 바위 1, 보 2입니다. 가위바위보 중에 하나 입력하세요")
let player2 = prompt("가위 0, 바위 1, 보 2입니다. 가위바위보 중에 하나 입력하세요")
if((player1 == '0' && player2 == '2') || (player1 == '1'&& player2 == '0') || (player1 == '2' && player2 =='1')) {
    console.log(`플레이어1 승리`)
}
else if(player1 == player2) {
    console.log(`무승부`)
}
else {
    console.log(`플레이어2 승리`)
}
//계산식 패턴
1. 두 수가 같으면 무승부 p1 == p2
2. p1 == (p2+1)%3 나머지가 p1과 같으면 p1 승리
3. 그 외에는 p2 승리
*/
/* 10
let sheetList = ['O', 'X', 'O']
let sheet1 = prompt("좌석1, 좌석2, 좌석3 중에 선택하세요")
if(sheetList[sheet1 - 1] == 'O') {      //-1 하는 이유 : 배열 길이(데이터 수)는 1~3, 인덱스는 0~2
    console.log(`예약 불가`)
}
else {
    console.log(`예약 성공`)
    sheetList[sheet1 - 1] = 'O' // 예약 성공 시 입력받은 좌석에 값 변경
}
*/
/*
let carArray = [ '250어7142' , '142가7415' , '25하1234']
let locationArray = [ 'A1' , 'B3', 'C2' ]
let carnumber = prompt("차량 번호 입력하세요")
let exists = carArray.indexOf(carnumber) //.indexOf(찾을 데이터) : 존재하면 인덱스 반환, 없으면 -1
if(exists == -1){ //-1이면 검색된 차량번호가 없다
    console.log('입력한 차량번호는 주차 내역이 없습니다.')
}
else { //-1이 아니면 차량번호가 존재한다.
    console.log(`입력한 차량번호의 주차 위치 : ${locationArray[exists]}`)
}
*/
// 응용 : 서로 다른 속성의 값들을 하나로 표현하는 방법
// 1. CSV(, 쉼표된 텍스트) : '250어7142, A1'
// 2. 객체 : {차량번호 : '250어7142', 위치 : 'A1'}
