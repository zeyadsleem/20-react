import './App.css'
import Accordian from './components/according'
import RandomColor from './components/random-color'
import StarRating from './components/random-color/star-rating'

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating numberOfStars={10} />
    </>
  )
}

export default App
