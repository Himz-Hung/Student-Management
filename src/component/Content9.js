import React from 'react'
import './css/content9.css'
import IMG1 from '../asset/img/callus.png'
import IMG2 from '../asset/img/hackergirl.png'
import GIF from '../asset/img/gif1.gif'
export default function Content9() {
  const callus = IMG1;
  const hackergirl = IMG2;
  const title = "You don’t have to see the whole staircase just take the first step";
  const script = "Amet in a suspendisse convallis eget, Amet in a suspendisse convallis egetAmet in a";
  const button1 = "Get Started";
  const button2 = "Place a call";
  const gif = GIF;
  return (
    <div className='content9'>
      <div className=' front'>
        <div className='col-md-6 conimg'>
        <img src={callus} alt='' className='callusimg' />
        </div>
        <div className='col-md-6 context'>
          <div className='text'>
            <span className='title'>{title}</span> <br></br>
            <span className='textt' > {script} </span>
          </div>
          <div className='button'>
            <button className='button1'>{button1}</button>
            <button className='button2'>{button2}</button>
          </div>
        </div>
      </div>

      <div className='con'>
        <div className='cover'>
        </div>
        <div className='gif row'>
          <img src={gif} alt='' className='img1 col-md-4' />
          <img src={gif} alt='' className='img2 col-md-4' />
          <img src={gif} alt='' className='col-md-4' />
        </div>
        <img src={hackergirl} alt='' className='bgr' />
        
      </div>


    </div>
  )
}