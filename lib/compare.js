let compare = (objA, objB)=> {
	if(Number.isNaN(objA) && Number.isNaN(objB)){
		return true;
	}
	if(typeof objA === 'function' && typeof objB === 'function'){
		return objA.toString() === objB.toString();
	}
	if(objA.constructor !== objB.constructor){
		return false;
	}
	if(typeof objA === 'object' && typeof objB === 'object'){
		for(let key in objB){
			if(!compare(objA[key],objB[key])){
				return false;
			};
		}
	}else if(objA !== objB){
		return false;
	}
	return true;
}
export {compare}