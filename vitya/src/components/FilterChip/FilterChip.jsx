import './FilterChip.css'

const FilterChip = ({ setShownCompleted, shownCompleted }) => {
    return (
        <div className={`filter-chip${shownCompleted ? " checked" : ""}`}>
            <input onChange={() => setShownCompleted(o => !o)} checked={shownCompleted} type="checkbox" id="filterCheckbox" />
            <label htmlFor="filterCheckbox">
                <span className="dot" />
                Только непрочитанные
            </label>
        </div>
    )
}

export default FilterChip;