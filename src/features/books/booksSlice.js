import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const { data: books, error } = await supabase.from('Books').select('*')

    if (error) return error

    return books
})

const initialState = {
    status: 'uninitialized',
    books: [],
    error: null
  }

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
      .addCase(fetchBooks.pending, (state, ) => {
        state.status = 'loading'
      })
      // Pass the generated action creators to `.addCase()`
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // Same "mutating" update syntax thanks to Immer
        state.status = 'succeeded'
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.books = []
        state.error = action.error
      })
    }
})

export const { addBook } = booksSlice.actions

export default booksSlice.reducer