import React from "react"
import ComicShowPage from "../components/ComicShowPage"

const ComicShowPageContainer = props => {
  // console.log(props)
  let comicShowPageCards = props.comicPage.map(comic => {
    return (
      <ComicShowPage
        key={comic.id}
        comic={comic}
        clickHandler={props.clickHandler}
      />
    )
  })
  return (
    <div>
      <button
        className="comic-show-page-container-button"
        onClick={props.clickHandler}
      >
        X
      </button>
      {comicShowPageCards}
    </div>
  )
}

export default ComicShowPageContainer
