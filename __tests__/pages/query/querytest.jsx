import React from "react";
import { queryClient } from "@/pages/_app";
import { QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react";

// const ReactQueryWrapper = ({ children }) => {
//   return (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };

describe("React-Query Test", () => {
  it("useQueryTest", () => {
    // const { result, waitFor } = renderHook(() => useCustomHook(), {
    //   wrapper: ReactQueryWrapper(),
    // });
  });
});
