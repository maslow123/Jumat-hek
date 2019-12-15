// main ball on tube type A
function TubeTypeA(ball, counter) {
  if (ball.length < 1 || ball.length > 1000) {
    return console.log("The character must be 1 - 1000 character")
  }

  let rightHand, leftHand = 0
  let ballTypeS = ""
  let ballReplace = ball.replace(/\s/g, '')
  let tubeTypeA = []
  // replace space character from param
  for (let i = 0; i < ballReplace.length; i++) {
    tubeTypeA.push(ballReplace[i])
  }
  // check if tubeTypeA is available
  if (tubeTypeA.length > 0) {
    for (let i = 0; i < tubeTypeA.length; i++) {
      if (tubeTypeA.length == 1) {
        leftHand = tubeTypeA[i]
        TubeTypeB(leftHand)
        continue
      }
      // pass for the first ball taken from the right hand to the left hand
      if (i == 0) {
        leftHand = tubeTypeA[i]
        continue
      }
      rightHand = tubeTypeA[i]
      // if the ball in the right hand is bigger than the left hand then put the left hand ball into the tube type S
      if (parseInt(rightHand) > parseInt(leftHand)) {
        ballTypeS += leftHand + ' '
        leftHand = rightHand
        counter++
      } else {
        ballTypeS += rightHand + ' '
      }
    }
    // if ballTypeS still exists, send ballTypeS into the function BallTypeS
    if (ballTypeS.length > 0) {
      TubeTypeB(leftHand)
      return TubeTypeS(ballTypeS, counter)
    }
  }
  console.log('counter:', counter, ', Tube B:', stringTubeTypeB)
  tubeTypeB = []
}

// Ball on tube type S
function TubeTypeS(eliminateBall, counter) {
  let rightHand, leftHand = 0
  let arrayTubeTypeS = []
  let tubeTypeS = []
  let ballTypeA = ""
  let ball = eliminateBall.replace(/\s/g, '')
  for (let i = 0; i < ball.length; i++) {
    tubeTypeS.push(ball[i])
  }

  if (tubeTypeS.length > 0) {
    for (let i = tubeTypeS.length - 1; i >= 0; i--) {
      arrayTubeTypeS.push(tubeTypeS[i])
    }

    for (let i = 0; i < arrayTubeTypeS.length; i++) {
      if (tubeTypeS.length == 1) {
        leftHand = tubeTypeS[i]
        TubeTypeB(leftHand)
        continue
      }

      if (i == 0) {
        leftHand = arrayTubeTypeS[i]
        continue
      }
      rightHand = arrayTubeTypeS[i]

      if (parseInt(rightHand) > parseInt(leftHand)) {
        ballTypeA += leftHand + ' '
        leftHand = rightHand
        counter++
      } else {
        ballTypeA += rightHand + ' '
      }
    }

    if (ballTypeA.length > 0) {
      stringBallTypeA = ""
      for (let i = ballTypeA.length - 1; i >= 0; i--) {
        stringBallTypeA += ballTypeA[i]
      }
      TubeTypeB(leftHand)
      return TubeTypeA(stringBallTypeA, counter)
    }
  }
  console.log('counter:', counter, ', Tube B:', stringTubeTypeB)
  tubeTypeB = []
}

tubeTypeB = []
function TubeTypeB(resultBall) {
  let resultsBall = resultBall.replace(/\s/g, '')
  for (let i = 0; i < resultsBall.length; i++) {
    tubeTypeB.push(resultsBall[i])
  }
  stringTubeTypeB = ""
  for (let i = tubeTypeB.length - 1; i >= 0; i--) {
    stringTubeTypeB += tubeTypeB[i] + ' '
  }
  return stringTubeTypeB
}
TubeTypeA('7 2 5 9 1', 0) // 4
TubeTypeA('5 4 1', 0) // 1
TubeTypeA('9 1', 0) // 0
TubeTypeA('2 1', 0) // 0
TubeTypeA('') // invalid character