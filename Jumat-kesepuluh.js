function tanggal(tanggal) {
  let bulan = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des']
  let method, i, tanggalSebenarnya, tmpTanggal, tanggal2
  for (i = 0; i < tanggal.length; i++) {
    if (tanggal[i] == '/') {
      method = "garing"
      break
    } else if (tanggal[i] == '-') {
      method = "strip"
      break
    } else if (tanggal[i] == " ") {
      method = "spasi"
      break
    }
  }

  if (method == 'garing') {
    // pecahkan string yang dibatasi oleh / menjadi beberapa bagian array
    let splitTanggal = tanggal.split("/")
    // Cek apakah index ke 0 lebih besar daripada index 1, jika iya maka masukkan sesuai dengan format tanggal
    if (Number(splitTanggal[0]) > Number(splitTanggal[1])) {
      tmpTanggal = [splitTanggal[1], splitTanggal[0], splitTanggal[2]].join("/")
      // Cek jika index 1 lebih besar daripada 12(bulan), maka return 0 karna melebihi batas 
      if (splitTanggal[1] > 12) return "Format " + tanggal + " TIDAK BISA"
      tanggalSebenarnya = new Date(tmpTanggal)
    } else {
      for (i = 1; i <= splitTanggal.length - 2; i++) {
        if (splitTanggal[i].length > 1) {
          for (let j = 0; j <= i; j++) {
            if (splitTanggal[i][j] == 0) {
              return "Format " + tanggal + " TIDAK BISA"
            } else {
              tanggalSebenarnya = new Date(tanggal)
            }
          }
        }
      }
    }
    // SPASI
  } else if (method == 'spasi') tanggalSebenarnya = new Date(tanggal)
  // STRIP
  else if (method == 'strip') {
    let splitTanggal = tanggal.split("-")
    for (let j = 0; j < splitTanggal.length; j++) {
      for (i = 0; i < bulan.length; i++) {
        if (bulan[i] == splitTanggal[j]) bulan = i + 1
      }
      if (splitTanggal[j].length == 2 && (Number(splitTanggal[j]) < Number(splitTanggal[2])) && !isNaN(splitTanggal[1])) {
        bulan = splitTanggal[1]
      }
      if (splitTanggal[j].length < 3 && (bulan != splitTanggal[j])) tanggal2 = splitTanggal[j]
      if (Number(splitTanggal[j]) < 12) bulan = splitTanggal[j]
      if (splitTanggal[j].length > 3) tahun = splitTanggal[j]
    }
    tmpTanggal = [tahun, bulan, tanggal2].join("-")
    tanggalSebenarnya = new Date(tmpTanggal)
  }
  
  if (((tanggalSebenarnya instanceof Date) === false) || (tanggalSebenarnya == "Invalid Date")) {
    return "Format " + tanggal + " TIDAK BISA"
  }
  return "Format " + tanggalSebenarnya + " BISA"
}

console.log("==============================================================")
console.log(tanggal("31 mar 2000")) // BISA

console.log("==============================================================")
console.log(tanggal("04/07/2010")) // TIDAK

console.log("==============================================================")
console.log(tanggal("1965-3-agu")) // BISA
