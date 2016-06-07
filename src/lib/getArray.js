function getArray(len) {
  if (typeof len === undefined) len = 1000;
  var arr = [];
  for(var i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
}

module.exports = {
  default: getArray
}
