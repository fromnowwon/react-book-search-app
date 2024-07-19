import { useQuery } from "react-query";
import { fetchBooks } from "../api/books";
import { useBookStore } from "../store/useBookStore";

export const useBooks = (query: string, pageIndex: number) => {
  const { pageSize } = useBookStore();
  const startIndex = pageIndex * pageSize;

  return useQuery(
    ["books", query, startIndex, pageSize],
    () => fetchBooks(query, startIndex, pageSize),
    { initialData: { items: [] }, enabled: !!query, keepPreviousData: true }
  );
};
