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