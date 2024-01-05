import { Star } from "@phosphor-icons/react";
import { useState } from "react";

export default function StarRating({ numberOfStars = 5 }) {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(index) {
    console.log(index)
    setRating(index)
  }

  function handleMouseEnter(index) {
    console.log(index)
    setHover(index)
  }

  function handleMouseLeave(index) {
    console.log(index)
    setHover(index)
  }

  return (
    <div className="star-rating">
      {
        [...Array(numberOfStars)].map((_, index) => {
          index++

          return <Star
            size={40}
            className={index <= (hover || rating) ? "on" : "off"}
            weight="thin"
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        })
      }
    </div>
  )
}
