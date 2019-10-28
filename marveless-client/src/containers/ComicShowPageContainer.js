import React from "react"
import ComicShowPage from "../components/ComicShowPage"

const ComicShowPageContainer = props => {
  let comicShowPageCards = props.comicPage.map(comic => {
    return (
      <ComicShowPage
        key={comic.id}
        comic={comic}
        clickHandler={props.clickHandler}
      />
    )
  })
  return <div onClick={props.clickHandler}>{comicShowPageCards}</div>
}

export default ComicShowPageContainer
