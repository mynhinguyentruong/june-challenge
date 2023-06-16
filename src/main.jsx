import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from "./routes/root";

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookPage from './routes/books/BookPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "books",
        element: <BookPage />,
        // loader: async () => {
        //   return null; // fetch books data
        // },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
