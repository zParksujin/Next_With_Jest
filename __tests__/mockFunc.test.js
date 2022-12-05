function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe("forEachTest1", () => {
  test("forEach", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    // 모의 함수가 두 번 호출 됩니다
    forEach([0, 1], mockCallback);
    // console.log(mockCallback.mock);
    expect(mockCallback.mock.calls.length).toBe(2);

    // 함수에 대한 첫 번째 호출의 첫 번째 인자는 0 이었음
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 함수에 대한 두 번째 호출의 첫 번째 인자는 1 이었음
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 함수에 대한 첫 번째 호출의 반환 된 값은 42 이었음
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});

describe("forEachTest2", () => {
  test("forEach", () => {
    const mockCallback = jest.fn((x, y) =>
      x === "first arg" ? "return value" : null
    );
    const myMock = jest.fn();
    const test = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();
    // console.log(myMock.mock);
    // console.log(myMock.mock.instances);
    mockCallback("first arg", "second arg");
    // 함수는 정확히 한 번 호출됩니다
    expect(mockCallback.mock.calls.length).toBe(1);

    // 함수에 대한 첫 번째 호출의 첫 번째 인자는 'first arg' 이었음
    expect(mockCallback.mock.calls[0][0]).toBe("first arg");

    // 함수에 대한 첫 번째 호출의 두 번째 인자는 'second arg' 이었음
    expect(mockCallback.mock.calls[0][1]).toBe("second arg");

    // 함수에 대한 첫 번째 호출의 반환 값은 'return value' 이었음
    expect(mockCallback.mock.results[0].value).toBe("return value");

    // const test = new mockCallback();
    // const d = new mockCallback();
    // 이 함수는 정확히 두 번 인스턴스화 되었음
    expect(myMock.mock.instances.length).toBe(2);

    // 값이 `test`로 설정 된 `name` 프로퍼티를 가진
    // 이 함수의 첫 번째 인스턴스화에 의해 반환된 객체
    // console.log(myMock.mock.instances[0]);
    // expect(myMock.mock.instances[0].name).toEqual("test");
  });
});

describe("forEachTest3", () => {
  test("forEach", () => {
    const myMock = jest.fn();
    // console.log(myMock());

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce("x")
      .mockReturnValue(true);
    // console.log(myMock(), myMock(), myMock(), myMock());
  });
});

describe("forEachTest4", () => {
  const filterTestFn = jest.fn();

  // 모의가 첫 번째 호출에 대해 `true`를 반환하도록 하고,
  // 두 번째 호출에 대해 `false`를 반환하게 합니다
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));

  //   console.log(result);
  // > [11]
  //   console.log(filterTestFn.mock.calls);
  // > [ [11], [12] ]
});
