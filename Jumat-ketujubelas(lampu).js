/*
 Kisi-kisi : 
 =======================================
 1 baris terdiri 2 angka. 
 Angka pertama : Jumlah lampu
 Angka kedua : Berapa kali saklra ditekan
 ========================================
 contoh kasus 
 Data : 10, 4
 Jumlah lampu yang menyala ada 6 lampu = 1, 4, 5, 6, 7, dan 8
 ========================================
  - Kondisi awal semua lampu adalah mati, pertama kali ditekan, semua lampu yang BERKELIPATAN 1 akan menyala(menyala semua)
  - Ketika ditekan yang kedua kali, maka yang melakukan aksi adalah lampu yang berkelipatan 2(bila menyala akan mati, bila yang mati akan menyala)
  - Begitupun seterusnya
*/
function lamp(data) {
    let lamp = []
    let pressSwitch = []
    let numberOfLights = data.split(' ')[0]
    let numberOfSwitch = data.split(' ')[1]
    if ( (Number(numberOfLights) < 1 || Number(numberOfLights) > 1000) || (Number(numberOfSwitch) < 1 || Number(numberOfSwitch) > 500) ) {
        return "Error"
    }
    for (let i = 1; i <= Number(numberOfLights); i++) {
        lamp.push({
            number: i,
            status: false
        })
    }
    for (let i = 1; i <= Number(numberOfSwitch); i++) {
        pressSwitch.push(i)
    }
    for (let i = 0; i < pressSwitch.length; i++) {
        for (let j = 0; j < lamp.length; j++) {
            if (lamp[j].number % pressSwitch[i] == 0) {
                lamp[j].status = !lamp[j].status
            }
        }
    }
    return lamp.filter(val => val.status === true).length
}

console.log(lamp('4 1')); // 4
console.log(lamp('10 4')) // 6
console.log(lamp('10 3')) // 4
console.log(lamp('0 501')) // error
console.log(lamp('1001 3')) // error