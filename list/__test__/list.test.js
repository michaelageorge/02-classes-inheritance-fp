'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('shifts items off the front', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    stuff.shift();
    expect(stuff.length).toEqual(3);
    expect(stuff.data).toEqual({0:'b', 1:'c', 2:'d'});
  });

  it('unshifts items to the front', () => {
    let stuff = new List();
    stuff.data = { '0': 'a', '1': 'b', '2': 'c' };
    stuff.length = 3;

    stuff.unshift(['x', 'y', 'z']);
    
    expect(stuff.length).toEqual(6);
    expect(stuff.data).toEqual({0:'x', 1:'y', 2:'z', 3:'a', 4:'b', 5:'c'});
  });

});

describe('List data structure splice method', () => {

  it('correctly deletes 0 items ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    let expected = { 
      length: 4, 
      data: {'0': 'a', '1': 'b', '2': 'c', '3': 'd',
      },
    };
    stuff.splice(2,0);
    expect(expected).toEqual(stuff);
  });

  it('correctly deletes 1 items ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    let expected = { 
      length: 3, 
      data: {'0': 'a', '1': 'b', '2': 'd'},
    };
    stuff.splice(2,1);
    expect(expected).toEqual(stuff);
  });

  it('correctly deletes 2 items ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');

    let expected = {
      length: 1, 
      data: {
        '0': 'a',
      },
    };
    stuff.splice(1,2);
    expect(expected).toEqual(stuff);
  });

  it('inserts items', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');

    let expected = {
      length: 6, 
      data: {'0': 'a', '1': 'b', '2': 'c', '3': 'seven','4': 'six', '5': 'two'},
    };
    stuff.splice(3, 0, 'seven', 'six', 'two');
    expect(expected).toEqual(stuff);
  });

  it('inserts and deletes items', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');

    let expected = {
      length: 4, 
      data: {'0': 'a', '1': 'seven', '2': 'six','3': 'two'},
    };
    stuff.splice(1, 2, 'seven', 'six', 'two');
    expect(expected).toEqual(stuff);
  });

  it('handles no parameters', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');

    let expected = {
      length: 3, 
      data: {'0': 'a', '1': 'b', '2': 'c'},
    };
    stuff.splice();
    expect(expected).toEqual(stuff);
  });

  it('handles too high a delete count', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');

    let expected = {
      length: 1, 
      data: {
        '0': 'a',
      },
    };
    stuff.splice(1,100);
    expect(expected).toEqual(stuff);
  });

  it('handles negative start', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');

    let expected = {
      length: 0, 
      data: {
      },
    };
    stuff.splice(-1,100);
    expect(stuff).toEqual(expected);
  });
});


describe('List data structure slice method', () => {

  it('correctly slices 0 items ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    let expected = [];
    let result = stuff.slice(2,0);
    expect(result).toEqual(expected);
  });

  it('correctly slices 1 items ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    let expected = ['c'];
    let result = stuff.slice(2,3);
    expect(result).toEqual(expected);
  });

  it('returns [] on begin > end ', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');

    let expected = [];
    let result = stuff.slice(3,1);
    expect(result).toEqual(expected);
  });

  it('on no parameters returns whole list', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');


    let expected = ['a', 'b'];
    let result = stuff.slice();
    expect(result).toEqual(expected);
  });

  it('handles too high of end', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    let expected = ['a', 'b'];
    let result = stuff.slice(0,100);
    expect(result).toEqual(expected);
  });
});