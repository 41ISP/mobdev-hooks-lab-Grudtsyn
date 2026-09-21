import Checkbox from "../BookList/BookItem/Checkbox/Checkbox";
import Button from "./Button/Button";
import Input from "./Input/Input";
import { useState } from "react";
import { nanoid } from "nanoid";
import './BookForm.css';

const BookForm = ({books, setBooks}) => {
    const [titleField, setTitleField] = useState('')

    const handleOnAdd = (e) => {
        e.preventDefault()

        if (titleField.trim().length === 0) return

        const newBook = {
          id:nanoid(),
          title:titleField.trim(),
          author:"Someone",
          read: false
        }
        setBooks([...books, newBook])

        setTitleField('')
    }

    return(
    <form onSubmit={handleOnAdd} className="add-book-row">
    <Input titleField={titleField} setTitleField={setTitleField} onChange={(e) => setTitleField(e.target.value)}/>
    <Button/>
    </form>
)
}



export default BookForm;