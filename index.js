// Add your functions here
function map(arr,f){
  const newArr = [...arr];
  for(const elm of newArr){
    elm = f(elm);
  }
  return newArr;
}
