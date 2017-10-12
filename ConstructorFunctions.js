// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: x and y parameters, which it should save
// to properties of the same name. Give the Vector prototype two methods,
// plus and minus, that take another vector as an argument
// and returns a new vector that has the sum or difference of the two vectors’
// (the one in this and the parameter) x and y values.
// Add a method getLength to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(obj) {
  this.x = this.x + obj.x;
  this.y = this.y + obj.y;
  return this;
}

Vector.prototype.minus = function(obj) {
  this.x = this.x - obj.x
  this.y = this.y - obj.y
  return this;
}

Vector.prototype.getLength = function() {
  var a = Math.pow(this.x, 2);
  var b = Math.pow(this.y, 2);
  var sum = a + b;
  var c = Math.sqrt(sum);
  return c;
}

var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
var v3 = new Vector(3, 4);
