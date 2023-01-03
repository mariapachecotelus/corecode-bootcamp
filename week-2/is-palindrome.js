const isPalindrome = (str) => {
  let str1 = str.toString()
  var reg = /[^A-Za-z0-9]/g

  str1 = str1.toLowerCase().replace(reg, '')
  var len = str1.length

  for (var i = 0; i < len/2; i++){
    if(str1[i] !== str[len - 1 - i]){
      return 'is not palindrome'
    }
  }
  return 'is palindrome'
}

console.log(isPalindrome('anna'))
