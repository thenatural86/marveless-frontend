import React from "react"
import ComicCard from "../components/ComicCard"

const ComicContainer = props => {
  let comics = props.comics.data.results.map(comic => {
    return (
      <ComicCard
        key={comic.id}
        comic={comic}
        clickHandler={props.clickHandler}
      />
    )
  })
  return (
    <>
      <div className="comic-container" onClick={props.closeComic}>
        {comics}
      </div>
    </>
  )
}

export default ComicContainer
