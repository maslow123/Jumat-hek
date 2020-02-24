function garis(data) {
    let tempGh = [], gv = [], gh = []
    let counter = 0, potong = false, stop = false, x = [], y = []

    let dataSplit = data.split(" ")

    // Ambil data satu persatu
    for (let i = 0; i < dataSplit.length; i++) {
        for (let j = 0; j < dataSplit[i].length; j++) {
            if (dataSplit[i][j] == '-') {
                potong = true
            }
        }
        if (potong) {
            tempGh.push(dataSplit[i])
        } else {
            gv.push(dataSplit[i])
        }
    }
    // ambil index pertama dari Garis Horizontal, dan pisahkan strip
    let splitGh = tempGh[0].split("-")
    gv.push(splitGh[0])
    gh.unshift(splitGh[1])
    for (let i = 1; i < tempGh.length; i++) {
        gh.push(tempGh[i])
    }
    console.log('GH========', gh)
    console.log('GV========', gv)
    // ========== lakukan perulangan untuk mendapatkan nilai x dan y

    

    // =========== lakukan perulangan lagi, apabila ada titik yang sama maka counter bertambah 1
    console.log("----------------------")
    console.log('\n\nX========', x)
    console.log('\n\nY========', y)
    console.log("COUNTER ====", counter)
    console.log("----------------------")
    return counter;
}

// garis("2 2 2-10 10 10") // 6
// garis("1 1-100") // 2
// garis("2 4 1 2 5 3-3 2 3 1") // 6
garis("1 1-1 1") // 1