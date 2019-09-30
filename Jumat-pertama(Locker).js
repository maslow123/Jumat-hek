let checkPattern = input => {
  let statusOk = {
    1: [2, 4, 5],
    2: [3, 1, 4, 6, 5],
    3: [2, 5, 6],
    4: [1, 2, 5, 8, 7],
    5: [1, 2, 3, 4, 9, 7, 8, 6],
    6: [2, 3, 5, 8, 9],
    7: [4, 5, 8],
    8: [7, 4, 5, 6, 9],
    9: [5, 6, 8]
  };
  // Nilai awal
  let result = true;
  // Cek terlebih dahulu apakah pola kurang dari 5 atau lebih dari 7 maka status akan false
  if (input.length < 5 || input.length > 7) return false;

  for(let i in input) {
    if (parseInt(i) === 0) continue;
    let foundPattern = false;
    for (let j in statusOk[input[i - 1]]) {
      // Cek jika ada data yang sama pada data statusOk maka nilai menjadi true
      if (parseInt(input[i]) !== statusOk[input[i - 1]][j]) {
        continue;
      }
      foundPattern = true;
    }
    if (!foundPattern) {
      result = false;
      break;
    }
    continue;
  }
  return result
}
console.log(checkPattern('123456')); // false
console.log(checkPattern('456987')); // true