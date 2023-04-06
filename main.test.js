//👉 Write your tests below here:

// write arrays with mix of prime and non-prime
// solutions should only be arrays with prime numbers in
    // EDGE CASES
    // include an array with just primes (return them all)
    // include an array with just non-primes (should return empty array)
    // include a blank array (should reutrn a blank array)
    // include an array with multiples of the same prime (should return all the multiples)



Test.assertEquals 
describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
      assert.deepEqual(primeTextbooks([1,2,3,4,5,6,7,8,9,10]), [2,3,5,7]);
      assert.deepEqual(primeTextbooks([2, 7, 12, 17, 21, 29, 31]), [2, 7, 29, 31]);
      assert.deepEqual(primeTextbooks([7, 12, 17, 22, 27, 33, 43]), [7, 17, 43]);
      assert.deepEqual(primeTextbooks([41, 76, 111, 146, 179, 214, 251]), [41, 179, 251]);
      assert.deepEqual(primeTextbooks([79, 114, 149, 186, 227, 262, 293]), [79, 149, 227, 293]);
      assert.deepEqual (primeTextbooks([523, 881, 1298, 1867, 2281, 2663, 3023, 3547, 4079, 4637]), [523, 881, 1867, 2281, 3547, 4079, 4637]);





/* CodeWars Sample Tests 
const Test = require('@codewars/test-compat');

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
  })
})
*/