import { useState } from 'react'

import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
 

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blog></Blog>
      <Bookmarks></Bookmarks>
      </div>
      

    </>
  )
}

export default App
