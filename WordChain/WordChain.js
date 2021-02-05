'use strict';

let 바디 = document.body; //html에서 body 선택됨
//<--html 태그 만들기--> 
//: document 객체의 메서드를 이용 ~ HTML 만들 수 있음
//그러나 그냥 html로 하는게 더 효율적
//나중에 제이쿼리로 하면 좀 더 수월
let word = document.createElement('div');
word.textContent='최가희'; //여기까지는 화면에 표시 안 해줌
document.body.append(word); //body에 추가해줘야 화면 표시해줌

let form=document.createElement('form');
document.body.append(form);
let answer = document.createElement('input');
form.append(answer);
let 버튼 = document.createElement('button');
버튼.textContent='입력';
form.append(버튼);

let result = document.createElement('div');
//result.textContent=' ';
document.body.append(result);

/* <?> value인지 textContent인지 헷갈릴 때
: f12~console에 console.dir(document.body)
-> children -> 각각 값 확인해보고 있는 값으로~
" "의 경우 값 없는 것 */
form.addEventListener('submit', function (event){//function이 콜백함수
    //엔터치면 기본적으로 다른 페이지로 넘어가게 돼있음(새로 고침됨)
    //엔터치면 무조건 새로고침하는 게 기본
    //이를 바꿀 때 아래 문장(새로 고침 안 시킴)
    event.preventDefault(); 
    if(word.textContent[word.textContent.length-1]
                                === answer.value[0]){
        result.textContent='딩동댕';
        word.textContent=answer.value;
        answer.value='';
        answer.focus();//사용자 편의위해 웬만해선 마우스 안 만지게 
                    //포커스를 입력창에 맞춰줌(자동 커서)
    }else{
        result.textContent
        =word.textContent[word.textContent.length-1]+
        '로 시작하는 단어를 입력하세요^_^';
        answer.value='';
        answer.focus();//사용자 편의위해 웬만해선 마우스 안 만지게 
                    //포커스를 입력창에 맞춰줌(자동 커서)
    }
});

//+)JS에선 문자열과 문자의 구분 x
//엔터로 입력받으려면 <form> 태그

/*
//제시어
let word='최가희';

while(true){
    //대답 입력 받음(prompt)
    let answer = prompt('제시어: '+word+'\n그만하고 싶으면 \'그만하고싶어\' 입력해');
    if(answer=="그만하고싶어"){
        alert('알겠어ㅋ ㅋ 그만하자');
        break;
    } 
    //제시어의 마지막 글자와 대답의 첫 글자가 같으면
    //=맞았을 때
    if(word[word.length-1] === answer[0]){
        word=answer; 
    }else{ //틀렸을 때
        alert(word[word.length-1]+'로 시작하는 단어를 입력하세요^_^');
    }
}
*/

/*
for(;;){
    let answer = prompt('제시어: '+word);
    if(answer=="그만하고싶어"){
        alert('알겠어 그만하자');
        break;
    } 
    if(word[word.length-1] === answer[0]){
        word=answer; 
    }else{
        alert(word[word.length-1]+'로 시작하는 단어를 입력하세요^_^');
    }
}*/