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



describe('FAIL()', ()=>{
  it('should accept an item object and return a new item object modified by rules ordained by client for enhancement fail', ()=>{
//  - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
//  - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
//  - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

    //setup
    let expected = {...testItem, durability: 8, enhancement:17}
    let initial = {...testItem, durability: 18, enhancement: 18}
    //execute
    let actual = enhancer.fail(initial)
    //check
    expect(actual.enhancement).toBe(expected.enhancement)
    expect(actual.durability).toBe(expected.durability)

  })
})

describe('REPAIR()', ()=>{
  it('should accept an item object and return a new item object modified by rules ordained by client for enhancement success', ()=>{
    //setup
    let expected = {...testItem, durability: 100}
    let initial = {...testItem, durability: 6}
    //execute
    let actual = enhancer.repair(initial)
    //check
    expect(actual.durability).toBe(expected.durability)
  })
})



// describe('GET()', ()=>{
//   it('should accept an item object and return a new item object modified by rules ordained by client for enhancement success', ()=>{
//     //setup
//     let expected = {...testItem, enhancement: 20}
//     let initial = {...testItem, enhancement: 19}
//     //execute
//     let actual = enhancer.succeed(initial)
//     //check
//     expect(actual.enhancement).toBe(expected.enhancement)
//   })
// })