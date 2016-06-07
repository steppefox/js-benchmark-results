# js-benchmark-results
Just personal collection of JavaScript benchmarks in NodeJS 4.x

# Loops

Array Length:  10 000

* Loop#for x 170,983 ops/sec ±1.40% (77 runs sampled)
* Loop#while x 34,112 ops/sec ±1.22% (74 runs sampled)
* Loop#forIn x 706 ops/sec ±1.34% (78 runs sampled)
* Loop#map x 5,053 ops/sec ±1.95% (78 runs sampled)
* Loop#mapWithArrow x 5,054 ops/sec ±1.78% (80 runs sampled)
* Loop#mapDefinedFunc x 5,030 ops/sec ±1.88% (80 runs sampled)

Fastest is Loop#for
