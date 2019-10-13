import React from "react"
import SearchForm from "../components/SearchForm"

const NavBarContainer = props => {
  return (
    <div>
      {/* <h3>NavBarContainer Place a search form here!</h3> */}
      <SearchForm
        searchTerm={props.searchTerm}
        changeHandler={props.changeHandler}
        submitHandler={props.submitHandler}
      />
    </div>
  )
}

export default NavBarContainer
