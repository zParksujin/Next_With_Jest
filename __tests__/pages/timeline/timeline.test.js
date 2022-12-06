import React from "react";
import { queryClient } from "@/pages/_app";
import { QueryClientProvider } from "react-query";
import { renderHook, waitFor, waitForNextUpdate } from "@testing-library/react";
import { useInfiniteQueryData } from "@/hooks/test/timeline";

// mocking list data가 필요하며 만드는 방법 구체화 시키기
// 실제 api 가 아닌 mock 데이터를 만들어 사용해야함
// 실제 서버와 DB를 사용할 경우 ..?단순 프론트 로직 뿐만 아니라 서버와 DB에 의존하기 때문..

//mock data 접목과
// component test 연계 필요함

// *****
// https://www.js-howto.com/react-query-how-to-test-infinite-query-with-jest-and-react-testing-library/
// infiniteQuery test 정석 useInfiniteQuery 커스텀 훅 구현하여 사용하기
// api-id 638f1e2410e0d20c42b1ed85
// *****
// const wrapper = ({ children }) => (
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );
describe("infinite query", () => {
  beforeAll(() => {});
  it("infinite1 ", async () => {
    //   await waitFor(
    //     async () => {
    //       const { result } = renderHook(
    //         // const { result, waitForNextUpdate } = renderHook(
    //         () => useInfiniteQueryData(),
    //         {
    //           wrapper,
    //         }
    //       );
    //       const { pages, pageParams } = result.current.data;
    //       console.log(pages);
    //       expect(pages[0].data.length).toBe(20);
    //       result.current.fetchNextPage({
    //         pageParam: 2,
    //       });
    //       console.log(pages);
    //       await waitForNextUpdate();
    //       // console.log(pages[0].data);
    //     },
    //     { timeout: 3000 }
    //   );
  });
});
// it("infinite 2", async () => {
//   await waitFor(
//     () => {
//       const { pages, pageParams } = renderedHook.result.current.data;

//       result.current.fetchNextPage({
//         pageParam: 2,
//       });
//       // expect(pages[0].data.length).toBe(40);
//       console.log(pages);
//     },
//     { timeout: 2000 }
//   );
// });
// it("infinite query", async () => {
//   await waitFor(
//     () => {
//       const { pages, pageParams } = result.current.data;

//       expect(pages[0].data.length).toBe(20);

//       console.log(pages[0].data);
//     },
//     { timeout: 20000 }
//   );

//   await waitFor(() => {
//     result.current.fetchNextPage({
//       pageParam: 2,
//     });
//     const { pages, pageParams } = result.current.data;
//     console.log(pages[0].data);
//     // expect(pages[0].data.length).toBe(40);
//   });
// });
// const { result, all } = renderHook(() => useInfiniteQueryData(), {
//   wrapper,
// });
