import React from "react"

const ComicCard = props => {
  // console.log(props.comic)
  return (
    <div className="comic-card">
      <div className="comic-image">
        <img
          alt=""
          src={
            props.comic.thumbnail.path +
            "/portrait_fantastic" +
            "." +
            props.comic.thumbnail.extension
          }
          onClick={() => props.clickHandler(props.comic)}
        />
      </div>
      <div className="comic-title">{props.comic.title}</div>
    </div>
  )
}

export default ComicCard
