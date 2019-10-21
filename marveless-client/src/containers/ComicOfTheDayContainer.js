import React from "react"
import ComicDay from "../components/ComicDay"

const ComicOfTheDayContainer = props => {
  // console.log("COMIC DAY", props.comicDay.data.results)
  let comic = props.comicDay.data.results.map(comic => {
    return <ComicDay key={comic.id} comic={comic} />
  })

  return <div>{comic}</div>
}

export default ComicOfTheDayContainer
