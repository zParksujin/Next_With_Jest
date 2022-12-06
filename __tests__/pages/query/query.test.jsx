import React from "react";
import { queryClient } from "@/pages/_app";
import { QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import {
  useCustomHook,
  useFetchData,
  useInfiniteQueryData,
} from "@/hooks/queryHook";

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("React-Query Test", () => {
  it("useQueryTest", () => {
    const { result } = renderHook(() => useCustomHook(), {
      wrapper,
    });
    // https://testing-library.com/docs/dom-testing-library/api-async/
    // 비동기 작업에 필요한 waitFor
    waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("api network test", async () => {
    const { result } = renderHook(() => useFetchData(), {
      wrapper,
    });
    await waitFor(() => {
      expect(result.current.data.data[0].id).toBe(1);
    });
    // waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});

it("infinite query", async () => {
  const { result } = renderHook(() => useInfiniteQueryData(), {
    wrapper,
  });
  await waitFor(() => {
    const { pages, pageParams } = result.current.data;
    console.log(pages[0].data);
    console.log(pageParams);
    expect(pages[0].data.length).toBe(10);
  });
  // waitFor(() => expect(result.current.isSuccess).toBe(true));
});
