const Input = () => {
    return(
    <div className="add-book-row">
      <input className="input" id="bookInput" placeholder="Название книги..." />
      <button className="btn" id="addBtn">
        Добавить на полку
      </button>
    </div>
    )
}

export default Input;