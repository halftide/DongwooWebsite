import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
 
const data = [
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' }},
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },

  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },
  { option: 'P90 | Sand Spray', style: { backgroundColor: 'beige', textColor: 'black' } },
  { option: 'M4A4 | Hellfire', style: { backgroundColor: 'Hotpink', textColor: 'black' } },
]
 
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
 
  const handleSpinClick = () => {
    //  0 - 9
    var randomNumber = Math.floor(Math.random() * 100)
    var newPrizeNumber = 0
    console.log(randomNumber)
    if (randomNumber < 80 ) {

      newPrizeNumber = Math.floor(Math.random() * 7)
    }

    else {

      newPrizeNumber =  8

    }

    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

 
 
  return (
    <>
      <center>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
 
        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <button onClick={handleSpinClick} style ={{color: "white", backgroundColor : "black" , width : "5%" ,border : "black"}}>SPIN</button>
      </center>
    </>
  )
}