function fib(num){
    // add whatever parameters you deem necessary - good luck!
    
      if(num < 2) {
          return num;
      }
      else {
          return fib(num-1) + fib(num - 2);
            //   fib(4) --5       +         fib(3) --3
            //      fib(3)+fib(2)           fib(2) + fib(1)
      }
  }


//   fib(3)          +          fib(2)
//     fib(2) + fib(1)           fib(1) + fib(0)
//        fib(1) + fib(0)

// Time Complexity - O(2^n)

console.log(fib(8));

// A MEMOIZED SOLUTION
function fibMemo(n, memo=[]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

// Time Complexity - O(n)

console.log(fibMemo(12));

// TABULATED VERSION
function fibTable(n) {
  if (n <= 2) return 1;
  let fibNums = [0,1,1];
  for (let i=3; i<=n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}

console.log(fibTable(10));