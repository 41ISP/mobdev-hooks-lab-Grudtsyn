import FilterChip from "../components/FilterChip/FilterChip";
import BookForm from "../components/BookForm/BookForm";
import BookList from "../components/BookList/BookList";
import { useEffect, useState } from "react"
import './ShelfScreen.css'

const ShelfScreen = ({books, setBooks, showOnlyUnread, setShowOnlyUnread}) => {
  const [shownCompleted, setShownCompleted] = useState(false)

  useEffect(() => {
        if (shownCompleted) {
            setShowOnlyUnread(books.filter(e => !e.read))
        } else {
            setShowOnlyUnread(books)
        } 
    }, [books, shownCompleted])

    return(
        <section className="screen active" id="screen-shelf">
    <p className="greeting">Добрый вечер</p>
    <BookForm books={books} setBooks={setBooks}/>
    <div className="list-toolbar">
      <span className="toolbar-title">Книги</span>
      <FilterChip setShownCompleted={setShownCompleted} shownCompleted={shownCompleted}/>
    </div>
    <BookList setBooks={setBooks} showOnlyUnread={showOnlyUnread}/>
  </section>
    
)}

export default ShelfScreen;