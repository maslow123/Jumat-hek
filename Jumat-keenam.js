// Make original data to determine initial values
let originalData = [
  60, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
]

function rotator(type, rotateData) {
  for (let rotate = 0; rotate < rotateData.length; rotate++) {
    for (let i = 0; i < rotateData.length; i++) {
      tempData.push(rotateData[i])
    }
    let i, temp
    temp = type === 'i' ? originalData[originalData.length - 1] : originalData[0]
    // Check 2 characters from the final value == 1 character from the final value
    let match = tempData[tempData.length - 2] === tempData[tempData.length - 1] ? true : false
    if (match) {
      if (type === "i") {
        // If the match value is true and the type is "i", then the value decreases by 1
        for (i = originalData.length - 1; i >= 0; i--) {
          originalData[i] = originalData[i - 1]
        }
        originalData[rotate] = temp
      } else if (type === "a") {
        // If the match value is true and the type is "a", then the value increases by 1
        for (i = 0; i < originalData.length; i++) {
          originalData[i] = originalData[i + 1]
        }
        originalData[i - 1] = temp
      }
    }
  }
}

function rotating(data) {
  // Make a variable for temporary data
  tempData = []
  let type, counter
  // Data can't be more than 1000 or less than 1 character
  if (data.length > 1000 || data.length < 1) return false

  for (let i = 0; i < data.length; i++) {
    type = data[i]
    rotator(type, data[i])
    // Get the first array value
    counter = originalData.slice(0, 1)
  }
  // Return the original updated Data value
  originalData = [
    60, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
  ]
  return counter[0]
}
console.log(rotating("aiaiaiaiaiaiaiai")) // 60
console.log(rotating("aaaaaaaaaaaaaaaaaaaaaa")) // 21
console.log(rotating("aaiiaa")) // 1
console.log(rotating("")) // false