import React from "react"

const ComicShowPage = props => {
  // console.log(props.comic.creators)
  let characters = props.comic.characters.items.map(character => character.name)
  let creators = props.comic.creators.items.map(creator => creator.name)
  let creator = props.comic.creators.items.map(creator => creator.resourceURI)
  return (
    <div>
      Comic
      {/* <div className="comic-title">{props.comic.title}</div> */}
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
      <div className="comic-characters">{characters}</div>
      <div
        className="comic-creators"
        onClick={() => props.clickHandler(creator)}
      >
        {creators}
      </div>
      <div className="comic-description">{props.comic.description}</div>
    </div>
  )
}

export default ComicShowPage
