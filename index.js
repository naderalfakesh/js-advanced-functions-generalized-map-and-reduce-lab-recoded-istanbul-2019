// Add your functions here
function map(arr,f){
  const newArr = [...arr];
  for(let i=0 ; i > newArr.length ; i++ ){
    newArr[i] = f(elm);
  }
  return newArr;
}
