import React from 'react'
import { useBook } from '../contexts/Context'

const Navbar = () => {
  const { books } = useBook()

  return (
    <nav className="navbar">
      <h1>Zac's Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </nav>
  )
}

export default Navbar
