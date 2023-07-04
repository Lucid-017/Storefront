import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import {useEffect,useContext } from "react";
import BooksContext from "./Context/Books";

function App() {
  // get function from the books context
  const {getBooks} = useContext(BooksContext)

  // get books once the page renders
  useEffect(()=>{
    getBooks();
  },[])

  return (
    <div className="app">
      {/* remove the props as these components can now access the context on their own  */}
      <BookList />
      <BookCreate />
      
    </div>
  );

}


export default App;
