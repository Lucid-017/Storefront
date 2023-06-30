import { useState } from "react"

const BookEdit = ({book,onSubmit})=>{
    const [title,setTitle]= useState(book.title)

    const handleSubmit = (e)=>{
        e.preventDefault();

        onSubmit(book.id,title);
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