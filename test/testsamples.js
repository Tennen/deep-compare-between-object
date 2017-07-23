const object = {
	id: 1,
	name: 'test',
	product: {
		id: 1,
		name: 'product'
	},
	updatedAt: 'now'
};

const objectA = {
	name: 'test',
	product: {
		name: 'product'
	},
};

const objectB = {
	name: 'test',
	product: {
		name: 'anotherProduct'
	}
};

const array = [{
	id: 1,
	name: 'test',
	product: {
		id: 1,
		name: 'product',
		foo: function(){}
	},
	updatedAr: 'now'
},{
	id:2,
	name: 'test2'
}];

const arrayA = [{
	name: 'test',
	product: {
		id: 1,
		name: 'product',
	},
},
{
	id:2
}];

const arrayB = [{
	name: 'test',
	product: {
		name: 'anotherProduct'
	}
}];

const arrayC = {
	0 : {
		id: 1,
		name: 'test',
	}
}

const objectArray = {
	id: 1,
	name: 'test',
	products: [{
		id: 1,
		name: 'product'
	}],
	updatedAt: 'now'
}

const objectArrayA = {
	name: 'test',
	products: [{
		name: 'product'
	}],
}

const objectArrayB = {
	name: 'test',
	products: [{
		name: 'anotherProduct'
	}],
}

export const testSamples = {
	object,
	objectA,
	objectB,
	array,
	arrayA,
	arrayB,
	arrayC,
	objectArray,
	objectArrayA,
	objectArrayB
}