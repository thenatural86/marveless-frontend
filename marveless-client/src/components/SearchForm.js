import React from "react"

const SearchForm = props => {
  return (
    <div style={{ marginRight: "1060px", width: "500px" }}>
      <input
        style={{ width: "220px" }}
        type="text"
        name="searchTerm"
        placeholder="Search for a character.."
        value={props.searchTerm}
        onChange={props.changeHandler}
      />
      <button
        style={{ width: "160px" }}
        className="shuffle-button"
        onClick={props.clickHandler}
      >
        Shuffle
      </button>
    </div>
  )
}

export default SearchForm
