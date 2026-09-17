import FilterChip from "../components/FilterChip";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

const ShelfScreen = ({books, setBooks}) => {
    return(
        <section className="screen active" id="screen-shelf">
    <p className="greeting">Добрый вечер</p>
    <BookForm books={books} setBooks={setBooks}/>
    <div className="list-toolbar">
      <span className="toolbar-title">Книги</span>
      <FilterChip/>
    </div>
    <BookList books={books} setBooks={setBooks}/>
  </section>
    
)}

export default ShelfScreen;