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
        />
      </div>
      <div className="comic-title">{props.comic.title}</div>
      <button onClick={() => props.clickHandler(props.comic)}>Get Info</button>
    </div>
  )
}

export default ComicCard
