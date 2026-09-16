import FilterChip from "./FilterChip";
import BookForm from "./BookForm";
import BookList from "./BookList";

const ShelfScreen = () => {
    return(
        <section className="screen active" id="screen-shelf">
    <p className="greeting">Добрый вечер</p>
    <Input/>
    <div className="list-toolbar">
      <span className="toolbar-title">Книги</span>
      <FilterChip/>
    </div>
    <div className="book-list" id="bookList">
      <div className="book-row" data-id={1}>
        <div className="book-cover" style={{ background: "#4f6b52" }}>
          К
        </div>
        <div className="book-info">
          <p className="book-title done">Клара и Солнце</p>
          <div className="book-author">Кадзуо Исигуро</div>
        </div>
        <Checkbox/>
        <Button/>
      </div>
    </div>
  </section>
    )
}

export default ShelfScreen;