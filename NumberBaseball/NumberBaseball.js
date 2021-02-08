'use strict';

/*<배열 관련 메서드>
-push: 마지막에 추가
-pop: 마지막 것 뽑기
-unshift: 처음에 추가
-shift: 처음 것 뽑기
-splice(위치, 개수): 위치로부터 개수만큼 배열에서 추출
                    ~배열로 뽑히기 때문에 [0]으로 숫자만 뽑기
-문자.split(구분자): 배열로
-배열.join(구분자): 문자로
-배열.indexOf(값): 값의 위치 알 수 있음. 없으면 -1
 */
let body = document.body;
let num; //숫자 후보
let numArr; //숫자 배열

function NumBaseball(){
    num=[1,2,3,4,5,6,7,8,9];
    numArr=[];
    for (let i=0; i<4; i++){
        //let random = num.pop(); //9876 추출~배열 num에서 사라짐
        //numArr.push(random); //[9,8,7,6] 
        //let random = num.shift();  //1234 추출
        //numArr.unshift(random); //[4,3,2,1] 
        //let random = num.splice(3,1); //인덱스 3부터 1개 추출~4
        //let random = num.splice(5,2); //6,7 추출~배열 num에서 사라짐
        
        //Math.floor(Math.random()*(9-i)) : 0~8 랜덤한 숫자 
        //숫자 하나씩 뽑을 때마다 numArr의 길이 1씩 줄어들으므로
        //(9-i)를 곱해줘야 함
        let random 
        = num.splice(Math.floor(Math.random()*(9-i)),1)[0];
        numArr.push(random); 
    }
    console.log(numArr);
}

NumBaseball();

let form = document.createElement('form');
document.body.append(form);
let input = document.createElement('input');
form.append(input);
input.type = 'number';
input.maxLength = 4;
let button = document.createElement('button');
button.textContent='입력';
form.append(button);

let result = document.createElement('h3');
body.append(result);

let trial = 0;

//엔터 치면 이벤트 발생(비동기) ~~반복문 대체 가능
form.addEventListener('submit', function(e){
    //엔터치면 기본적으로 다른 페이지로 넘어가게 돼있음(새로 고침됨)
    //엔터치면 무조건 새로고침하는 게 기본
    //이를 바꿀 때 아래 문장(새로 고침 안 시킴)
    e.preventDefault();
    let answer = input.value;
    //console.log(answer, numArr, answer===numArr);
    //:무조건 false ~answer은 문자열, numArr은 배열
    //∴배열의 원소를 합쳐 문자열로 만들어줘야 함
    //=>배열.join(구분자) 메서드 이용
    //console.log(answer, numArr, answer===numArr.join(''));
    if(answer===numArr.join('')){ //답 맞으면
        result.textContent='홈런';
        input.value='';
        input.focus();
        NumBaseball();
        trial=0;  
    }
    else{ //답 틀리면
        let answerArr=answer.split('');
        console.log(answerArr);
        let strike=0;
        let ball=0;
        trial+=1;
        if(trial >= 3) {
            result.textContent
            ='3번의 기회를 모두 사용하셨습니다. 답:'
            +numArr.join(',');
            input.value='';
            input.focus();
            NumBaseball();
        }
        else{
            for(let i=0; i<3; i++){
                //스트라이크이면서 볼인 경우, 스트라이크+=1
                //따라서 맨 앞에 스트라이크 처리
                if(Number(answerArr[i])===numArr[i]){//같은 자리인지 확인
                    strike+=1;
                }else if(numArr.indexOf(Number(answerArr[i])) > -1){
                    //같은 자리는 x, 숫자 겹치는지 확인
                    ball+=1;
                }
            }
            result.textContent=strike+'strike '+ball+'ball';
            input.value='';
            input.focus();  
        }  
    }
});
