import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMarks = blog =>{
    setBookMarks([...bookmarks, blog]);
  }

  const handleMarkAsRead = (time, id) =>{
    setReadingTime(readingTime + time);
    const remainingBookmar = bookmarks.filter(bookmark => bookmark.Id !== id);
    setBookMarks(remainingBookmar);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex justify-between mt-8'>

        <Blogs handleAddToBookMarks={handleAddToBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        
      </main>
    </>
  )
}

export default App
