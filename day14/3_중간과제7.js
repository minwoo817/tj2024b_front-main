
let array1 = [];
let array2 = [];

function join() {
  let id = document.querySelector('.id').value;
  let pw = document.querySelector('.pw').value;
  array1.push(`${id} ${pw}`);
  console.log(array1);
}
function login() {
  let id1 = document.querySelector('.id1').value;
  let pw1 = document.querySelector('.pw1').value;
  let searchOk = false;
  array2.push(`${id1} ${pw1}`);
  console.log(array2);
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array2[0] == array1[i]) {
      searchOk = true;
      document.write('로그인 성공');
      break;
    }
  }
  if (searchOk == false) {
    document.write('로그인실패');
  }
}
