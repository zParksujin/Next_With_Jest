import axios from "axios";
import { useInfiniteQuery } from "react-query";

const USER_IDX = 1;
const OFFSET = 1;
const LIMIT = 20;

export function useInfiniteQueryData() {
  return useInfiniteQuery(
    {
      queryKey: ["fetchInfiniteData"],
      queryFn: ({ pageParam = 1 }) =>
        fetchInifiniteDataQuery(USER_IDX, pageParam, LIMIT),
      // axios.get(
      //   `https://jsonplaceholder.typicode.com/posts?userId=${pageParam}`
      // ),
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.userIdx + 1; // 다음 페이지를 호출할 때 사용 될 pageParam
      },
    }
  );
}

export const fetchInifiniteDataQuery = async (userIdx, offset, limit) => {
  const res = await infiniteQueryApi(userIdx, offset, limit);

  const { data, total_count } = res.data;
  const isLast = offset * LIMIT + LIMIT >= total_count;

  return {
    data,
    isLast,
    nextPage: offset + 1,
  };
};

export const infiniteQueryApi = (userIdx, offset, limit) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    const data = [];
    for (let index = 0; index < limit * offset; index++) {
      data.push({
        userId: index,
        id: index,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" +
          index,
        body:
          "quia et suscipit\n" +
          "suscipit recusandae consequuntur expedita et cum\n" +
          "reprehenderit molestiae ut ut quas totam\n" +
          "nostrum rerum est autem sunt rem eveniet architecto" +
          index,
      });
    }

    const total_count = data.length;

    console.log("total_count", total_count);
    resolve({
      data: {
        data,
        total_count,
      },
    });
    // }, 1000);
  });
};
