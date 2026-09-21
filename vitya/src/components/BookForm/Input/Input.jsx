import './Input.css'

const Input = ({setTitleField, titleField}) => {
    return(
      <input onChange={(e)=>setTitleField(e.target.value)} className="input" id="bookInput" placeholder="Название книги..." value={titleField}/>
    )
}
  


export default Input;