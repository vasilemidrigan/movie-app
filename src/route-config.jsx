import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./components/pages/Home-page";
import SignUpPage from "./components/pages/SignUp-page";
import TvPage from "./components/pages/Tv-page";
import MoviePage from "./components/pages/Movie-page";
import BookmarksPage from "./components/pages/Bookmarks-page";

export const router = createBrowserRouter([
  {
    path: "/night-owl",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviePage />,
      },
      {
        path: "tv",
        element: <TvPage />,
      },
      {
        path: "bookmarks",
        element: <BookmarksPage />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);
