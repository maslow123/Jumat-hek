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

    for (let i = 0; i < gv.length; i++) {
        x.push({
            key: i + 1,
            keatas: Number(gv[i])
        })
    }

    for (let i = 0; i < gh.length; i++) {
        y.push({
            key: i + 1,
            kesamping: Number(gh[i])
        })
    }
    for (let i = 0; i < y.length; i++) {
        let boo = []
        for (let j = 1; j <= y[i].kesamping; j++) {
            boo.push(j)
        }
        y[i].kesamping = boo
    }

    for (let i = 0; i < x.length; i++) {
        let boo = []
        for (let j = 1; j <= x[i].keatas; j++) {
            boo.push(j)
        }
        x[i].keatas = boo
    }

    // =========== lakukan perulangan lagi, apabila ada titik yang sama maka counter bertambah 1
    for (let i = 0; i < x.length; i++) {
        // lakukan perulangan untuk mengambil nilai KEATAS
        for (let j = 0; j < x[i].keatas.length; j++) {
            console.log(x[i].key, '=================== MASOOKKK') // 1 2
            for(let k=0; k < y.length; k++) {
                console.log(y[k].key, '=================== BLE')
                if(x[i].key == y[k].kesamping[j] || x[i].keatas[j] == y[k].kesamping[j]) {
                    console.log('masuk',x[i].key,'==', y[j].kesamping[j] )
                    counter++
                }
            }
        }
        if(stop) { break }
    }
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