import React from "react"

const SearchForm = props => {
  // console.log(props)
  return (
    <input
      type="text"
      name="searchTerm"
      placeholder="Search for a character.."
      value={props.searchTerm}
      onChange={props.changeHandler}
    />
  )
}

export default SearchForm
