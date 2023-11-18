function transformArrayDeclarative(arr, transformFunction) {
  return arr.map(transformFunction);
}

function transformArrayImperative(arr, transformFunction) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(transformFunction(arr[i]));
  }
  return result;
}
