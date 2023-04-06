// function recieves an array of numbers 
// test if the number is prime
// if it is prime, add it to a new array
// return the new array

function primeTextbooks (arr) {  
    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }
    return primeArray;
}

// does the 'isPrime' function work?

// ChatGPT solution:

function primeTextbooks (arr) {
    let primes = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isPrime = true;
      
      if (arr[i] < 2) {
        isPrime = false;
      } else {
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
          if (arr[i] % j === 0) {
            isPrime = false;
            break;
          }
        }
      }
  
      if (isPrime) {
        primes.push(arr[i]);
      }
    }
  
    return primes;
}

/*
In this implementation, we first initialize an empty array called primes to store the prime numbers. 
We then iterate over each number in the input array using a for loop.
Inside the loop, we first initialize a variable isPrime to true. 
We then check if the current number is less than 2. If it is, we know it is not prime, so we set isPrime to false. 
Otherwise, we use a nested for loop to test if the number is divisible by any integer from 2 up to its square root. 
If it is divisible by any of these integers, we know it is not prime, so we set isPrime to false and break out of the loop.
Finally, if isPrime is still true after the loop, we know that the number is prime, so we add it to the primes array using the push method.
After iterating over all the numbers in the input array, we return the primes array.
*/