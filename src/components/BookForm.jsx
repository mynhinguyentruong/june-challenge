import { useState } from "react"

export default function BookForm() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        imageSrc: "",
        imageAlt: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        setForm(prevForm => {
            return {...prevForm, [name]: e.target.value}
        })

        console.log(form);
    }
  return (
    <form>
      <div className="space-y-1 px-10 pt-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add New Book</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide some information for your new book
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                What is your book title/name?
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    value={form.name}
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Book 3"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                How much you are selling it for?
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    value={form.price}
                    id="price"
                    name="price"
                    autoComplete="price"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="$99"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="imageSrc" className="block text-sm font-medium leading-6 text-gray-900">
                What is your book image?
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    value={form.imageSrc}
                    id="imageSrc"
                    name="imageSrc"
                    onChange={handleChange}
                    autoComplete="imageSrc"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="imageAtl" className="block text-sm font-medium leading-6 text-gray-900">
                Please provide an alt for your image!
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                  <input
                    type="text"
                    value={form.imageAlt}
                    id="imageAlt"
                    name="imageAlt"
                    autoComplete="imageAtl"
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="A book with a fantastic cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-x-6 px-10">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
