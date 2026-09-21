import './FilterChip.css'

const FilterChip = () => {
    return(
    <div className="filter-chip">
        <input type="checkbox" id="filterCheckbox" />
        <label htmlFor="filterCheckbox">
          <span className="dot" />
          Только непрочитанные
        </label>
    </div>
    )
}

export default FilterChip;