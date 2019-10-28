import React from "react"

const ComicShowPage = props => {
  let characters = props.comic.characters.items.map(character => character.name)
  let creators = props.comic.creators.items
    .map(creator => creator.name)
    .join(" , ")
  return (
    <div>
      <div className="comic-title">{props.comic.title}</div>
      <div className="comic-image">
        <img
          alt=""
          src={
            props.comic.thumbnail.path +
            "/portrait_uncanny" +
            "." +
            props.comic.thumbnail.extension
          }
          style={{ marginTop: "15px" }}
        />
      </div>
      <div className="comic-showpage-text">
        <div className="comic-characters">
          CHARACTERS: {characters.join(", ")}
        </div>
        <br />
        <div className="comic-creators">CREATORS: {creators}</div>
        <br />
        <div className="comic-description">
          SYNOPSIS: {props.comic.description}
        </div>
      </div>
    </div>
  )
}

export default ComicShowPage
