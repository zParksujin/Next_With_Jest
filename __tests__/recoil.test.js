import Atom from "@/pages/atom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { nameState } from "../utils/api/nameAtom";
import { RecoilObserver } from "../utils/recoil/recoilObserver";

describe("The form state should", () => {
  test("change when the user enters a name.", async () => {
    const onChange = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={nameState} onChange={onChange} />
        <Atom />
      </RecoilRoot>
    );

    // const component = screen
    const component = screen.getByTestId("name_input");

    // dom evnet 발생 (property 변경에 의한 이벤트 발생)
    fireEvent.change(component, { target: { value: "Recoil" } });

    // init call, fireEvent.change call
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(""); // Initial state on render.
    expect(onChange).toHaveBeenCalledWith("Recoil"); // New value on change.
  });
});
