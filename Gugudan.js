'use strict';

//Matn.random(): 0~1 부동소수점 난수 반환
//Math.floor(): 소수점 자름
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

while(true){
    let num1 = Math.floor(Math.random()*9)+1;
    let num2 = Math.floor(Math.random()*9)+1;
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
    */
}
