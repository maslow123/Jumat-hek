function lift(opt) {
  let min = 1 // min floor 1
  let max = 100 // max floor 100

  let optReplace = opt.replace(" ", "") // remove character space from param value
  let action = 1 

  for (let i = 0; i < optReplace.length; i++) {
    if (optReplace[i] == 0) {
      continue;
    }
    // Check whether the elevator is going up or down
    if (optReplace[i] < min) {
      action = 0
    } else {
      action = 1
    }

    // check whether the selection is greater than the minimum limit
    if (optReplace[i] > min && action == 1) {
      min = Number(optReplace[i])
    } else if (optReplace[i] < max && action == 0) {
      max = Number(optReplace[i])
    }
  }

  // check again if action = minimum limit, return action
  if (action === min) return action
  return max
}

console.log(lift("0 1 0 0 0"))
console.log(lift("2 5 0 0 4"))
console.log(lift("0 0 0 0 0"))