import {createContext,useState } from "react";
import axios from 'axios';

const BooksContext = createContext();
/* create a custom provider ( this is where we'll create our states and objects we want to share 
with the rest of our app)
*/

 const BookProvider = ({children})=>{
    const [books,setBooks] = useState([])

  // update the books array with response from our db
  const getBooks = async()=>{
    const response = await axios.get('http://127.0.0.1:3001/books')
    setBooks(response.data)
  };

  const createBook= async(title)=>{
    // create a book with a post request then use the response to update book
    const response = await axios.post('http://127.0.0.1:3001/books',{
      title
    })
    const updatedBooks = [
      ...books,
      response.data
    ];
    setBooks(updatedBooks)
    console.log(books)
  }

  // delete books by id
  const deleteBook= async(id)=>{
    await axios.delete(`http://127.0.0.1:3001/books/${id}`)
    // use filter to remove the book that matches our id
    const filteredBooks = books.filter((book)=>{
      return book.id !== id
    })
    setBooks(filteredBooks)
  }

  //edit/update book by id 
  const updateBookTitleById= async(id,newtitle)=>{
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`,{
      title:newtitle
    })
    // to update we want to map through the book array and return our new title to the existing book
    // eslint-disable-next-line array-callback-return
    const updateBooks = books.map(book=>{
      // the this book is equal to the book we click on 
      if(book.id === id){
        // the return that book and update its title
        return {...book, ...response.data}
      }
      return book;
    })
    // the update the books books array with our modifie book
    setBooks(updateBooks)
  }
    const sharedValues = {
        books,
        getBooks,
        updateBookTitleById,
        deleteBook,
        createBook
    };

    return(
        // our context object will then take in a value(the thing we want to share, can be anything)
        <BooksContext.Provider value={sharedValues}>
            {/* return our childtrn prop (representing our app component*/}
            {children}
        </BooksContext.Provider>
    )
}

export {BookProvider};
export default BooksContext;


