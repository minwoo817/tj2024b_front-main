/*
    객체 
        - 속성과 함수를 가질 수 있는 자료 구조/타입
        - 객체는 .(접근연산자)를 이용하여 속성의 값과 함수 호출
            변수명.속성명       변수명.함수명( )
        - 내가 만든 객체 vs 남이 만든 객체(라이브러리)
    남이 만든 객체
        1. console.log() / console객체내 log()함수 호출
        2. document.querySelector() / document객체내 querySelector()함수 호출
    DOM 객체
        - JS 회사에서 미리 만들어진 HTML 관련 객체 제공, 왜? JS에서 HTML 조작하기 위해서
        - document 객체 내 속성과 함수는 무엇이 있나요?
        1. document.write('출력할내용) : HTML에 출력할 내용을 출력해주는 힘사
        2. document.querySelector('선택자') : HTML에 지정한 선택자의 마크업을 객체타입으로 반환 점수        [객체]
        3. console.log(document.querySelector('선택자')) : HTML에 지정한 선택자의 모든 마크업을 객체타입으로 반환 함수  [배열]  
            - 선택자(css동일) : 1. 마크업 2. .클래스명 3. #id명 4. > 자식 5. 띄어쓰기 자손 등등
        
        - 요소(마크업) 객체 주요 속성/함수, 마크업들의 속성들을 JS에서도 접근이 가능하다.
            1. .value : 지정된 마크업의 value 속성값 조작
                - 사용 가능한 요소 : <input />, <select />, <textarea /> 등
                - 사용 불가능한 요소 : <div>, <table>, <span> 등
                <호출> document.querySelector('선택자').value                   [문자열]
                <대입> document.querySelector('선택자').value = 새로운 값       [문자열]
            2. .innerHTML : 지정된 마크업의 시작마크업<>과 끝 마크업</>의 > 사이 < 가 inner, 마크업 사이에 HTML 호출/대입
                - 사용 가능한 요소 : <div>, <table>, <span> 등
                - 사용 불가능한 요소 : <input />, <select />, <img /> 등
                <호출> document.querySelector('선택자').innerHTML               [문자열]
                <대입> document.querySelector('선택자').innerHTML = 새로운 값    [문자열]
            3. .style : 지정된 마크업의 style 속성을 이용한 css 조작
                - 모든 마크업
                <호출> document.querySelector('선택자').style                   
                <대입> document.querySelector('선택자').style = 'css문법'           
             4. .src : 지정된 마크업의 src 속성값 호출/대입
                - 사용가능한 요소 : <img src = ""/> , <audio src = "" /> , <video src = "" /> 등
                

    *DOK트리*
        document
            -> html
                -> head
                    -> title
                    -> style
                -> body
                    - > div
                        -> table
                    -> table
                    -> span
*/      
// [1]
console.log(document);
// [2]
console.log(document.querySelector('title')); // title 마크업을 JS의 객체 타입으로 반환 {객체}
console.log(document.querySelector('body')); // <body> 마크업을 JS의 객체 타입으로 반환 {객체}
// [3]
console.log(document.querySelector('div')); // <div> 마크업을 js의 객체타입으로 반환 {객체}
console.log(document.querySelectorAll('div')); // <div> 마크업들을 js의 객체 타입으로 모두 반환 [배열]
console.log(document.querySelector('box2')); // <div> 마크업중에서 class 속성이 'box2'인 마크업을 js의 객체타입으로 반환
console.log(document.querySelector('#box3')); // <div> 마크업중에서 id 속성이 'box3'인 마크업을  js의 객체타입으로 반환

// [4]
let box222 = document; // box222 = (객체 o vs 리터럴/문자열)
let box2 = document.querySelector('.box2'); // box2 = (객체o vs 리터럴/문자열)
console.log(box2)
let box22 = document.querySelector('.box2').innerHTML; // box22 = (객체 vs 리터럴/문자열o)
console.log(box22)
