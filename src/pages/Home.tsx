import BookList from "../components/BookList";
import Pagination from "../components/Pagination";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <section className="container">
      <SearchBox />
      <BookList />
      <Pagination />
    </section>
  );
}
