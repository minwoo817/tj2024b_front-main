/*
    - 사원 정보 과 각 사원의 연도별 점수평가 메모리 구성 
    1. 저장할 데이터들을 모두 생각한다.
        - 사원명 , 생년월일 , 연도 , 상반기점수, 하반기점수 
    
    2. 데이터끼리 관계성 파악 해서 분류하기 
        - 사원정보( 사원명,생년월일 ) , 점수정보(연도,상반기점수,하반기점수)
        - 상하 관계 , 일 대 다 관계 , 하나의 데이터가 다른데이터에서 여러개를 참조한다.
            - 하나의 사원이 여러개 연도별 점수를 가질수 있다. 
                '유재석' --------> 2024   100    90 
                        --------> 2023    85     64
                    일      대       다
            - 하나의 회원이 여러개 게시물을 작성할수 있다.
            - 하나의 카테고리의 여러개 제품을 등록할수 있다.
    
    3. 데이터 분류 간의 관계성 연결 
        - 사원정보(상위/식별가능한필드) , 점수정보(하위) 
        1. 유재석 정보 등록 ,  유재석 2002-10-02
        2. 유재석 2024점수 등록 , 유재석 2002-10-02 2024 90 80
        3. 유재석 2023점수 등록 , 유재석 2002-10-02 2024 90 80 2023 100 97
            유재석 2002-10-02 ----> 2024 90 80
                             ----> 2023 100 97
            1 유재석 2002-10-02 ---->  유재석 2024 90 80 
                               ---->   유재석 2023 100 97
*/
// [1] 객체지향으로 메모리 구성 
    // 1. 두 사원의 정보(no:사원번호,name:사원명,birth:생년월일)를 샘플로 해서 2개의 객체 생성 
    let 사원1 = { 사원번호 : 1  , 사원명 : '유재석' , 생년월일 : '2000-10-02' }
    let 사원2 = { 사원번호 : 2  , 사원명 : '강호동' , 생년월일 : '1980-01-25' }
        // 2. 사원목록 등록 
    let 사원목록 = []
    사원목록.push( 사원1 ); // 사원1 등록 
    사원목록.push( 사원2 ); // 사원2 등록 
    console.log( 사원목록 ); // 현재 전체 사원의 정보 전체 출력
        // 3. 평가 객체 생성 , 샘플3개  
    let 점수1 = { 사원번호 : 1 , 연도 : '2024' , 상반기 : 100 , 하반기 : 80 }; // 유재석의 2024 평가 등록 
    let 점수2 = { 사원번호 : 2 , 연도 : '2024' , 상반기 : 92  , 하반기 : 71 }; // 강호동의 2024 평가 등록 
    let 점수3 = { 사원번호 : 1 , 연도 : '2023' , 상반기 : 82  , 하반기 : 97 }; // 유재석의 2023 평가 등록 
        // 4. 평가 목록 등록 
    let 평가목록 = []
    평가목록.push( 점수1 );
    평가목록.push( 점수2 );
    평가목록.push( 점수3 );
    console.log( 평가목록 ); // 평가목록내 세번째 위치한 점수는 누구의 점수인가요? '유재석'
    
    //[*] 사원번호 전역변수 
    let eno = 3; // <--- 샘플 2개(사원2개)라서 다음 등록된 사원번호는 3번부터 시작
    //[1] 사원 등록 함수 , 실행조건 : [사원등록] 버튼 클릭할때 실행  
    function 사원등록(){
        // 1. 입력 , 각 선택자(클래스)와 일치한 input의 value값 가져오기 
        let name = document.querySelector('.name').value;       
        let birth = document.querySelector('.birth').value;    
        // 2. 처리  // - 입력받은 값을 객체{ 속성명 : 입력받은값 } 로 만들기 
        let info = {
            사원번호 : eno , // 사원번호는 자동 으로 1씩 증가 
            사원명 : name , // 사원명은 입력받은 name 
            생년월일 : birth // 생년월일은 입력받은 birth 
        }; 
            // - 생성한 객체를 배열에 추가 하기.
        사원목록.push( info );
        eno++; // 만일 사원등록 성공시 eno(사원번호) 1 증가한다. // -> 다음 회원은 1증가된 사원번호를 받을 예정 
        // 3. 출력 
        사원전체출력();
    }// f end 
    // [2] 사원 정보 전체 출력 함수 , 실행조건 : 1. JS실행될때 최초1번 2.사원목록(배열)의 변화(저장/수정/삭제)가 있을때 마다
    사원전체출력();
    function 사원전체출력(){
        let tbody = document.querySelector('.사원테이블'); // 1. 어디에 
        let html = ``;     // 2. 무엇을 
        for( let index = 0 ; index<=사원목록.length-1 ; index++ ){  // - 사원목록내 모든 사원정보를 HTML로 구성하기 
            // index는 0부터 사원목록의 마지막인덱스까지 1씩 증가 반복 
            let info = 사원목록[index]; // index번째의 사원정보 1개 호출 
            html += `<tr>
                        <td> ${ info.사원번호 }</td>
                        <td> ${ info.사원명 } </td>
                        <td> ${ info.생년월일 } </td>
                        <td> 
                            <button onclick = "평가등록출력(${info.사원번호})" type="button"> 평가 등록 </button>
                            <button type="button" onclick = "사원별평가(${info.사원번호})"> 평가 결과 </button>
                        </td>
                        </tr>`
        } // f end 
        // 3. 출력 
        tbody.innerHTML = html;
    } // f end 
