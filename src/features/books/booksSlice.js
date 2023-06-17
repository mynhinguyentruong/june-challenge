import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_API_KEY)
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const { data: books, error } = await supabase.from('Books').select('*')

    console.log({error});
    console.log({books})

    if (error) return error

    return books
})

// const initialState = {
//     value: [
//         {
//           id: 1,
//           name: 'Book 1',
//           price: '$48',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//           imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//         },
//         {
//           id: 2,
//           name: 'Book 2',
//           price: '$35',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//           imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//         },
//         {
//           id: 3,
//           name: 'Book 3',
//           price: '$89',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//           imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//         },
    
//         // More products...
//       ]
// }

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