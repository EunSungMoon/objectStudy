/************************************************
객체를 공부해야겠다 
대형 프로젝트에서 객체를 적극 이용되는 것을 보고 익숙해지고자 
코드가 많이 등장할 예정

변수란? 
값의 메모리 주소/ 값을 담은 그릇
원시형? 
문자, 숫자, 불린, null, undefined, symbol(es6문법)
값이 한번 정해지면 변경 불가능
배열과 다른 점
순서가 상관없음

객체란?
다양한 데이터를 담을 수 있음, 데이터를 의미하는 프로퍼티
(함수도 그 일종이라고 하네여)
key, value로 구성된 프로퍼티(데이터)들의 집합
-key : 프로퍼티 이름(문자형)
-value : 데이터(자료형), 프로퍼티
-메소드 : 데이터를 참조, 조작할 수 있는 동작을 의미 -> 프로퍼티 값이 함수 일 경우
-인스턴스 : 생성자 함수를 통해 생성된 객체

객체 리터럴 : 중괄호를 이용하여 객체를 선언
변경, 삭제, 추가 가능

반복문 : for in 문

pass-by-reference
객체는 객체 타입 또는 참조타입이라 함

pass-by-value
원시타입은 값을 참조

생성함수에는 return이 없다. 
객체를 return하면 this 대신 객체 반환
원시형을 return하면 return 무시
*************************************************/
let user = {
  name: 'John',
  age: 30,
  sayHello: function () { //함수도 들어감!!
    console.log(`hi my name is ${this.name}`);
  }
}

user.isAdmin = true;
console.log(user.isAdmin); //true
user.sayHello(); //hi my name is John
console.log(typeof user); //object

//실무에서 자주 쓰이는 방법
function makeUser(name, age) {
  return {
    // name: name,
    name,
    // age: age,
    age
  }
}

let user1 = makeUser('monn', 26);
console.log(user1.age);//26
console.log(user1.name);//moon
console.log('age' in user1); //true

//생성자 함수를 이용하기
function Person(name, gender) {
  //인스턴스들
  this.name = name; 
  this.gender = gender;
  this.sayHello = function () {
    console.log(`hi myname is ${this.name}`);
  };
}

let person1 = new Person('moon', 'female');
let person2 = new Person('lee', 'female');


//this는 생성자 함수가 생성할 인스턴스를 가리킨다

console.log(`person1: ${typeof person1}`);
console.log(`person2: ${typeof person2}`);