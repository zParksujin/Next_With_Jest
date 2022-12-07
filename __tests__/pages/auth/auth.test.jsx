import Home from "@/pages/index";
import { render, waitFor } from "@testing-library/react";
import * as nextAuthReact from "next-auth/react";

jest.mock("next-auth/react");
const nextAuthReactMocked = nextAuthReact;

describe("Test Auth component", () => {
  it("Shows Home page and auth component", async () => {
    nextAuthReactMocked.useSession.mockImplementation(() => {
      return { data: null, status: "loading" };
    });

    nextAuthReactMocked.signIn.mockImplementation(() =>
      Promise.resolve({ error: "", status: 200, ok: true, url: "" })
    );

    const { getAllByText } = render(<Home />);

    // await waitFor(() => {
    // const authenticated = getAllByText("Auth Status: authenticated");
    // expect(authenticated).toBeInTheDocument();
    // });
  });
});
