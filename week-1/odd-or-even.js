function oddOrEven(arr) {
  const sum = arr.reduce((previousSum, a) => previousSum + a, 0);

  if(sum % 2 == 0){
    return 'even'
  }else{
    return 'odd'
  }
}

console.log(oddOrEven([6, 3, 3]))