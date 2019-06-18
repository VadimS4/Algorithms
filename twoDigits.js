function twoDigits(num) {

  let numString = num.toString()
  let newNum = numString.split('')
 
  return parseInt(newNum[0], 10) + parseInt(newNum[1], 10);
}
