const Input = ({setTitleField}) => {
    return(
      <input onChange={(e)=>setTitleField(e.target.value)} className="input" id="bookInput" placeholder="Название книги..." />
    )
}
  


export default Input;