import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/ParentContext'

const Books = () => {

    const {search} = useContext(AppContext)
    const [BooksData, setBooksData] = useState([])
    
    useEffect(()=>{
      const headers = {
        'Authorization': 'whatever-you-want'
        };
        fetch('https://reactnd-books-api.udacity.com/books', {headers})
      .then(response=> response.json())
      .then(data=>setBooksData(data.books))
    },[])


  return (
    <div>
      <div className='BooksContainer'>

        {
          BooksData.filter((book)=>{
            return book.title.toLowerCase().includes(search.toLowerCase())
          }).length != 0?BooksData.filter((book)=>{
            return book.title.toLowerCase().includes(search.toLowerCase())
          }).map((book,i)=>{
            return <div className='book' key={i}>
              <img src={book.imageLinks.smallThumbnail} alt={`book${i}`} />
              <p>{book.title}</p>
              <p>⭐{book.averageRating? book.averageRating: '3'} Free</p>
            </div>
          }):<h1 color='black' style={{textAlign:'center', width:'100%'}}>No Book Found</h1>
        }
      </div>
    </div>
  )
}

export default Books