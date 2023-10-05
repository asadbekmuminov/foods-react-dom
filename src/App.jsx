import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Food from "./pages/Food";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "food/:id", element: <Food /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
