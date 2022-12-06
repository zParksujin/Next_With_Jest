import { useInfiniteQuery } from "react-query";

async function getData({ pageParam = 0 }) {
  const response = await fetch(
    `https://dummyapi.io/data/v1/user?page=${pageParam}&limit=50`,
    {
      headers: {
        "app-id": "638f1e2410e0d20c42b1ed85",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  const dataFromServer = await response.json();

  const data = {
    results: dataFromServer.data,
    next:
      dataFromServer.total > dataFromServer.page * dataFromServer.limit
        ? pageParam + 1
        : undefined,
  };
  return data;
}

export const useUsersQuery = () => {
  const query = useInfiniteQuery("users", getData, {
    getNextPageParam: (lastPage) => lastPage.next,
  });

  return query;
};
