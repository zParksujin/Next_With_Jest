import { render, screen } from "@testing-library/react";
import Home from "@/pages/index.jsx";

// ex ) getAllbyRole : get(쿼리타입) all(타겟갯수) byrole(타겟유형)
// 모달에 적용?
describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);

    // const heading = screen.getByRole("heading", {
    //   name: /query/i,
    // });

    const text = screen.getByText("hi");

    // expect(text).toBeInDocument();

    // /// toMatchSnapshot렌더링된 HTML을 스냅샷하는 데 사용할 수 있습니다.
    expect(container).toMatchSnapshot();
    // expect(container).toMatchInlineSnapshot();
  });
});
