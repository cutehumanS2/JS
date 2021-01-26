'use strict';

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