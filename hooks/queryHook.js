import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios";

export function useCustomHook() {
  return useQuery({ queryKey: ["customHook"], queryFn: () => "Hello" });
}

export function useFetchData() {
  return useQuery({
    queryKey: ["fetchData"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/todos"),
  });
}

export function useInfiniteQueryData() {
  return useInfiniteQuery({
    queryKey: ["fetchInfiniteData"],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${pageParam}`
      ),
  });
}
