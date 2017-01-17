function generate(){
	var number = [];
	
<<<<<<< HEAD
	for (var i = 0; i < 6; i++){
		numbers.push(Math.floor(Math.random() * 45)+1);
		
		if(contain(numbers, number)){
			i--;
		} else {
		  numbers.push(number);
		}
=======
>>>>>>> hotfix2
	}
	
	return numbers;
}

<<<<<<< HEAD
/* 배열 안에 nubmer가 포함되어 있는지 확인 */	
function contain(numbers, number){
	for(var i = 0 ;i < numbers.length; i++){
=======
>>>>>>> hotfix2
		if(numbers[i] == number) return true;
	}
	return false;
}
