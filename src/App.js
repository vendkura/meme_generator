import React from 'react';
import logo from './logo.svg';
import './App.css';
import boxes from './boxes_source'
import Box from './components/Box';
// import Form from "./components/Form"
// import FormChallenge from "./components/FormChallenge"
import Meme from './components/Meme';
import StarWars from './components/Starwars'

function App() {
const [squares, setSquares] = React.useState(boxes);

// IMperative declaration
function toggle(id) {
  setSquares(prevSquares => {
      const newSquares = []
      for(let i = 0; i < prevSquares.length; i++) {
          const currentSquare = prevSquares[i]
          if(currentSquare.id === id) {
              const updatedSquare = {
                  ...currentSquare,
                  on: !currentSquare.on
              }
              newSquares.push(updatedSquare)
          } else {
              newSquares.push(currentSquare)
          }
      }
      return newSquares
  })
}
// Declarative way of implementing the toggle function
// function toggle(id) {
//   setSquares(prevSquares => {
//       return prevSquares.map((square) => {
//           return square.id === id ? {...square, on: !square.on} : square
//       })
//   })
// }
const squareElement = squares.map((box)=>{
  return <Box 
  key={box.id} 
  id={box.id}
  on={box.on}
  toggle={toggle}
  
  />
})


  return (
    <div className="App">
      {/* {squareElement} */}
      <Meme/>
      {/* <StarWars /> */}
    </div>
  );
}

export default App;
