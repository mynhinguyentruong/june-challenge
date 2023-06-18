import { configureStore } from '@reduxjs/toolkit'
import booksReducer, { fetchBooks } from "./features/books/booksSlice"

export const store = configureStore({
  reducer: {
    books: booksReducer
  },
})

store.dispatch(fetchBooks())