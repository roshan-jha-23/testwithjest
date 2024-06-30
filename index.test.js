const { sum, myFunction, fetchData, fetchPromise } = require("./index.js");

test("add 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
test("zero is falsy", () => {
  const n = 0;
  expect(n).toBeFalsy();
});
test("1 is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

test("throws on invalidty", () => {
  expect(() => {
    myFunction(8);
  }).toThrow();
});
test("Data is downlaoding", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("data");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
test('the data is databro',()=>{
    return expect(fetchPromise()).resolves.toBe('databro');
})
test('the fetch failswith an error',()=>{
    return expect(fetchPromise()).rejects.toThrow('error');
})

test('the data is databro',async()=>{
       const data=await fetchPromise();
       expect(data).toBe('databro');
})
// const mockCallBack=jest.fn(x=>42+x);
// mockCallBack(0);
// mockCallBack(1);
test('mock implemantation of a basic fn',()=>{
  const mockCallBack=jest.fn(x=>42+x);
  expect(mockCallBack(1)).toBe(43);
  expect(mockCallBack).toHaveBeenCalledWith(1,2);
})

test('spying on a method of an object',()=>{
  const vid={
    play(){
      return true;
    }
  }
  const spy=jest.spyOn(vid,'play');
  vid.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
})
// > jest-course@1.0.0 test
// > jest

//  FAIL  ./index.test.js
//   √ add 1+2 to equal 3 (3 ms)
//   √ two plus two is four
//   √ object assignment (1 ms)                                                        
//   √ zero is falsy                                                                   
//   √ 1 is truthy                                                                     
//   √ throws on invalidty (7 ms)                                                      
//   √ Data is downlaoding (1005 ms)                                                   
//   √ the data is databro (1016 ms)                                                   
//   × the fetch failswith an error (1013 ms)                                          
//   √ the data is databro (1014 ms)                                                   
//   × mock implemantation of a basic fn (2 ms)                                        
//   √ spying on a method of an object (1 ms)                                          
                                                                                    
//   ● the fetch failswith an error                                                    
                                                                                    
//     expect(received).rejects.toThrow()

//     Received promise resolved instead of rejected
//     Resolved to value: "databro"

//       43 | })
//       44 | test('the fetch failswith an error',()=>{
//     > 45 |     return expect(fetchPromise()).rejects.toThrow('error');
//          |            ^
//       46 | })
//       47 |
//       48 | test('the data is databro',async()=>{

//       at expect (node_modules/expect/build/index.js:113:15)
//       at Object.expect (index.test.js:45:12)

//   ● mock implemantation of a basic fn

//     expect(jest.fn()).toHaveBeenCalledWith(...expected)

//     Expected: 1, 2
//     Received: 1

//     Number of calls: 1

//       56 |   const mockCallBack=jest.fn(x=>42+x);
//       57 |   expect(mockCallBack(1)).toBe(43);
//     > 58 |   expect(mockCallBack).toHaveBeenCalledWith(1,2);
//          |                        ^
//       59 | })
//       60 |
//       61 | test('spying on a method of an object',()=>{

//       at Object.toHaveBeenCalledWith (index.test.js:58:24)

// Test Suites: 1 failed, 1 total                                                      
// Tests:       2 failed, 10 passed, 12 total                                          
// Snapshots:   0 total
// Time:        4.663 s, estimated 5 s
// Ran all test suites.