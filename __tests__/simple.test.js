describe("simple test", () => {
  it("simple mock fn test", () => {
    const mockFn = jest.fn();
    // return 값 설정
    //   mockFn.mockReturnValue("I am Mock!");
    //   console.log(mockFn());

    // return promise
    //   mockFn.mockResolvedValue("I will be a mock");
    //   mockFn().then((res) => {
    //     console.log(res);
    //   });

    // mockImplementation(구현 코드) 함수를 이용하면 아예 해당 함수를 통째로 즉석해서 재구현
    mockFn.mockImplementation((item) => {
      // console.log(`I am ${item}`)
    });
    mockFn("Sujin");
    mockFn("jinsu");
    // 테스트를 작성할 때 가짜 함수가 진짜로 유용한 이유는 가짜 함수는 자신이 어떻게 호출되었는지를 모두 기억한다.
    expect(mockFn).toBeCalledTimes(2);
    expect(mockFn).toBeCalledWith("jinsu");
  });

  //calculator 객체의 add라는 함수에 스파이를 붙였다. 따라서 add 함수를 호출 후에 호출 횟수와 어떤 인자가 넘어갔는지 감증할 수 있다
  it("jest.spyOn()", () => {
    const calculator = {
      add: (a, b) => a + b,
    };

    const spyFn = jest.spyOn(calculator, "add");

    const result = calculator.add(2, 3);

    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(2, 3);
    expect(result).toBe(5);
  });
});
