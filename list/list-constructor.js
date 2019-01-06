'use strict';

// let util = require('util');

function List() {
  this.length = 0;
  this.data = {};
}

// Add item to the end of the list
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

// Remove an item from the end of the list and return it's value
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  if (this.length === 0) {
    return;
  }

  for (let i = 0; i < this.length-1; i++ ) {
    this.data[i] = this.data[i+1];
  }
  
  delete this.data[this.length-1];
  this.length--;
};

List.prototype.unshift = function(input) {

  let temp = [];

  for (let i = 0; i < this.length; i++){
    temp[i] = this.data[i];
  }

  this.data = {};
  this.length = 0;

  for (let i = 0; i < input.length; i++){
    this.data[i] = input[i];
    this.length++;
  }
  
  for (let i = 0; i < temp.length; i++){
    this.data[this.length] = temp[i];
    this.length++;
  }
};

List.prototype.splice = function(start, deleteCount){
  
  if (start === undefined) {return;}

  if (start < 0){
    start = 0;
  }

  if (deleteCount > this.length - start){
    deleteCount = this.length -start;
  }

  // delete elements that get shifted and store them 
  let stored = [];
  for (let i = start + deleteCount; i < this.length; i++){
    stored.push(this.data[i]);
    delete this.data[i];
  }
  this.length = this.length - stored.length;

  // delete deleted elements
  for (let i = 0; i < deleteCount; i++){
    delete this.data[start + i];
    this.length--;
  }
  // add new elements
  for (let i = 2; i < arguments.length; i++){
    this.push(arguments[i]);
  }

  // add stored elements
  for (let i = 0; i < stored.length; i++){
    this.push(stored[i]);
  }
  
};

List.prototype.slice = function(begin=0, end=this.length){

  if (begin > end){
    return [];
  }
  let result = [];

  if (end > this.length){
    end = this.length;
  }
  for(let i = begin; i < end; i++){
    result.push(this.data[i]);
  }

  return result;
};



module.exports = List;
