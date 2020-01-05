function mineSweeper(value) {
  let i, trap = 0, numbers = []
  let numberSplit = value.split(" ")

  // Make a loop to get all numberSplit values
  for(i = 0; i < numberSplit.length; i++) {
    numbers.push(numberSplit[i])
    // cek kondisi number, apabila number bernilai 1, tambah 1 untuk variabel ranjau
    if (Number(numberSplit[i]) == 1) {
      // check number condition, if number is 1, add 1 for mine variable
      if(numbers.length > 0 &&  numbers[i] == "R") {
        continue
      } else {
        numbers.push("R")
        trap++
      }
    }
    // check number condition, if number is 2, add 2 for mine variable and place it to the left and right of number 2
    if (Number(numberSplit[i]) == 2) {
      // check that the number is not 1, if not add the mines to the left before the number 2
      if(Number(numbers[i]) != 1) {
        numbers.splice(i, 0, "R")
        trap++
      }  
      numbers.push("R")
      trap++
    }
  }
  return trap
}
console.log("======================")
console.log(mineSweeper("0 1 1 0 0 0 0")) // 1
console.log("======================")
console.log(mineSweeper("1 0 0 0 0 0 1 2 1 0")) // 3
console.log("======================")
console.log(mineSweeper("0 0 2")) // 2
console.log("======================")
console.log(mineSweeper("0 0 0 0 0 0 0 0 0 0")) // 0