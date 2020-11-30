
const main = require("./main")


test("test 1",()=>{
    expect(1+1).toBe(2);
})

test("test 2",()=>{
    expect(main.Sum(1,2)).toBe(3)
})
//