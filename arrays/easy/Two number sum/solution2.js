function twoNumberSum(array, targetSum) {
	let result = [];
	let hashMap = {};
	
	for(let i = 0; i < array.length; i++){
		let y = array[i];
		let x = targetSum - y;
		
		if(x in hashMap){
			result.push(y);
			result.push(x);
		}else{
			hashMap[y] = 1;
		}
	}
	return result;
}
