import React from "react"
import ComicDay from "../components/ComicDay"

const ComicOfTheDayContainer = props => {
  let comic = props.comicDay.data.results.map(comic => {
    return <ComicDay key={comic.id} comic={comic} />
  })

  return <div className="comic-day-container">{comic}</div>
}

export default ComicOfTheDayContainer
