const wellOfIdeas = (arr) => {
  var goodIdeasCount = 0

  for (var i = 0; i < arr.length; i++){

    if(arr[i] === 'good'){
     goodIdeasCount++
    }
  }

  if(goodIdeasCount === 1  || goodIdeasCount === 2){
    return 'Publish!'
  }else if(goodIdeasCount > 2){
    return 'I smell a series!'
  }else if(goodIdeasCount === 0){
    return 'Fail!'
  }

}

console.log(wellOfIdeas(['bad', 'bad', 'bad', 'good', 'good', 'good']))