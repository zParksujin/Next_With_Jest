const myMockFn = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => console.log(val));

jest.mock("../utils/foo"); // this happens automatically with automocking
const foo = require("../utils/foo");

// foo is a mock function

test("test", () => {
  foo.mockImplementation(() => 42);
  console.log(foo());
  foo();

  const myMockFn = jest
    .fn()
    .mockImplementationOnce((cb) => cb(null, true))
    .mockImplementationOnce((cb) => cb(null, false));

  myMockFn((err, val) => console.log(val));
  // > true

  myMockFn((err, val) => console.log(val));
  // > false
});

test("test1", () => {
  const myMockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call");

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
});

// mocking name

test("test2", () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation((scalar) => 42 + scalar)
    .mockName("add42");

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

  //   // 모의 함수가 적어도 한 번 호출되었습니다.
  //   expect(myMockFn).toHaveBeenCalled();

  //   // 모의 함수가 지정된 인수로 한 번 이상 호출되었습니다.
  //   expect(myMockFn).toHaveBeenCalledWith(arg1, arg2);

  //   // 모의 함수에 대한 마지막 호출은 지정된 인수로 호출되었습니다.
  //   expect(myMockFn).toHaveBeenLastCalledWith(arg1, arg2);

  //   // 모든 호출과 모의 이름은 스냅샷으로 작성됩니다.
  //   expect(myMockFn).toMatchSnapshot();
});
