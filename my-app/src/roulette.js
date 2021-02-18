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
  { option: '10', style: { backgroundColor: 'Hotpink', textColor: 'black' } },
]
 
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
 
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(3)
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
          setMustSpin(true)
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
      </center>
    </>
  )
}