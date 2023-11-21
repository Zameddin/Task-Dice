import React from 'react'
import { useState } from 'react'
import './Dice.css'
import dice1 from '../Images/dice 1.png'
import dice2 from '../Images/dice 2.png'
import dice3 from '../Images/dice 3.png'
import dice4 from '../Images/dice 4.png'
import dice5 from '../Images/dice 5.png'
import dice6 from '../Images/dice 6.png'
const Dice = () => {
  let massive = [dice1 , dice2 , dice3 , dice4 , dice5 ,dice6]
const [image , setImage] = useState(dice3)
const [image2 , setImage2] = useState(dice2)
function change(){

  setImage( massive[Math.floor(Math.random() * massive.length)])
}
function change2(){

  setImage( massive[Math.floor(Math.random() * massive.length)])
}


  return (
    <div className='Dice'>
        <img onClick={change} src={image} alt='dice1'/>

        <img onClick={change2} src={image2} alt='dice1'/>
    </div>
  )
}

export default Dice