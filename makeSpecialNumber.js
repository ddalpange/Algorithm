/*
숫자 3과 9는 재미있는 성질이 있습니다. 3의 배수의 각 자릿수의 합은 다른 3의 배수가 됩니다.
예를 들어 118 x 3= 354 이고 3 + 5 + 4 = 12 는 3의 배수입니다. 마찬가지로 9의 배수의 각 자릿수의 합은 다른 9의 배수가 됩니다. 예를 들어 75 x 9 = 675 이고 6 + 7 + 5 = 18 은 9의 배수입니다.

어떤 진법에서 이러한 성질을 갖는다고 다른 진법에서 이러한 성질을 가지지는 않습니다. 예를 들어 10 진수에서 3은 이러한 성질을 가지지만 5진수에서는 성립하지 않습니다.

예를 들어 3 x 4 를 생각해봅시다.

10 진수 : 3 x 4 = 12, 1 + 2 = 3 -> 3의 배수
5 진수 : 3 x 4 = 22, 2 + 2 = 4 -> 3의 배수가 아님
base 진법이 주어졌을 때 이러한 성질을 가진 수를 오름차순으로 모두 리턴하세요 (다만 0과 1은 제외합니다).
어떤 수가 이러한 성질을 가지는지 알고자 모든 숫자의 곱을 고려할 필요는 없습니다.
만약 4자리 미만의 곱으로 성립되면 더 큰 자리에서도 성립된다 할 수 있습니다. 예를 들어 10 진수에서는 999 보다 큰 숫자를 고려하지 않아도 됩니다.

예시
0)
base = 10
returns : {3, 9}

1)
base = 3
returns : {2}

2)
base = 9
returns : {2, 4, 8}

3)
base = 26
returns : {5, 2}

4)
base = 30
returns {29}
*/

/*let translateNotation = function (number, notation) {
  let numberString = '';

  do {
    let etc = (number % notation).toString();
    
    numberString += etc;
    
    number = Math.floor(number / notation);
  
  } while(number !== 0)
  
  return numberString.split('').reverse().join('');
}
*/

let getPlusAllCheaper = function (string, notation) {
	let result = 0;
  for(let number of string.split('')) {
  	result = result + parseInt(number, notation);
  }
  
  return result;
}

let getSpecialNumbers = function (notation) {
  let resultList = [];
	let numberMax = 100;
  
  for(let number = 2; number <= numberMax; number++) {
  	let isValid = true;
    for(let i = 1; i <= 50; i++) {
    	let multiple = number * i;
      let translatedMultiple = multiple.toString(notation);
      let plus = getPlusAllCheaper(translatedMultiple, notation);
      
      if(plus % number !== 0) {
      	isValid = false;
        break;
      }
    }
    if(isValid)
    	resultList.push(number);
  }
  return resultList;
}

let testCases = [10, 3, 9, 26, 30];

for(let test of testCases) {
  console.log('\n')
	console.log(`Base = ${test}`);  
	console.log(getSpecialNumbers(test));
}
