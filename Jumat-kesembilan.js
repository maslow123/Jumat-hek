function vim(words) {
  let mode = [],
      word = [],
      counter = 1
  let splitWord=words.split(" ")
  let start = 1
  // cek apakah dari kata pertama ada huruf selain h,l,w,b
  for(let i=0; i < splitWord[0].length; i++) {
    if(splitWord[0][i] != "h" && splitWord[0][i] != "l" && splitWord[0][i] != "w" && splitWord[0][i] != "b") {
      continue
    }
    mode.push(splitWord[0][i])
  }
  splitWord.splice(0, 1) // delete mode from user input
  for(let c =0; c < splitWord.length; c++) {
    if(c != splitWord.length - 1) {
      splitWord[c] = splitWord[c] + " "
    }
  }
  for (let a=0; a < splitWord.length; a++) {
    for( let b= 0; b < splitWord[a].length; b++) {
      word.push(splitWord[a][b])
    }
  }

  for(let m=0; m < mode.length; m++) {
    str = ""
    if(mode[m] == "l") {
      for(let w=m; w < word.length - 1; w++) {
        str += word[w + 1] 
      }
      counter = counter > word.length ? word.length : counter + 1
    } else if(mode[m] == 'h') {
      for(let w=word.length - 1; w > m; w--) {
        str += word[w - 1] 
      }
      counter = "0" ? 1 : counter - 1
    } else if(mode[m] == 'w') {
      for(let i = 0; i < word.length; i++) {
        str += word[i]
      }
      let newStr = ""
      wordNow = str.slice(counter)
      let splitWordNow = wordNow.split(" ")
      if(splitWordNow.length == 1) {
        return counter
      }
      splitWordNow.splice(0,1)
      for(let i = 0; i < splitWordNow.length; i++) {
        splitWordNow[i] = splitWordNow[i] + " "
        newStr += splitWordNow[i]
      }
      counter = str.length - newStr.length + 2
      // =========== B
    } 
  }
  return counter
}
console.log(vim("llll aku mau hidup seribu tahun lagi")) // 5
console.log(vim("h aku mau hidup seribu tahun lagi")) // 1
console.log(vim("llllllllwwwwwwwwww aku mau hidup seribu tahun lagi")) // 28
