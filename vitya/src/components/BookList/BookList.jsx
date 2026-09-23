import BookItem from "./BookItem/BookItem";
import './BookList.css'

const BookList = ({setBooks, showOnlyUnread}) => {
    
    return(
    <div className="book-list" id="bookList">
        {showOnlyUnread.map((book, i) => <BookItem {...book} key={i} setBooks={setBooks}/>)}
    </div>
)
}

export default BookList;