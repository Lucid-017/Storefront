import { useContext, useState } from "react"
import BooksContext from "../Context/Books"

const BookEdit = ({book,onSubmit})=>{
    const {updateBookTitleById} = useContext(BooksContext)
    const [title,setTitle]= useState(book.title)

    const handleSubmit = (e)=>{
        e.preventDefault();
        // this functions primarily for closing the edit form
        onSubmit();
        // so we after the form has been submitted we then want to call our onEdit function from our context
        updateBookTitleById(book.id,title)
    }
    const handleChange = (e)=>{
        setTitle(e.target.value)
    }
    return(
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} className="input" />
            <button className="button is-primary" >
                save
            </button>
            
        </form>
    )
}

export default BookEdit