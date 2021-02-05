//window.document 또는 window[document'] 또는 document
//콘솔창=> #document  : 화면(페이지, 탭)을 담당하는 객체
//window: 브라우저 전체를 담당하는 객체  

/*
window.resizeTo( //화면 조정 하는 코드
    window.screen.availWidth / 2, // 축소
    window.screen.availHeight / 2
);
*/

/*window는 전역객체, 생략 가능
ex) window.alert()인데 alert()로 사용 가능

전역 변수는 전역 객체의 속성이 됨(함수 바깥)
let a='b';
window.a;  //'b'
~~>콘솔 창에 쳤을 때만 해당
ex) function 기억하세요(){
    let 몸무게 = 70;
}
기억하세요() //let 몸무게 = 70; 실행
window.몸무게 //70이 아닌 undefined 나옴

: 전역 변수와 함수 안의 변수가 다른 이유는 
함수의 특수성(함수코프) 때문
*/
