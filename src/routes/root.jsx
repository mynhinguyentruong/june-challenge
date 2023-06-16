import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import BookList from "../components/BookList";


export default function Root() {
    const books = useSelector(state => state.books.value)
    console.log({books});
    return (
        <>
        <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <Link to={`/`} className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl">
              <span className="lg:text-lg uppecase focus:ring-0">
                Challenge
              </span>
            </Link>
            <button  className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path  className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path  className="hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col flex-grow hidden py-10 md:flex lg:py-0 md:justify-start md:flex-row">
            <ul className="space-y-2 list-none md:space-y-0 md:items-center md:inline-flex">
              <li>
                <Link to={"/books"} className="px-2 py-8 text-sm text-gray-500 border-b-2 border-transparent lg:px-6 hover:border-blue-500 md:px-3 hover:text-blue-600">
                  All{" "}
                  <span className="hidden lg:inline">
                    books
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="px-2 py-8 text-sm text-gray-500 border-b-2 border-transparent lg:px-6 md:px-3 hover:text-blue-600 hover:border-blue-500">
                  New courses
                </a>
              </li>
              <li>
                <a href="#" className="px-2 py-8 text-sm text-gray-500 border-b-2 border-transparent lg:px-6 hover:border-blue-500 md:px-3 hover:text-blue-600">
                  Free
                  <span className="hidden lg:inline">
                    Courses
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          Avatar here
        </div>
      </div>
      Display a list of book
      <BookList books={books} />
      <Outlet />  
      </>      
    );
  }