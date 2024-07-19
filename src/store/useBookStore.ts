import { create } from "zustand";

interface BookStore {
  query: string;
  setQuery: (query: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
}));
