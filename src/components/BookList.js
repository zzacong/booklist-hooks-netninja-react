import React from 'react'
import { useBook } from '../contexts/Context'
import BookDetails from './BookDetails'

const BookList = () => {
  const { books } = useBook()

  return (
    <>
      {books.length ? (
        <div className="book-list">
          <ul>
            {books.map(book => (
              <BookDetails key={book.id} book={book} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="empty">No books to read. Hello free time!</div>
      )}
    </>
  )
}

export default BookList
