import { useContext } from 'react'
import { BookContext } from './BookContext'

export const useBook = () => useContext(BookContext)
