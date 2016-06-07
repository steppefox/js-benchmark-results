var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var getArray = require('./lib/getArray').default;
var arr = getArray(10000);

console.log('Array Length: ', arr.length);

// add tests
suite
.add('Loop#for', function() {
  for(var i = 0, l = arr.length; i < l; i++) {

  }
})
.add('Loop#while', function() {
  i = arr.length;
  while (i--) {

  }
})
.add('Loop#forIn', function() {
  for(var i in arr) {

  }
})
.add('Loop#map', function() {
  arr.map(function(item, index){

  })
})
.add('Loop#mapWithArrow', function() {
  arr.map((item, index) => {

  })
})
.add('Loop#mapDefinedFunc', function() {
  function someFunc(item, index) {

  }
  arr.map(someFunc)
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
