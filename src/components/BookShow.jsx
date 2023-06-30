import { useState } from "react"
import BookEdit from "./BookEdit"

const BookShow = ({book,onDelete,onEdit})=>{
    const [showEdit,setShowEdit]= useState(false)

    const handleDelete =()=>{
        onDelete(book.id)
        console.log(book.title,book.id)
    }
    const handleEdit =()=>{
        setShowEdit(!showEdit)
    }
    // create a function that can handles all the functions when the edit form is submitted
    function handleSubmit(id,title) {
        setShowEdit(false);
        onEdit(id,title)
    };
    
    return(
            <div className="book-show">
                <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
                {showEdit ? <BookEdit onSubmit={handleSubmit} book={book}/> : book.title } 
                <div className="actions">
                    <button className="edit" onClick={handleEdit}>Edit</button>
                    <button className="delete" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
    )
}

export default BookShow