import { useBookStore } from "../store/useBookStore";

export default function SearchBox() {
  const { query, setQuery } = useBookStore();
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="검색어를 입력하세요"
      className="border p-2"
    />
  );
}
