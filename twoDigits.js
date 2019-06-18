function twoDigits(num) {

  let numString = num.toString()
  let newNum = numString.split('')
 
  return parseInt(newNum[0]) + parseInt(newNum[1]);
}
