import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
