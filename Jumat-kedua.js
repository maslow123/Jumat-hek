function reverseWord(str) {
  let newString = "";
  let result= "";
  let splitString=""

  if(str.length < 3) {
    return false
  }
  for (let i = str.length - 1; i >= 0; i--) { 
      newString += str[i];
  }
  splitString = newString.split(" ");
  for( let j = splitString.length -1; j>= 0; j--) {
    result += splitString[j]+ " ";
  }
  return str+" = "+ result  
}

console.log(reverseWord('KITA AKAN PERGI'))
console.log(reverseWord('melati dari jayagiri'))
console.log(reverseWord('badai pasti berlalu'))
console.log(reverseWord('bulan tertusuk ilalang'))
console.log(reverseWord('oa')) // false