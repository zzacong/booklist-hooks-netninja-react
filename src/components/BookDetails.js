import React from 'react'
import { useBook } from '../contexts/Context'

const BookDetails = ({ book }) => {
  const { dispatch } = useBook()

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}

export default BookDetails
