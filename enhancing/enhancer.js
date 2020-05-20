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
  return { ...item, enhancement: item.enhancement++ };
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
