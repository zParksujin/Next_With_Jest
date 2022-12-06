import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToggleButton from "@/pages/button";
import useToggle from "@/hooks/useToggle";
import { act } from "react-dom/test-utils";

describe("React Component를 통한 간접 테스트", () => {
  // 버튼을 클릭하면 버튼 내부 문구가 OFF에서 ON으로 변경되는지를 검증
  it("button text changes from ON to OFF when clicked", async () => {
    render(<ToggleButton />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("OFF");

    await userEvent.click(button);

    expect(button).toHaveTextContent("ON");
  });

  it("button text is ON given initial set to true", () => {
    render(<ToggleButton initial={true} />);

    // initial prop으로 true를 넘겼을 때 내부 문구가 ON인 버튼이 랜더링되는지 검증
    expect(screen.getByRole("button", { name: /on/i })).toBeInTheDocument();
  });
});

describe("React Hooks Testing Library를 통한 직접 테스트", () => {
  // 첫 번째 테스트에서는 toggle 함수가 호출되면 state 상태가 false에서 true로 변경되는지를 검증하고 있습니다.
  it("update state from false to true when toggle is called", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);

    act(() => result.current[1]());

    expect(result.current[0]).toBe(true);
  });
  // 두 번째 테스트에서는 훅 함수를 호출할 때 인자로 true를 넘기면 상태가 true로 시작하는지를 검증하고 있습니다.
  it("allows for initial value", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });
});
