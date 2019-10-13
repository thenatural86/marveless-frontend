import React from "react"

const SearchForm = props => {
  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <input
          type="text"
          name="character"
          placeholder="Search for a character.."
          value={props.searchTerm}
          onChange={props.changeHandler}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default SearchForm
