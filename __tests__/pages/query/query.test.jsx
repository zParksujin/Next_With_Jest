import React from "react";
import { queryClient } from "@/pages/_app";
import { QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useCustomHook, useFetchData } from "@/hooks/queryHook";

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

//
describe("React-Query Test", () => {
  // 단일 useQuery Mock 데이터
  it("useQueryTest", () => {
    const { result } = renderHook(() => useCustomHook(), {
      wrapper,
    });
    // https://testing-library.com/docs/dom-testing-library/api-async/
    // 비동기 작업에 필요한 waitFor
    waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  // 단일 useQuery api 통신
  it("api network test", async () => {
    const { result } = renderHook(() => useFetchData(), {
      wrapper,
    });
    await waitFor(() => {
      expect(result.current.data.data[0].id).toBe(1);
    });
  });
});
