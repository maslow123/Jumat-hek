let originalData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function rotator(directions, many) {
  for (let rotate = 0; rotate < many; rotate++) {
    let i,temp
    temp = directions === 'right' ? originalData[originalData.length - 1] : originalData[0] 
    if (directions === "right") {
      for (i = originalData.length - 1; i >= 0; i--) {
        originalData[i] = originalData[i - 1]
      }
      originalData[0] = temp
    } else {
      for (i = 0; i <= originalData.length - 1; i++) {
        originalData[i] = originalData[i + 1]
      }
      originalData[i - 1] = temp
    }
  }
}
function rotating(rotate) {
  let directions;
  let tempData = []
  let counter = 0
  if (rotate.length > 100 || rotate.length <= 0) return false;

  for (let i = 0; i <= rotate.length - 2; i++) {
    tempData.push(rotate[i + 1])
  }

  for (let i = 0; i <= rotate.length - 2; i++) {
    rotator(directions, rotate[i])
    if (originalData[1] !== parseInt(tempData[i])) {
      directions = "right"
      counter++
    } else {
      directions = "left"
    }
    originalData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  return counter
}

console.log(rotating('')) // false
console.log(rotating("12345")) // 0
console.log(rotating("2121")) // 3