// [3] 평가 등록 구역 출력 함수, 실행 조건 : [평가 등록]버튼 클릭했을때
function 평가등록출력( 클릭된사원번호 ){ // 매개변수
    // console.log(클릭된사원번호);
    // 사원번호를 이용한 사원정보 찾기
    let 검색사원 = null;
    for(let index = 0; index <= 사원목록.length - 1; index++){
        let info = 사원목록[index];
        if(info.사원번호 == 클릭된사원번호) {
            검색사원 = info; // for문 밖에서 선언한 검색사원 변수에 대입한다.
            break; // 만약 찾았으면 for문 종료
        } // if end
    }// f end
    if(검색사원 == null){
        alret('사원정보가 없습니다.');
        return;
    }
    // 1. 어디에
    let div = document.querySelector('.평가입력구역');
    // 2. 무엇을
    let html = ` <h3> 사원 평가 등록 </h3>
        <form>
            <h5> 평가사원명 : ${검색사원.사원명} </h5>
            평가연도 : <input class="year" type="text" />
            상반기평가 : <input class="high" type="text" />
            하반기평가 : <input class="low" type="text"/> 
            <button type="button" onclick ="점수등록(${검색사원.사원번호})"> 점수 등록 </button>
        </form>`;
    // 3. 출력
    div.innerHTML = html;
}// f end

function 점수등록( 사원번호 ){
    let year = document.querySelector('.year').value;
    let high = document.querySelector('.high').value;
    let low = document.querySelector('.low').value;
    let info = {
        사원번호 : 사원번호 , 
        연도 : year ,
        상반기 : high ,
        하반기 : low
    };
    평가목록.push(info);
    
    // console.log(평가목록);
    점수출력();
}
점수출력();
function 점수출력(){
    let tbody = document.querySelector('.점수테이블');
    let html = ``;
    for(let i = 0; i <= 평가목록.length - 1; i++){
        let info = 평가목록[i];
        html += `<tr> <td> ${info.사원번호} </td> 
                <td> ${info.연도} </td> 
                <td> ${info.상반기} </td> 
                <td> ${info.하반기} </td> </tr>`;
        
    }
    tbody.innerHTML = html;
}
function 사원별평가(사원번호){
    let tbody = document.querySelector('.점수테이블');
    let html = ``;
    for(let i = 0; i <= 평가목록.length - 1; i++){
        let info = 평가목록[i];
        if(info.사원번호 == 사원번호){
            html += `<tr> <td> ${info.사원번호} </td> 
                <td> ${info.연도} </td> 
                <td> ${info.상반기} </td> 
                <td> ${info.하반기} </td> </tr>`;
        }
    }
    tbody.innerHTML = html;
}