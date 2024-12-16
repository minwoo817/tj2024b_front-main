/*
    세션 이용한 회원가입/로그인 구현

*/
// [1] 회원가입 함수 정의
    // - 함수를 언제 사용할건지? [회원가입] 버튼 클릭했을때
    // - 함수의 인자값(매개변수)? X
    // - 함수의 리턴값(반환) ? X
// let memberList = [] <---- 회원목록을 세션/쿠키에 저장
    function 회원가입함수(){

    // 1. [입력]
    let id = document.querySelector('.signId').value; // 각 Input의 value 가져오기
    let pw = document.querySelector('.signPw').value; // 각 Input의 value 가져오기
    // 2. [처리]
    let member = {'id' : id , 'pw' : pw}; // 입력받은 값으로 객체 생성

        // - 회원목록정보를 전역변수에 선언하지 않고 세션/쿠키 저장 
        // 왜? JS 외부 (브라우저)에 저장하면 JS가 새로고침/변화가 있어도 저장유지
        // - (1) 현재 회원정보를 저장하기위한 회원정보 목록을 세션에서 가져오기
        let memberList = sessionStorage.getItem('memberList');
        
        // - (2) 회원정보목록이 존재하면 존재하지 않으면
        if(memberList == null){ // 만약에 가져온 세션데이터가 null이면
            memberList = []; // 빈배열 생성하여 변수 대입
        }
        else { // 가져온 세션 데이터가 존재하면
            // 문자열 ----> 객체(JSON) 변환
            memberList = JSON.parse(memberList);
        }
        // 배열에 입력받은 객체 저장
        memberList.push(member); console.log(memberList);

        // - 변화가 있는 배열을 세션/쿠키 다시 저장(새로고침)
        // - (1) key와 value로 구성된 세션 정보를 저장하는데 value값을(배열 -> 문자열)타입으로 변환하여 저장한다.
        sessionStorage.setItem('memberList', JSON.stringify(memberList));
    // 3. [출력]
    
    return; // 함수 종료 // 값 없을땐 생략 가능
}

// [2] 로그인함수, [로그인] 버튼을 클릭했을때
function 로그인함수(){

    // C(회원가입) R(로그인/조회/비교) U D
    // 회원가입이란? 입력한 정보들을 어딘가에 저장/기록
    // 로그인이란? 로그(기록)으로 들어가는 것, 기록(회원가입)과 일치한 정보 비교해서 들어감

    let loginId = document.querySelector('.loginId').value;
    let loginPw = document.querySelector('.loginPw').value;

    let memberList = 회원정보목록();            

    // 로그인정보와 회원정보(기록)내 존재하는지 비교
    for(let index = 0; index <= memberList.length - 1; index++){
        let info = memberList[index];
        if(info.id == loginId && info.pw == loginPw){
            alert('로그인 성공');
            return; // 현재 함수 종료 // 아래코드 실행 X
        }

    }
    alert('못맞췄지롱~');
    return;
}

// [3] 세션에 있는 회원정보목록 반환 함수
function 회원정보목록(){ // 매개변수 X, 리턴값 : memberList
    let memberList = sessionStorage.getItem('memberList');
    if(memberList == null){
        memberList = []; // 회원정보목록 없으면 빈배열 생성
    }
    else{
        memberList = JSON.parse(memberList); // 회원정보목록 존재하면 JSON 타입 변환
    }
    return memberList; // 함수가 종료되면서 함수를 호출했던것으로 반환/리턴하는 값
}