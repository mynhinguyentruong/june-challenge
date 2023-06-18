import { useCallback } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Search() {

    const [userInput, setUserInput] = useState("")

    const books = useSelector(state => state.books.books)

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSearch = useCallback(() => {
        if (!userInput) return null

        const b = books.filter(book => book.name.toLowerCase().includes(userInput.toLowerCase()))

        return (
            b.map((book) => (
                <Link key={book.id} to={`/book/${book.id}`} className="group px-10 py-10">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={book.imageSrc}
                      alt={book.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{book.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{book.price}</p>
                </Link>
              ))
        )
    }, [userInput, books])

    return (
        <>
            <div className="pt-2 relative mx-auto text-gray-600 px-10">
            <input 
                onChange={handleChange}
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="userInput" value={userInput} placeholder="Search"/>
        
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {handleSearch()}
          </div>
        </>
    )
}