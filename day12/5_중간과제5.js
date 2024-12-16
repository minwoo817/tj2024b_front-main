/*
    [문제1] 아래 배열을 이용한 아래 출력 형식으로 구현하기
        1. 영화이름 목록
            - movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
        2. 영화 평점 목록, 각 영화별 평점은 10점 만점
            - movieRating = [8, 4, 7, 6]
        3. HTML 예시
            히든페이스           ★★★★★★★★☆☆
            위키드              ★★★★☆☆☆☆☆☆
            글래디에이터2        ★★★★★★★☆☆☆
            청설                ★★★★★★☆☆☆☆
    [문제2] 6개 시트/좌석이 존재하는 좌석 상태 출력하시오
        1. 좌석은 총 6개, 빈좌석인지 예약석인지는 임의로 설정
        2. 아래와 같이 좌석을 2칸씩 3줄 출력한다.
        3. 빈좌석이면 blue 색상 표기, 예약석이면 red로 색상 표기하시오
        4. HTML 예시
        ㅁ  ㅁ
        ㅁ  ㅁ
        ㅁ  ㅁ
*/
/*
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설']
let movieRating = [8, 4, 7, 6]
let outHTML = ``
for(let index = 0; index < movieNames.length; index++){
    outHTML += `<div> <span> ${movieNames[index]} </span> `
    let jHTML = ``
    for(let j = 1; j <= 10; j++){
        if(j <= movieRating[index]){
            jHTML += `★`
        }
        else{
            jHTML += `☆`
        }
    }
    outHTML += `<span> ${jHTML} </span> </div>`
}
document.write(outHTML)
*/
let seat = [0, 1, 1, 0, 0, 1];
let empty = `<span style = "color: blue">빈좌석</span>`;
let reserved = `<span style = "color: red">예약좌석</span>`;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    let index = i * 2 + j;
    if (seat[index] == 0) {
      document.write(empty + '');
    } else {
      document.write(reserved + '');
    }
  }
  document.write(`<br />`);
}