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

function succeed(item)
{

  if (item.enhancement !== 20)
  {
    return { ...item, enhancement: item.enhancement + 1 };
  }
  else
  {
    return { ...item }
  }
}

function fail(item)
{


  if (item.enhancement > 16)
  {
    return { ...item, enhancement: item.enhancement - 1, durability: item.durability - 10 }
  }
  else if (item.enhancement < 15)
  {
    return { ...item, durability: item.durability - 5 }
  }
  else
  {
    return { ...item, durability: item.durability - 10 };
  }


}

function repair(item)
{
  return { ...item, durability: 100 };
}

function get(item)
{
  return { ...item };
}
