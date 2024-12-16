
let infoArray = ['유재석, 99-10-09, 1', '강호동, 00-01-23, 2'];
let scoreArray = ['1, 80, 90, 2021', '2, 70, 75, 2020'];

function info() {
  let name = document.querySelector('.name').value;
  let birth = document.querySelector('.birth').value;
  let number = document.querySelector('.number').value;
  let board = `${name},${birth},${number}`;
  infoArray.push(board);
  console.log(infoArray);
  infoOutput();
}
function infoOutput() {
  let tbody = document.querySelector('.infoOutput > tbody');
  let html = ``;
  for (let i = 0; i <= infoArray.length - 1; i++) {
    let board = infoArray[i];
    let info = board.split(',');
    html += `<tr> <td>${info[0]}</td> 
                <td>${info[1]}</td> 
                <td>${info[2]}</td> </tr>`;
  }
  tbody.innerHTML = html;
}
function score() {
  let number = document.querySelector('.number').value;
  let num = document.querySelector('.num').value;
  let high = document.querySelector('.high').value;
  let low = document.querySelector('.low').value;
  let year = document.querySelector('.year').value;
  let board = `${num},${high},${low},${year}`;
  if (num == number) {
    scoreArray.push(board);
    console.log(scoreArray);
  }
  scoreOutput();
}
function scoreOutput() {
  let tbody = document.querySelector('.scoreOutput > tbody');
  let htmll = ``;
  for (let j = 0; j <= scoreArray.length - 1; j++) {
    let board = scoreArray[j];
    let score = board.split(',');
    htmll += `<tr> <td>${score[0]}</td> 
            <td>${score[1]}</td> 
            <td>${score[2]}</td> 
            <td>${score[3]}</td> </tr> `;
  }
  tbody.innerHTML = htmll;
}
