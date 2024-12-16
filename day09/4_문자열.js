/*
    문자열 처리 (기능이 없는 문자 그자체)방법
        1. ' '
        2. " "
        3. ` `
    키워드(문자인데 기능이 있는 문자들)
        let, const, console.log 등 
*/
// console.log(유재석) // 유재석 is not defined
// console.log ==> 문자(미리 정의된/의미/기능이 포함된 문자)
// 유재석 ==> 문자(자바스크립트 회사에서 유재석 미리 정의 X)

// 1. 문자열 처리
console.log('유재석')
console.log("유재석")
console.log(`유재석`)
// 2. ' 작은따옴표, " 큰따옴표 출력
console.log("유재석'반장'")
console.log('유재석"반장"')
console.log(`유재석'반장"`)
// 3. 이스케이프/제어문자, 키보드 엔터 위에 원화기호(백슬래시) \
    //3-1. \n : 줄바꿈
    //3-2. \" : "한개 출력, \"\" -> "2개 출력
    //3-3. \' : '한개 출력, \'\' -> '2개 출력
    //3-4. \\ : \한개 출력, \\\\ -> \2개 출력
    //3-5. \t : 들여쓰기
console.log(`유재석\'반장\'`)
console.log('유재석\n강호동')
console.log('유재석\"강호동')
console.log(`유재석\'강호동`)
console.log('유재석\\강호동')
console.log(`유재석\t강호동`)

// 4. 문자열 (`백틱)템플릿, 문자열 연결
console.log('유재석' + '강호동') //'문자A' + '문자B' 연산/함수 항상 하나의 결과를 낸다 => '문자A문자B'
console.log('유재석' + 40)      //'문자A' + 40 => '문자A40'
console.log('40' + '100')       //40100
let age = 40;
console.log('유재석' + age)     //유재석40
console.log(`유재석${age}강호동`) //`문자A${js코드}문자B' => 유재석40강호동
console.log(`평균 : ${100 + 50} `) // 평균 = 150
// 방법 1 : `문자 문자 문자 ${JS 코드} 문자`
// 방법 2 : `문자 문자 문자` + JS코드 + `문자`
    // JS 학습 목적 : HTML를 조작/제어/이벤트 하기 위해
    //HTML 변수 X 연산 X, 배열 X, 타입 X -->  JS에서 HTML 작성 시 JS 코드와 함쳐서 작성할 수 있음
let 직원명1 = '신동엽'
let 직원명2 = '강호동'
let nameHTML = `<ol> <li> ${직원명1} </li> <li> ${직원명2} </li> </ol>`
document.write(nameHTML) // document.write() : 현재 HTML에 출력하는 함수

//예1 : 입력받은 데이터를 HTML 출력하시오.
    // prompt('알람메시지'), 반환값 : 입력받은 값 1개
// let 결과2 = prompt('[안내문구/알람내용] 데이터 입력해주세요')
//prompt 함수로부터 입력받은 값을 아래 코드에서 재사용
// console.log(결과2)
// let inputHTML = `<h3> 입력받은 데이터 : ${결과2} </h3>`
// document.write(inputHTML)
// ---- 예1
// let 결과1 = 10 + 5 //반환값 : 두 값을 더한 값 1개  
// 10 + 5 결과의 15를 아래 코드에 재사용(연산 결과 저장하는 변수)
// console.log(결과1)

// 예2 : 2명의 사원이름을 입력받아서 HTML(table)형식으로 출력하시오.
//이유 : HTML은 연산 X, 저장 X 등등 없으므로 텍스트 그 자체
//새로운 값/데이터를 입력받아서 데이터 가공(JS) 하기 위해 JS 사용한다.
//순서도(알고리즘), 어떠한 작업의 순서/절차
//html과 css는 절차 X, JS코드는 위에서 아래로 실행
    //1. 1명의 사원이름을 입력받는다.
    //2. 입력받은 사원이름을 변수에 저장한다.
    //3. 1명의 사원이름을 입력받는다.
    //4. 입력받은 사원이름을 변수에 저장한다.
    //5. HTML 형식의 문자로 출력할 변수와 같이 구성한다.
    //6. 구성된 HTML을 HTML 문서에 출력한다.
let 결과1 = prompt('[알람] 데이터를 입력하세요') //prompt 함수 사용하여 입력받은 값 변수에 대입
let 결과2 = prompt('[알람] 데이터를 입력하세요') //prompt 함수 사용하여 입력받은 값 변수에 대입
console.log(결과1, 결과2) 
let inputHTML = `<table> <tr> <th scope="col">번호<th/> <th scope="col">이름<th/> <tr/>
<tr> <td> 1 <td/> <td> ${결과1} <td/> <tr/>
<tr> <td> 2 <td/> <td>${결과2} <td/> <tr/> <table/>`
document.write(inputHTML)

