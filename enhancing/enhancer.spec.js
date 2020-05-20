const enhancer = require('./enhancer.js');
// test away!

let testItem = {
  name:"club",
  durability:0,
  enhancement:0
}

describe('succeed()', ()=>{
  it('should accept an item object and return a new item object modified by rules ordained by client for enhancement success', ()=>{
    //setup
    let expected = {...testItem, enhancement: 20}
    let initial = {...testItem, enhancement: 19}
    //execute
    let actual = enhancer.succeed(initial)
    //check
    expect(actual.enhancement).toBe(expected.enhancement)
  })
})