import './Checkbox.css'

const Checkbox = ({read, handleOnToggleRead}) => {
    return(
    <div onClick={() => handleOnToggleRead(!read)} className={`read-check${ read ? " checked" : ""}`} data-role="toggle">
      <span className="check-circle">✓</span>
      <span className="read-label">{read ? "Прочитано" : "Непрочитано"}</span>
    </div>
    )
}

export default Checkbox;