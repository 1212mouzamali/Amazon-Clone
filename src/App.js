import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import gift from './Images/giftonsofa.jpg';
import lunar from './Images/lunarpic.jpg';
import SB from './Images/SB.jpg';
import kF from './Images/kF.jpg';
import EFG from './Images/EFG.jpg';
import Newarrival from './Images/Newarrival.jpg';


const App = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
         <img src={gift} alt="" className='gift' />
        </Carousel.Item>
        <Carousel.Item>
        <img src={lunar} alt="" className='lunar'/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={SB} alt="" className='SB' />         
        </Carousel.Item>

        <Carousel.Item>
        <img src={EFG} alt="" className='SB' />         
        </Carousel.Item>

        <Carousel.Item>
        <img src={kF} alt="" className='SB' />         
        </Carousel.Item>

        <Carousel.Item>
        <img src={Newarrival} alt="" className='SB' />         
        </Carousel.Item>
      </Carousel>
      
      </div>
      

  
  )
}

export default App;
