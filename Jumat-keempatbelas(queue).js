function queue(data) {
    let dataSplit = data.split(' ')
    let realData = []
    for(let i=0; i< dataSplit.length;i++) {
      realData.push(Number(dataSplit[i]))
    }
    let cutters = realData[0]
    let counter = 0, time = 0, comparison = 0
  
    for(let i=0; i < data.length; i++) {
        counter++
        comparison = realData[counter]
        if (counter >= realData.length) break
        if(cutters == 1 && i == data.length - 1) {
            return realData[counter]
        } else {
            for(let j=0; j < cutters; j++) {
                if (counter == realData.length - 1) {
                    comparison = realData[counter]
                    break
                } else if(realData[counter + j] > comparison ) {
                    comparison = realData[counter+j]
                }
                counter += j
            }
            time += comparison
          }
    }
    return time
  }
  console.log(queue('3 10 10')) // 10
  console.log(queue('2 5 5 5 5 5 5')) // 15
  console.log(queue('1 10 10 5 4')) // 29