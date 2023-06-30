import { Children, createContext } from "react";
import App from "../App";

const BooksContext = createContext();
/* create a custom provider ( this is where we'll create our states and objects we want to share 
with the rest of our app)
*/
export const BookProvider = ({Children})=>{

    return(
        // our context object will then take in a value(the thing we want to share, can be anything)
        <BooksContext.Provider value={}>
            {/* return our childtrn prop (representing our app component*/}
            {Children}
        </BooksContext.Provider>
    )
}

export default BooksContext


