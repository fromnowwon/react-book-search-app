import { useQuery } from "react-query";
import { fetchBooks } from "../api/books";

export const useBooks = (query: string, startIndex: number) => {
  return useQuery(
    ["books", query, startIndex],
    () => fetchBooks(query, startIndex),
    { enabled: !!query, keepPreviousData: true }
  );
};
