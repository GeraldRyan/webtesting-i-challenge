module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// let item = {
//   name:0,
//   durability:0,
//   enhancement:0
// }

function succeed(item) {

  if (item.enhancement !== 20){
    return { ...item, enhancement: item.enhancement+1 };
  }
  else {
    return {...item}
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
