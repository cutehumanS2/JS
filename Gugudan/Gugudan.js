'use strict';

//Matn.random(): 0~1 부동소수점 난수 반환
//Math.floor(): 소수점 자름(내림함수)
//Math.ceil(): 올림함수
//Math.random()*9: 0~8
//Math.floor(Math.random()*9)+1: 1~9
/*
~MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
getRandomInt(1, 9);*/

let num1 = Math.ceil(Math.random()*9);
let num2 = Math.ceil(Math.random()*9);
let result = num1*num2;

let body = document.body;
let question = document.createElement('div');
question.textContent =  num1 + ' * ' + num2 + '= ?'
document.body.append(question);

let form = document.createElement('form');
document.body.append(form);
let answer = document.createElement('input');
//answer.type='number';
form.append(answer);
let button = document.createElement('button');
button.textContent = '입력';
form.append(button);

let check = document.createElement('div');
check.textContent='';
document.body.append(check);

//이벤트 리스너가 반복문 역할을 하고 있지만,
//항상 그런 것은 아님 
form.addEventListener('submit', function (e){
    //엔터치면 기본적으로 다른 페이지로 넘어가게 돼있음(새로 고침됨)
    //엔터치면 무조건 새로고침하는 게 기본
    //이를 바꿀 때 아래 문장(새로 고침 안 시킴)
    e.preventDefault();
    if(Number(answer.value) === result){ //인풋 값은 String
        //또는 위에 주석처리(line 29)처럼 직접 지정
        check.textContent='정답~ㅋ.ㅋ';

        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        result = num1*num2;
        question.textContent =  num1 + ' * ' + num2 + '= ?'   

        answer.value='';
        answer.focus();//사용자 편의위해 웬만해선 마우스 안 만지게 
                    //포커스를 입력창에 맞춰줌(자동 커서)
        
    }else{
        check.textContent='아닌디~ㅋ ~ㅋ';
        answer.value='';
        answer.focus();//사용자 편의위해 웬만해선 마우스 안 만지게 
                    //포커스를 입력창에 맞춰줌(자동 커서)
    }
})

/*
while(true){
    let num1 = Math.ceil(Math.random()*9)+1;
    let num2 = Math.ceil(Math.random()*9)+1;
    let result = num1 * num2;
    let answer = prompt(num1+'*'+num2+'= ?');

    while(Number(answer) !== result){
        alert('땡! 다시 생각해보세요.');
        answer = prompt(num1+'*'+num2+'= ?');
    }
    alert('정답!');
    /*
    if(Number(answer) === result){
        alert('정답!');
    }
    else{
        alert('땡! 답은 '+result+'입니다.');
    }
    
}
*/
