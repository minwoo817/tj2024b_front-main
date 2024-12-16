/*
    주제 : TODOLIST 구현 하기.
    개발순서
        1. 구현할 화면을 스케치(프로토타입) 작성
        2. 구성한 화면을 HTMl과 CSS로 샘플 작성

        3. (JS) 배열타입과 객체타입을 이용한 메모리 구성
            할일코드    할일내용    할일상태
            1           수업듣기    true
            2           밥먹기      false
            - 할일 코드 : 할일 내용과 할일 상태는 중복이 존재하므로 식별자 역할 못한다.
                - 식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별되어야 한다.
            - 할일상태 : 할일상태는 '완료' = 1/true 또는 '미완료'=0/false로 표현할 생각
                - true에 '완료' 의미 부여, false에 '미완료'의미 부여
                    - 1. if 간소화 2. '완료'단어보다 true 리터럴이 메모리가 더 적다. 3. 부정연산자
                - 객체와 배열 샘플 구성(표/테이블=배열, 가로/행1개 = 객체1개)
        4. (JS) 기능/이벤트 구성 : 1. 필요한 함수 기능들을 파악 2. 함수들이 실행되는 조건 3. 각 함수들의 매개변수/리턴값
            - 1. 등록함수 : 실행조건 : [등록]버튼 클릭 시 onclick                   , 매개변수 :    리턴값 : 
            - 2. 출력함수 : 실행조건 : 1. js 실행될때 2. 등록/수정/삭제가 성공했을때  , 매개변수 :    리턴값 :  
            - 3. 수정함수 : 실행조건 : [수정]버튼 클릭시 onclick                    , 매개변수 :    리턴값 :  
            - 4. 삭제함수 : 실행조건 : [삭제]버튼 클릭시 onclick                    , 매개변수 :    리턴값 :  

            function 함수명(매개변수1, 매개변수2){
            return 리턴값;
            }
            매개변수        과일믹서기       리턴값
            과일,물             처리        과일쥬스
        5. (JS) 함수별 로직 구현/만들기, 구현된 함수는 실행조건에 맞추어 실행
*/
// [1]
let 할일목록 = [{할일코드 : 1, 할일내용 : "수업듣기", 할일상태 : false},
                {할일코드 : 2, 할일내용 : "밥먹기", 할일상태 : true}
]
let 식별번호 = 3;
// [2] 등록함수, (p:x, r:x)
function 등록함수(){
    // 1. [입력] HTML로부터 (할일내용) 입력받은 값(value)를 js로 가져온다.
    let content = document.querySelector('.contentInput').value; // value 호출
    // 2. [처리] 객체 생성 -> 배열에 저장 
    let 할일 = {할일코드 : 식별번호, // '식별번호' 변수값을 대입
                할일내용 : content, // 입력받은 'content' 변수값을 대입
                할일상태 : false // 초기값은 false(미완료) 대입
    };
    할일목록.push(할일); // 생성한 객체를 배열에 저장/대입
    식별번호++;         // 다음 할일이 등록할때 식별코드가 1씩 증가하기 위해서
    // 3. [출력] 
    전체출력함수();
    // console.log(할일목록);
    // + 부가코드
    alert('할일 등록했습니다.')
    document.querySelector('.contentInput').value = ``; // value 수정
    return;
}// f end
// [3] 전체출력함수, (p:x, r:x)
전체출력함수();
function 전체출력함수(){
    // 1. 어디에, todoBottom
    let todoBottom = document.querySelector('#todoBottom');
    // 2. 무엇을
    let html = ``
    for(let index = 0; index <= 할일목록.length - 1; index++){
        let info = 할일목록[index]; // index번째의 객체(할일) 꺼내기
        // 만약에 index번째의 할일상태가 true이면 'success' 클래스명을 넣어주고 아니면 ''공백을 넣는다
        html += `<div class="contentBox ${info.할일상태==true ? 'success' : ''}">
                <div class="content"> ${info.할일내용} </div> 
                <div class="contenBtns"> <button type="button" class="updateBtn" onclick = "수정함수(${info.할일코드})">수정</button>
                <button type="button" class="deleteBtn" onclick = "삭제함수(${info.할일코드})">삭제</button> </div>
            </div>`
    }
    // 3. 출력
    todoBottom.innerHTML = html;
    return;
}// f end
// [4] 수정함수, (p:할일코드, r:x)
function 수정함수(수정할할일코드){
    for(let index = 0; index <= 할일목록.length - 1; index++){
        if(할일목록[index].할일코드 == 수정할할일코드){
            할일목록[index].할일상태 = !할일목록[index].할일상태; 
                // false -> true, true -> false로 바뀜 단, boolean일때만 가능
                // - (1) 할일목록[index].할일상태 => true/false
                // - (2) !true/!false
                // - (3) 할일목록[index].할일상태 = true/false 
            //let 할일상태 = 할일목록[index].할일상태
            //할일목록[index].할일상태 = !할일상태;
            break;
        }
    }
    
    전체출력함수();
    return;
}// f end
// [5] 삭제함수, (p:할일코드, r:x)
function 삭제함수(삭제할할일코드){

    // 1. 배열내 삭제할 요소(객체)를 찾기
    for(let index = 0; index <= 할일목록.length - 1; index++){
        if(할일목록[index].할일코드 == 삭제할할일코드){
            // 만약에 index번째의 할일객체내 할일코드와 삭제할 할일코드와 같으면
            // 2. 배열내 요소(객체) 삭제 .splice(삭제할인덱스, 개수), 인덱스 필요
            할일목록.splice(index, 1); // 현재 찾은 index요소를 삭제한다.
            break; // 삭제 성공했을때 가장 가까운 반복문 종료
        }
    }
    
    전체출력함수();
    return;
}// f end