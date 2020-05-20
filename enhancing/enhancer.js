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

if (item.enhancement < 15){
return { ...item, enhancement: item.enhancement-5}
}
else{
  return { ...item, enhancement: item.enhancement-10 };
}


}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
