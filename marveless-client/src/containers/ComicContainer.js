import React from "react"
import ComicCard from "../components/ComicCard"

const ComicContainer = props => {
  console.log(props)
  let comics = props.comics.data.results.map(comic => {
    return (
      <ComicCard
        key={comic.id}
        comic={comic}
        clickHandler={props.clickHandler}
      />
    )
  })

  // problem is not that the array is empty but that the object being passed down to the comic container is undefined on initial render
  return (
    <>
      <div className="comic-container">
        <button className="comic-container-close" onClick={props.closeComic}>
          X
        </button>
        {comics}
      </div>
    </>
  )
}

export default ComicContainer
