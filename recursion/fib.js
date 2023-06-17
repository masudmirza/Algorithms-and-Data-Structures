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

console.log(fib(8));