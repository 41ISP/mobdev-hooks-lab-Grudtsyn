const BookItem = ({id, title, author, read, setBooks}) => {
    
    const handleOnDelete = () => {
      setBooks(o => o.filter(e => e.id !== id))
    } 
    const handleOnToggleRead = (diff) => {
        setBooks(o => o.map(e => 
        e.id === id ?
        {...e, read: e.read = diff} :
        e
        ))
    }
    return(  <div className="book-row" data-id={id}>
    <div className="book-cover" style={{ background: "#4f6b52" }}>
      К
    </div>
    <div className="book-info">
      <p className="book-title done">{title}</p>
      <div className="book-author">{author}</div>
    </div>
    <div onClick={() => handleOnToggleRead(!read)} className={`task-check${ read ? " checked" : ""}`} data-role="toggle">
      <span className="check-circle">✓</span>
      <span className="read-label">{read ? "Прочитано" : "Непрочитано"}</span>
    </div>
    <button onClick={handleOnDelete} className="delete-btn" data-role="delete" title="Убрать с полки">
      ✕
    </button>
  </div>)
}



export default BookItem;