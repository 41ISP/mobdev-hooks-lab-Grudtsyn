import BookItem from "./BookItem";
import {nanoid} from "nanoid"



const BookList = ({books, setBooks}) => {
    
    return(
    <div className="book-list" id="bookList">
        {books.map((book, i) => <BookItem {...book} key={i} setBooks={setBooks}/>)}
    </div>
)
}

export default BookList;