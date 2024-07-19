const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const MAX_RESULTS = 10;

export const fetchBooks = async (query: string, startIndex: number = 0) => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&startIndex=${startIndex}&maxResults=${MAX_RESULTS}`
  );
  const data = await response.json();

  return data;
};
