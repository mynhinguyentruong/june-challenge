import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookPage from './routes/books/BookPage.jsx';

import { store } from './app/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
