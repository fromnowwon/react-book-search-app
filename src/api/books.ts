const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchBooks = async (
  query: string,
  startIndex: number = 0,
  pageSize: number = 10
) => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&startIndex=${startIndex}&maxResults=${pageSize}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
