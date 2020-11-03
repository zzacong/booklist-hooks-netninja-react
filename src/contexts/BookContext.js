import React, { createContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

// { title: 'Name of the wind', author: 'Patrick Rothfuss', id: 1 },
// { title: 'The final empire', author: 'Brandon Sanderson', id: 2 },

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    console.log(JSON.parse(localData))
    return JSON.parse(localData) || []
  })

  // const addBook = (title, author) => {
  //   setBooks(prevBooks => [...prevBooks, { title, author, id: uuid() }])
  // }

  // const removeBook = id => {
  //   setBooks(prevBooks => prevBooks.filter(book => book.id !== id))
  // }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
