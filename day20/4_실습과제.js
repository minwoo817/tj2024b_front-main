let infoList = [{ num: 1, id1: '123', pw1: '123' }];
let loginList = [];
let num = 2;
let loginUserNum = null;
let serList = [
  {
    num: 1,
    people: '2',
    serType: 'Basic',
    storage1: '2',
    period: '3',
    company: '삼성',
    phone: '01011112222',
    email: 'asd123@naver.com',
    address: '인천',
  },
];
function 회원가입() {
  let id1 = document.querySelector('.id1').value;
  let pw1 = document.querySelector('.pw1').value;
  if (id1 == '' || pw1 == '') {
    alert('회원정보 제대로 입력해주세요');
    return;
  }
  let info1 = {
    num: num,
    id1: id1,
    pw1: pw1,
  };

  infoList.push(info1);
  num++;
  console.log(infoList);
}
function 로그인() {
  let id2 = document.querySelector('.id2').value;
  let pw2 = document.querySelector('.pw2').value;
  let text = document.querySelector('.text');
  loginList.push(`${id2} ${pw2}`);
  let searchOk = false;
  let html = ``;
  for (let i = 0; i <= infoList.length - 1; i++) {
    if (id2 == infoList[i].id1 && pw2 == infoList[i].pw1) {
      loginUserNum = infoList[i].num;
      searchOk = true;
      html += `<p>${infoList[i].num}번째 회원님 로그인 성공</p>`;
      break;
    }
  }
  if (searchOk == false) {
    alert('로그인실패');
  }
  text.innerHTML = html;
  서비스구독출력();
}
function 서비스구독(num) {
  if (loginUserNum === null) {
    alert('로그인 후 이용 가능합니다.');
    return;
  }

  let people = document.querySelector('.people').value;
  let serTypeElement = document.querySelector('input[name="gener"]:checked');
  let storage1 = document.querySelector('.storage1').value;
  let period = document.querySelector('.period').value;
  let company = document.querySelector('.company').value;
  let phone = document.querySelector('.phone').value;
  let email = document.querySelector('.email').value;
  let address = document.querySelector('.address').value;
  if (people == '' || !serTypeElement || storage1 == '' || period == '') {
    alert('필수 정보 모두 입력해주세요');
    return;
  }
  let serType = serTypeElement.value;
  let info2 = {
    num: loginUserNum,
    people: people,
    serType: serType,
    storage1: storage1,
    period: period,
    company: company,
    phone: phone,
    email: email,
    address: address,
  };
  serList.push(info2);
  console.log(serList);
  서비스구독출력();
}
서비스구독출력();
function 서비스구독출력() {
  let service1 = document.querySelector('.service1');
  let html = ``;
  service1.innerHTML = '';
  for (let i = 0; i < serList.length; i++) {
    let info3 = serList[i];
    console.log(`num: ${info3.num}, loginUserNum: ${loginUserNum}`);
    if (info3.num === loginUserNum) {
      if (info3.serType === 'Basic') {
        html += `<table border="1">
            <thead>
              <tr>
                <th>서비스형태</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${info3.serType}</td>
                <td>9900원</td>
              </tr>
            </tbody>
          </table>`;
      } else if (info3.serType === 'Standard') {
        html += `<table border="1">
            <thead>
              <tr>
                <th>서비스형태</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${info3.serType}</td>
                <td>14900원</td>
              </tr>
            </tbody>
          </table>`;
      } else if (info3.serType === 'Premium') {
        html += `<table border="1">
            <thead>
              <tr>
                <th>서비스형태</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${info3.serType}</td>
                <td>19900원</td>
              </tr>
            </tbody>
          </table>`;
      }
      break;
    }
  }
  service1.innerHTML = html;
}