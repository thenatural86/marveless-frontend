import React from "react"

const ComicDay = props => {
  // console.log(props.comic)

  let creatorsName = props.comic.creators.items.map(creator => {
    return creator.name
  })
  let characters = props.comic.characters.items.map(character => {
    return character.name
  })
  // let creatorRole = props.comic.creators.items.map(creator => creator.role)
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
      <h4>Creators: {creatorsName.join(", ")}</h4>
      <h4>Characters: {characters.join(" , ")}</h4>
      <h4>From the Series: {props.comic.series.name}</h4>
      <h4>{props.comic.description}</h4>
    </div>
  )
}

export default ComicDay
