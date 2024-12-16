// - new Date() 현재 시스템의 날짜/시간 반환 객체 또는 함수
// - new Date(연도, 월, 일) 지정한 연도월일에 해당하는 날짜 객체
console.log(new Date()) 
console.log(new Date().getFullYear())
console.log(new Date().getMonth())
console.log(new Date().getDate())
console.log(new Date().getDay()) //요일 : 0:일 1:월 2:화 3:수 4:목 5:금 6:토
console.log(new Date(2023 , 4 , 20))

// 전역변수 : 특정한 { }안에서 선언되지 않은 변수, 선언이란? 만들기/정의, let, const, function
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;

// + 달력의 일 일정/내용
let contentArray = [
    {cno : 1, content : '학원개강', date : '2024-12-4', color : 'red'},
    {cno : 2, content : '은행업무', date : '2024-12-10', color : 'blue'},
    {cno : 3, content : '친구약속', date : '2024-12-10', color : 'pink'},
    {cno : 4, content : '월급받는날', date : '2024-12-15', color : 'gray'}
]

// [1] 달력 출력함수 , 실행조건 : js가 실행될때, 월 변경이 될때마다
calPrint();
function calPrint(){
    // (1) 상단의 달력 연도/월 표시
        // - 어디에
        let h6 = document.querySelector('#calTop > h6');
        // - 무엇을
        let html = `${year}년 ${month}월`
        // - 출력
        h6.innerHTML = html;
    // (2) 하단의 현재 연도/월의 일 표시
        let calBottom = document.querySelector('#calBottom'); // 어디에
        let html2 = ``; // 무엇을
        // 요일 출력
        html2 += `<div class="week sunday">일</div>
                    <div class="week">월</div>
                    <div class="week">화</div>
                    <div class="week">수</div>
                    <div class="week">목</div>
                    <div class="week">금</div>
                    <div class="week">토</div>`;
        // - 1일 ~ 마지막 일까지 출력
            // (1) 현재 날짜의 마지막 일 구하기, 달력은 1부터 마지막일까지 출력하기 위해서
            let date = new Date(year, month, 0); // 일 자리에 0을 넣으면 지정한 연도과 월에 해당하는 날짜의 말일
            console.log(date);
            let endday = date.getDate();
            // (2) 현재 날짜의 1일의 요일, 1일의 시작위치를 찾기 위해서
            let date2 = new Date(year, month - 1, 1); // - 1 하는 이유 : 컴퓨터는 0을 1월로 취급
            console.log(date2)
            let startweek = date2.getDay();
            console.log(startweek); // 요일
        // + 각 월의 1일 전까지 공백 출력
            for(let blank = 1; blank <= startweek; blank++){
                html2 +=`<div></div>`
            }
            // + 달력의 날짜 출력 + 현재 일정도 같이 출력
            for(let day = 1; day <= endday; day++){
                // day는 1부터 현재 날짜의 마지막일까지 1씩 증가 반복
                
                // 일정 출력
                    // 1. 현재 날짜 구성
                let date3 = `${year}-${month}-${day}`;
                console.log(date3)
                    // 2. 현재 날짜와 등록된 일정날짜와 동일한 일정 찾기/검색
                let planHtml = ''; // for문 밖에 만든 이유 : 동일한 날짜의 2개 이상의 일정이 있을 수 있으므로
                for(let index = 0; index <= contentArray.length - 1; index++){
                    let plan = contentArray[index];
                    if(plan.date == date3){ // 만약 index번째의 일정 객체내 일정이 현재 보고 있는 날짜와 같으면
                        planHtml += `<div style ="background-color : ${plan.color}"> ${plan.content} </div>`
                    }
                }

                //일 출력 + 일정내용도 출력
                html2 += `<div>${day} ${planHtml} </div>`
            }
        calBottom.innerHTML = html2; // 출력
    return; // 함수가 종료되면서 반환되는 값, 값이 없을 경우 return 생략이 가능
}
// [2] 월 변경함수(이전달, 다음달), 실행조건 : [◀]또는[▶] 버튼을 클릭했을때
function monthChange(changeMonth){ // 함수의 매개변수, 리턴값
    console.log(changeMonth)
    // 1. 매개변수에 따른 월 수정
    month += changeMonth;
    // 2. 월은 1월부터 12월까지, 만약에 1보다 미만이면 연도를 -1 12보다 초과이면 연도를 +1    
    if(month < 1){
        year --; 
        month = 12;
    }
    if(month > 12){
        year ++;
        month = 1;
    }
    // - 날짜 변화에 따른 새로고침(출력함수 재실행)
    calPrint();
    return;
}