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
      <h1>Comic Show Page Container</h1>
      {comicShowPageCards}
    </div>
  )
}

export default ComicShowPageContainer