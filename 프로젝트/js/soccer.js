출력함수( );
function 출력함수( ){ // * localStorage 로 부터 게시물 배열 호출 
    let boardList = getBoardList(); 
    let tbody = document.querySelector( 'table > tbody')
    let html = ''
        for( let index = 0 ; index <= boardList.length - 1 ; index++ ){
            let board = boardList[index]; 
            html += `<tr>
                        <td> ${ board.date } </td>
                        <td> 
                            <a href="soccerview.html?bno=${ board.bno }">
                                ${ board.content }
                            </a> 
                        </td>
                        <td> ${ board.view } </td>
                    </tr>`; 
        } 
    tbody.innerHTML = html;
} 