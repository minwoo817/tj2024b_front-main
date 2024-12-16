let todoList = [
    {num : 1, content : "수업듣기", bool : false}, 
    {num : 2, content : "밥먹기", bool : true}
]
let num = 3;
function add(){
    let content = document.querySelector('.contentInput').value;
    let todo = {
        num : num,
        content : content,
        bool : false
    }
    todoList.push(todo);
    num++;
    output();
    alert('할일 등록 완료');
    document.querySelector('.contentInput').value = ``;
    return;
}
output();
function output(){
    let out = document.querySelector('.bottom');
    let html = ``;
    for(let i = 0; i <= todoList.length - 1; i++){
        let info = todoList[i];
        html += `<div class="contentBox ${info.bool == true ? 'success' : ``}">
        <div class="content">${info.content}</div>
        <div><button type="button" class="updateBtn" onclick = "update1(${info.num})">수정</button>
        <button type="button" class="deleteBtn" onclick = "delete1(${info.num})">삭제</button></div>
    </div>`
    }
    out.innerHTML = html;
    return;
}
function update1(index){
    for(let i = 0; i <= todoList.length - 1; i++){
        if(todoList[i].num == index){
            todoList[i].bool = !todoList[i].bool;
            break;
        }
    }
    output();
    return;
}
function delete1(index){
    for(let i = 0; i <= todoList.length - 1; i++){
        if(todoList[i].num == index){
            todoList.splice(i, 1);
            break;
        }
    }
    output();
    return;
}