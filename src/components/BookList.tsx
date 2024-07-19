import { useBooks } from "../hooks/useBooks";
import { Book } from "../types/book";
import BookCard from "./BookCard";
import { useBookStore } from "../store/useBookStore";

export default function BookList() {
  const { query, currentPage, pageSize } = useBookStore();
  const startIndex = (currentPage - 1) * pageSize; // 0~, 10~, 20~, ...

  const { data, status } = useBooks(query, startIndex);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error!</div>;

  console.log(query, currentPage, pageSize);

  return (
    <div className="grig grid-col-3 gap-4">
      {data.items.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
