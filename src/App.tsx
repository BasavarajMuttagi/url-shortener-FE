import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <SnackbarProvider
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
