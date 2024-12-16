
// 개발자도구(F12) console탭 출력 함수, console.log()
// -HTML에서 알람창으로 input[입력] 함수, pronpt() : HTML 알람창에서 입력받은(문자-String)값 반환 함수
/*
    연산자 : 연산할 때 사용되는 기호/문자
        1. 산술연산자 : 결과 --> 하나의 (숫자)연산결과를 값으로 반환
            + 더하기, - 빼기, * 곱하기, / 나누기, % 나머지, parseInt() : 결과값 정수로 반환
        2. 연결연산자
            + 연결
        3. 비교연산자 : 결과 --> 하나의 연산결과를 (논리-참 true/거짓 false)값으로 반환
            > 초과/크다
            >= 이상/크거나 같다
            < 미만/작다
            <= 이하/작거나 같다
            == (값)같다    === (값/타입) 같다      10 == "10"  true, 10 === "10"  false
            != (값)같지 않다   !== (값/타입) 같지 않다
        4. 관계연산자 : 결과 -> 하나의 연산결과를 (논리-참 true/거짓 false)값으로 반환
            && AND(이면서, 면서, 이고, 그리고) 
            || OR(이거나, 거나, 하나라도, 또는)
            ! NOT(부정, 반대, !true -> false, !false -> true)

        5. 대입연산자
            = 대입, 오른쪽 데이터를 왼쪽에 대입/넣는다
            복합대입연산자
            +=, 오른쪽 데이터를 왼쪽 변수 데이터와 연산 결과를 왼쪽 변수에 대입
                일반 예] let 정수 = 10, 정수 = 정수 + 3, 정수(13)
                복합 연산 예] let 정수 = 10, 정수 += 3, 정수(13)
            -=, *=, /=, %=    
        6. 증(가)감(소)연산자, 변수와 같이 사용, 1씩 증가/감소 =[배열]인덱스
            ++ 1증가, -- 1감소
            변수++ : 후위증가, ++변수 : 선위증가
            변수-- : 후위감소, --변수 : 선위감소
                일반 예] let 정수 = 10, 정수 = 정수 + 1, 정수(11)
                복합 연산 예] let 정수 = 10, 정수 += 1, 정수(11)
                증감 연산 예] let 정수 = 10, 정수++, 정수(11)
            주의할 점 : 선위/후위 증가/감소 기준이 명령어 하나의 단위 ;
                console.log(정수++); 후위증가라서 출력 후 증가 출력값 : 10
                console.log(++정수); 선위증가라서 증가 후 출력 출력값 : 11
        7. 삼항연산자, true와 false 대신 다른 코드로 변환, 복잡한 조건문 IF 조건문
            1. 조건문 ? 참(true): 거짓(false)
            let 점수 = 50 , 점수 > 90 ? '합격' : '불합격' 
            2. 조건문1 ? 참1 : 조건문2 ? 참2 : 거짓 
            let 점수 = 50, 점수 > 90 ? '합격' : 점수 > 70 ? '재시험' : 탈락
    
    문자열 타입 ---> 숫자 타입 변환하는 방법
        1. 곱셈연산 이용하는 방법, 문자 "10" -> 숫자 10으로 변환
            "10" * 1 => 10
        2. 숫자 변환 함수 Number(), 숫자 입력받기 : Number(prompt()), Number()는 정수, 실수 모두 반환 가능
            Number("10") => 10
    숫자 타입 ---> 문자열 타입 변환하는 방법
        1. 연결연산 이용한 방법, 숫자 10 -> 문자 "10"으로 변환
            10 + '' : '10'
        2. 문자로 변환 함수 String()
            String(10) => "10"
    타입 변환이 필요한 이유 : 프론트엔드(HTML/CSS/JS) <--통신(HTTP)--> 백엔드(JAVA/DB)
    다형성 : 다양한 형태를 가지는 성질, 데이터 타입이 변환
*/
//1. 산술연산자
/*
console.log(10 + 3) // 13
console.log(10 - 3) // 7
console.log(10 * 3) // 30
console.log(10 / 3) // 3.3333
console.log(10 % 3) // 1
console.log(parseInt(10 / 3)) // 3
*/
//2. 연결연산자
// console.log(`점수 : ` + 10) //점수 : 10 -->'점수 :' 문자와 10 숫자가 연결되면 문자가 된다.

