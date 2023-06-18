import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";

import './index.css'

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { store } from './store'
import { Provider } from 'react-redux'

import BookList from './components/BookList';
import Book from './components/Book';
import BookForm from './components/BookForm';
import Login from './routes/login/Login';

import { supabase } from './features/books/booksSlice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: async () => {
      const { data, } = await supabase.auth.getSession()
      console.log({data});
      if (!data.session) return redirect('/login')

      return data.session
    },
    children: [
      {
        path: "books",
        element: <BookList />,
        // loader: async () => {
          

        //   return books; // fetch books data
        // },
      },
      {
        path: "/book/:id",
        element: <Book />,
        loader: async ({params}) => {
          const { data: book, error } = await supabase.from('Books').select('*').eq('id', parseInt(params.id))
          if (error) return error
          return book[0]
        }
      },
      {
        path: "/book/new",
        element: <BookForm />,
       
      }
    ],

  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
