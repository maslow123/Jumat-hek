function throughNumber(firstNumber,missingNumber,lastNumber) {
  let string = '';
  for(let i = firstNumber; i <= lastNumber; i++) {
    if(missingNumber === i) continue;
    string += i;
  }
  return string
}

console.log(throughNumber(23,29,30)); // Di mulai dari angka 23, dan angka yang hilang yaitu 29, serta di akhiri dengan angka 30
console.log(throughNumber(101,110,113));// Di mulai dari angka 101, dan angka yang hilang yaitu 110, serta di akhiri dengan angka 113
console.log(throughNumber(1,5,10));// Di mulai dari angka 1, dan angka yang hilang yaitu 5, serta di akhiri dengan angka 10