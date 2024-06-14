import React from 'react';
import '../src/headset-images/Betweencarosels.css';
// first four images for first col
import Headset from './headset-images/Headset.jpg';
import Keyboard from './headset-images/Keyboard.jpg';
import Mouse from './headset-images/Mouse.jpg';
import Chair from './headset-images/Chair.jpg';
// first four images for first col ends here

import Fuji from './headset-images/Fuji.jpg';
// images of refresh your space starts here
import Water from './headset-images/Water.jpg';
import cloth from './headset-images/cloth.jpg';
import lunch from './headset-images/lunch.jpg';
import perfume from './headset-images/perfume.jpg';
import Balu from './headset-images/Balu.jpg';



const Betweencarosels = () => {
    
    return (
        <div className='for-color'>
            <div className="container Betweencarosels-container ">
                <div className="row">
                    {/* first four images of headset starts here */}
                    {/* first four images of headset starts here */}
                    <div className="col-3 headset-col bg-white">
                    <p className='Gaming'>Gaming Accessories</p>
                        <div className="row">
                            <div className="col-6">
                                <figure>
                                    <img src={Headset} alt="" className='Headset' />
                                   <p>Headsets</p>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure>
                                    <img src={Keyboard} alt="" className='Keyboard' />
                                    <p>Keyboards</p>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <figure>
                                    <img src={Mouse} alt="" className='Mouse' width={100} />
                                <p>Computer mice</p>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure>
                                    <img src={Chair} alt="" className='Chair' />
                                    <p>Chairs</p>
                                </figure>
                            </div>
                        </div>
                    </div>
                    {/* first four images of headset ends here */}
                    {/* first four images of headset ends here */}


                    {/* Fuji image portion starts here */}
                    {/* Fuji image portion starts here */}
                    <div className="col-3 bg-white headset-col">
                        <figure>
                            <p className='Gaming'>Deals in Pcs</p>
                            <img src={Fuji} alt="" className='Fuji'/>
                            
                        </figure>
                    </div>
                    {/* Fuji image portion ends here */}
                    {/* Fuji image portion ends here */}


                    {/* home gadgets dining home kitchen health and beauty starts here */}
                    {/* home gadgets dining home kitchen health and beauty starts here */}
                    <div className="col-3 bg-white headset-col">
                    <p className='Gaming'>Refresh your space</p>

                        <div className="row">
                            <div className="col-6">
                                <figure>
                                    <img src={Water} alt="" className='water'/>
                                    <p>Dining</p>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure>
                                    <img src={cloth} alt=""className='cloth' />
                                    <p>Home</p>
                                </figure>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6">
                                <figure>
                                    <img src={lunch} alt=""className='lunch' />
                                    <p>Kitchen</p>
                                </figure>
                            </div>
                            <div className="col-6">
                                <figure>
                                    <img src={perfume} alt="" className='perfume'/>
                                    <p>Health and beauty</p>
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* home gadgets dining home kitchen health and beauty ends here */}
                    {/* home gadgets dining home kitchen health and beauty ends here */}
                    <div className="col-3 bg-white headset-col  Balu-col">
                        <figure>
                            <p className='Gaming'>Toys under $25</p>
                            <img src={Balu} alt="" className='Balu'/>
                        
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Betweencarosels;
