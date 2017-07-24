let compare = (objA, objB)=> {
	//NaN === NaN returns false && Number.isNaN(NaN) returns true
	if(Number.isNaN(objA) && Number.isNaN(objB)){
		return true;
	}
	//returns true when functions work the same way
	if(typeof objA === 'function' && typeof objB === 'function'){
		return objA.toString() === objB.toString();
	}
	//returns true when A is equal to B
	if(objA === objB){
		return true;
	}
	//keys like (0, 1, 2, 3) can be used in json
	//returns false when comparing json object with array 
	if(objA.constructor !== objB.constructor){
		return false;
	}
	//comparing object
	if(typeof objA === 'object' && typeof objB === 'object'){
		for(let key in objB){
			if(!compare(objA[key],objB[key])){
				//return false when the property doesnt match
				return false;
			};
		}
	//if objA and objB are not object and objA is not equal to objB, return false
	}else if(objA !== objB){
		return false;
	}
	//if it didnt return false in the above cases
	return true;
}
export {compare}