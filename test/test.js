import {compare} from '../lib/compare';
import {assert} from 'chai';
import {testSamples as samples} from './testsamples';

describe('compare',function(){

	it('it should return true when objectA matches object', ()=> {
		assert.equal(true, compare(samples.object,samples.objectA))
	});

	it('it should return false when objectB doesnt match object', ()=> {
		assert.equal(false, compare(samples.object,samples.objectB))
	})

	it('it should return true when arrayA matches array', ()=> {
		assert.equal(true, compare(samples.array,samples.arrayA))
	});

	it('it should return false when arrayB donest match array', ()=> {
		assert.equal(false, compare(samples.array,samples.arrayB))
	})

	it('it should return false when arrayC doesnt match array', ()=> {
		assert.equal(false, compare(samples.array,samples.arrayC))
	})

	it('it should return true when objectArrayA matches objectArray', ()=> {
		assert.equal(true, compare(samples.objectArray,samples.objectArrayA))
	});

	it('it should return false when objectArrayB dosent match objectArray', ()=> {
		assert.equal(false, compare(samples.objectArray,samples.objectArrayB))
	});

})