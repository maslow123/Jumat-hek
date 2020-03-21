function himpunan(data) {
    let a = []
    let b = []
    let reverse = []
    let tempA = []
    let tempB = []
    let split = false
    dataSplit = data.split(' ');
    // Ambil data satu persatu
    for (let i = 0; i < dataSplit.length; i++) {
        for (let j = 0; j < dataSplit[i].length; j++) {
            if (dataSplit[i][j] == '-') {
                split = true
            }
        }
        if (split) {
            tempB.push(dataSplit[i])
        } else {
            tempA.push(Number(dataSplit[i]))
        }
    }
    // ambil index pertama dari komponen B, dan pisahkan strip
    let splitB = tempB[0].split("-")
    tempA.push(Number(splitB[0]))
    tempB[0] = Number(splitB[1])
    let pos = 0
    let min = tempB[0]
    let max = min
    for (let i = 0; i < tempB.length; i++) {
        for(let j =0; j < tempB.length; j++) {
            if(tempB[j] != null) {
                if(min > Number(tempB[j])) {
                    min = Number(tempB[j])
                    pos = j
                }
            }
        }
        reverse[i] = min
        tempB[pos] = null
        min = max
    }
    for(let i = reverse.length - 1; i >= 0; i--) {
        b.push(reverse[i])
    }
    // ======================================================
    min = tempA[0]
    max = min
    if((Number(tempA[0]) < Number(tempA[1])) && (Number(tempA[1]) < Number(tempA[2]))) {
        a = tempA
    } else {
        for (let i = 0; i < tempA.length; i++) {
            for(let j =0; j < tempA.length; j++) {
                if(tempA[j] != null) {
                    if(min > Number(tempA[j])) {
                        min = Number(tempA[j])
                        pos = j
                    }
                }
            }
            a[i] = min
            tempA[pos] = null
            min = max
        }
    }
    if(a.length !== b.length) {
        return false
    }

    // Time to calculate the difference
    let result = 0
    for(let i=0; i < a.length; i++) {
        if(a[i] > b[i]) {
            console.log('A > B : ',a[i],'-',b[i],'=',a[i]-b[i])
            result += (a[i] - b[i])
        } else {
            console.log('B > A : ',b[i],'-',a[i],'=',b[i]-a[i])
            result += (b[i] - a[i])
        }
    }    
    return result
}

// console.log(himpunan('1 2 3 4-10 2 8 1')) // 19
console.log(himpunan('1 2 3 4-1 2 3 4')) // 19
// console.log(himpunan('5 5 1-2 1 0')) // 10
// console.log(himpunan('10 20 30-0 0 0')) // 60

// console.log(himpunan('10 20-10 50')) // 60