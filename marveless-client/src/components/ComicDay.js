import React from "react"

const ComicDay = props => {
  let creatorsName = props.comic.creators.items.map(creator => {
    return creator.name
  })
  let characters = props.comic.characters.items.map(character => {
    return character.name
  })
  return (
    <div className="comic-day-card">
      <h2>{props.comic.title}</h2>
      <img
        alt=""
        src={
          props.comic.thumbnail.path +
            "/portrait_uncanny" +
            "." +
            props.comic.thumbnail.extension || ""
        }
      />
      {/* <h4>{creatorRole}:</h4> */}
      <div className="comic-day-text">
        <h4>CREATORS: {creatorsName.join(", ")}</h4>
        <br />
        <h4>CHARACTERS: {characters.join(" , ")}</h4>
        <br />
        <h4>From the Series: {props.comic.series.name}</h4>
        <br />
        <h4>{props.comic.description}</h4>
      </div>
    </div>
  )
}

export default ComicDay