// [지문1] prompt 함수로 국어, 영어, 수학 점수를 각 입력받아서 각 변수에 저장하고 총점과 평균을 계산하여 console탭에 출력하시오.
/*
let 국어 = prompt(`국어 점수 입력하세요`) //prompt함수로 데이터를 입력받아 변수에 저장
let 수학 = prompt(`영어 점수 입력하세요`) //prompt함수로 데이터를 입력받아 변수에 저장
let 영어 = prompt(`수학 점수 입력하세요`) //prompt함수로 데이터를 입력받아 변수에 저장
let 총점 = 국어 * 1 + 수학 * 1+ 영어 *1
let 평균 = 총점 * 1 / 3
console.log(`총점 : ${총점}, 평균 : ${평균}`)          //`백틱 템플릿 : `문자${변수값 호출}문자`
*/
// [지문2] prompt 함수로 반지름을 입력받아서 원넓이(반지름*반지름*3.14) 계산하여 console 탭에 출력
/*
let 반지름 = prompt(`반지름 입력하세요`)
let 원넓이 = 반지름 * 1 * 반지름 * 1 * 3.14
console.log(`반지름 : ${원넓이}`)
*/
// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤 실수의 값의 비율% 계산하여 console 탭에 출력
/*
let 실수1 = parseFloat(prompt(`첫번째 실수 입력`))      // Number() 사용 가능
let 실수2 = parseFloat(prompt(`두번째 실수 입력`))      // Number() 사용 가능
let 비율 = (실수1 / 실수2) * 100        // 연산처리 % , 1 : 100%, 0.1 : 10%, 0.01 : 1%
console.log(`비율 : ${비율}%`)          //출력
*/
// 3. 비교연산자
/*
console.log(10 > 3)     // true
console.log(10 >= 3)    // true
console.log(10 < 3)     // false
console.log(10 <= 3)    // false
console.log(10 == 3)    // false
console.log(10 != 3)    // true
console.log(10 === "10") // false
console.log(10 !== "10") // true
*/
// 4. 관계연산자
/*
console.log(10 > 3 && 20 > 10) // true
console.log(10 > 3 && 20 > 30) // false
console.log(10 > 3 || 20 > 10) // true
console.log(10 > 3 || 20 > 30) // true
console.log(!(10 > 3))         // false
*/
// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false로 console 탭에 출력
/*
let num1 = Number(prompt("정수를 입력하세요"))
console.log(num1 % 2 == 1)
*/
// [지문5] prompt 함수로 정수를 입력받아 값이 7의 배수이면 true / 아니면 false 출력
/*
let num2 = Number(prompt("정수를 입력하세요"))
console.log(num2 % 7 == 0)
*/
// [지문6] prompt 함수로 아이디와 비밀번호를 입력받아서 아아디가 'admin'이고 비밀번호가 1234와 일치하면 true / 아니면 false 출력
/*
let id = prompt("아이디를 입력하세요")
let pw = prompt("비밀번호를 입력하세요")
console.log(id == 'admin' && pw == '1234')
// [지문7] prompt 함수로 정수를 입력받은 값이 홀수이면서 7 배수이면 true / 아니면 false 출력
let num3 = Number(prompt("정수를 입력하세요"))
console.log(num3 % 2 == 1 && num3 % 7 == 0)
// [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 출력하시오.
// 몫 구하기 : parseInt(나누기 결과)
let money = Number(prompt("십만원 단위 금액 입력하세요"))
console.log(`십만원 : ${parseInt(money / 100000)}장 만원 : ${parseInt(money % 100000 / 10000)}장 천원 : ${parseInt(money % 10000 / 1000)}장 백원 : ${parseInt(money % 1000 / 100)}개 십원 : ${parseInt(money % 100 / 10)}개`)
*/
// ex) 만원권 단위 구하기 --> 금액 = 금액 - (십만원권 * 100000) -- 금액에서 10만원권 제외
    //1. 금액 - (십만원권 * 100000)
    //2. 345678 - (십만원권 * 100000)
    //3. 345678 - (3 * 100000)
    //4. 345678 - (300000)
    //5. 56789
    //6. 금액(345678) = 56789, * 변수 수정
/* let 변수상자 = 3
let 결과상자 = 변수상자 + 2 // 3 + 2 = 5
console.log(변수상자) // 3
console.log(결과상자) // 5
//변수값 호출과 변수값 수정은 다르다*/

// 5. (복합대입)연산자
/*
10; //리터럴 10
let 변수 = 10; //리터럴 10을 변수에 대입
변수 += 3; console.log(변수) // 13
변수 -= 3; console.log(변수) // 10
변수 *= 2; console.log(변수) // 20

// 6. 증(가)감(소)연산자
let age = 40; 
console.log(age++); //후위증가, 1. 출력 2. 증가 => 출력 후 증가 // 40
console.log(age);   // 41
console.log(++age); // 선위증가, 1. 증가 2. 출력 => 증가 후 출력 // 42
console.log(age--); // 후위감소, 1. 출력 2. 감소 => 출력 후 감소 //42
console.log(age); // 41
console.log(--age); // 선위감소, 1. 감소 2. 출겨 => 감소 후 출력 // 40
age ++; // ;(연산자 우선순위는 여러개 연산 또는 코드(함수)가 존재했을 때 필요)

//7. 삼항연산자, 조건 ? 참 : 거짓 / [중첩] 조건1 ? 참1 : 조건2 ? 참2 :거짓
let 점수 = 80;
//만약에 점수가 80점 이상이면 true 대신 '합격' 문자 표현, 아니면 false 대신 '불합격' 문자 표현
let 결과1 = 점수 >= 80 ? '합격' : '불합격';
console.log(`결과 : ${결과1}`)
let 결과2 = 점수 >=80 ? '합격' : 점수 >= 60 ? '재시험' : '불합격'
console.log(`결과 : ${결과2}`)
*/
//[지문9] 1차점수와 2차점수 prompt 함수로 각 입력받아서 총점이 150점 이상이면 합격 아니면 불합격 html <h3>에 표시하시오.
/*
let score1 = Number(prompt("1차 점수를 입력하세요"))
let score2 = Number(prompt("2차 점수를 입력하세요"))
let total = score1 + score2;
let outHTML = `<h3> 총점은 ${total >= 150 ? '합격' : '불합격'} </h3>`
document.write(outHTML)
*/
//[지문10] 두 사람의 이름을 prompt 함수로 각 입력받아서 만일 이름이 '유재석'이면 뒤에(방장)이라고 이름 뒤에 붙이고 아니면 생략 HTML의 <ol>에 표시하시오.
let name1 = prompt("첫번째 이름을 입력하세요")
let name2 = prompt("두번째 이름을 입력하세요")
//만약에 name1 변수값이 '유재석'이면 name1 값 뒤에 (방장)붙이고 아니면 그대로 name1변수 값을 수정
name1 = name1 == '유재석' ? `${name1}(방장)` : name1
name2 = name2 == '유재석' ? `${name2}(방장)` : name2
let outHTML = `<ol> <li>${name1}</li> <li>${name2}</li> </ol>`
document.write(outHTML)