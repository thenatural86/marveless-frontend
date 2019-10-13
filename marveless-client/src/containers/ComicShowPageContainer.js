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
      Comic Show Page Container
      {comicShowPageCards}
    </div>
  )
}

export default ComicShowPageContainer
