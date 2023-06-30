import BookShow from './BookShow'
// take the books data
const BookList = ({books,onDelete,onEdit})=>{
// the map through them 
    const renderedBooks = books.map((book,index)=>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
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