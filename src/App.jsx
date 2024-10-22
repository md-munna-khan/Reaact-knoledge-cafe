
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([]);
const [markAsRead,setMarkasRead] =useState(0)

const handleMarksAsRead = (id,time)=>{
 const newReadingTime = markAsRead + time;
 setMarkasRead(newReadingTime);
 //  remove the read blog fro, bookmark
// console.log("remove bookmarks",id)
const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id);
setBookmarks(remainingBookmarks);
}


 const handleBookmarks = blog =>{
const newBookmarks =[...bookmarks,blog];
setBookmarks(newBookmarks)

 }

  return (
    <>
    <Header></Header>
   <div className='md:flex container  mx-auto'>
  <Blogs  handleBookmarks={ handleBookmarks}
   handleMarksAsRead={ handleMarksAsRead}
  ></Blogs>
   <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
   </div>
    </>
  )
}

export default App
