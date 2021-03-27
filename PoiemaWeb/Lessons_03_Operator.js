/**
* 2021. 03. 27
* Creater : Gunhee Choi
* Reference site : https://poiemaweb.com/
**/

//Operator

// 산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
'My name is ' + 'Lee' // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
3 > 5 // false

// 논리 연산자
(5 > 3) && (2 < 4)  // true

// 타입 연산자
typeof 'Hi' // "string"

//산술 연산자
5 + 2  // 7
5 - 2  // 3
5 * 2  // 10
5 / 2  // 2.5
5 % 2  // 1

var x = 5, result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

//할당 연산자
var x;

x = 10;   // 10
x += 5;   // 15
x -= 5;   // 10
x *= 5;   // 50
x /= 5;   // 10
x %= 5;   // 0

var str = 'My name is ';
str += 'Lee'; // My name is Lee

var x, y;
y = x = 10; // 연쇄 할당(Chained assignment)
console.log(x, y); // 10 10


//비교 연산자
// 동등 비교
5 == 5    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 같는다.
5 == '5'   //true
5 === 8    // false

// 대소 관계 비교
5 > 0    // true
5 > 5    // false
5 > 8    // false

5 < 0    // false
5 < 5    // false
5 < 8    // true

5 >= 0   // true
5 >= 5   // true
5 >= 8   // false

5 <= 0   // false
5 <= 5   // true
5 <= 8   // true

//삼항 조건 연산자
var x = 2;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수

//논리 연산자
// 논리합(||) 연산자
true || true   // true
true || false  // true
false || true  // true
false || false // false

// 논리곱(&&) 연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true

//typeof 연산자
//typeof 연산자는 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환한다
typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"

typeof null  // "object"
//주의해야 할 것은 typeof 연산자로 null 값을 연산해 보면 null이 아닌 “object”를 반환한다는 것이다. 이것은 자바스크립트의 첫 번째 버전에서 이렇게 설계된 것을 현재의 버전에 반영하지 못하고 있기 때문이다. 