import { useState,useContext } from "react";
import BooksContext from "../Context/Books";

const BookCreate = ()=>{
    const {createBook} = useContext(BooksContext)
    const [title,setTitle]= useState('')

    const handleChange= (e)=>{
        setTitle(e.target.value)
    }
    // what will happen when we submit the form
    const handleSubmit =(e)=>{
        e.preventDefault()
        // we want to create book when we submit,so we call the onCreate prop from our app
        createBook(title)
        setTitle('')
    }
    return(
        <div className="book-create">
             <form onSubmit={handleSubmit}>
                <label>
                    {/* we want to monitor the value change as this will be the title of our book */}
                        <input className="input" value={title} onChange={handleChange}/>
                </label>
                <button className="button">Create</button> 
            </form>
        </div>
    )
}

export default BookCreate