import BookShow from './BookShow'
import { useContext } from 'react'
import BooksContext from '../Context/Books'

// take the books data
const BookList = ()=>{
    const {books} = useContext(BooksContext)
// the map through them 
    const renderedBooks = books.map((book,index)=>{
        return <BookShow key={book.id} book={book}/>
    })
    
    return(
        <div>
            <h1>Reading list</h1>
            <div className='book-list'> 
                {renderedBooks}
            </div>
        </div>
    )
}

export default BookList