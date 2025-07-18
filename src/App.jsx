import Header from './components/Header'
import BookList from './components/BookList'  
import { useEffect, useState } from 'react'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const sampleBooks = [
        { title: "Hujan", author: "Tere Liye"},
        { title: "Atomic Habit", author: "James Clear"},
        { title: "How to Win Friends and Influence People", author: "Dale Carnegie"},
    ]
    setBooks(sampleBooks)
  }, [])


  return (
    <div>
      <Header />
      <BookList books={books}/>
    </div>
  )
}

export default App
