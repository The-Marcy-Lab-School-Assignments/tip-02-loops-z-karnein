// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here
  let total = 0;
  
  for (let i = 1; i <= n; i++){
     let sqr = i * i;
     console.log(sqr)
    total += i;
   

  }
    return total;
  

}
// printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
printSquareNumbers(5)


// 1 × 1 = 1
// - 2 × 2 = 4
// - 3 × 3 = 9