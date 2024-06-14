import React from 'react';
import './Backtotop.css';
import Greenamazonlogo from './Images/Greenamazonlogo.png'
 const Backtotop = () => {
    return (
        <div>
            <div ><a href="#" className="Backtotop-anchor d-flex p-3 justify-content-center border">Back to top</a></div>
            <div className="container-fluid Backtop-main">
                <div className="row">
                <div className="col-2"></div>
                    <div className="col-2 Backtop-uli">
                       
                        <ul>
                            <li><h6>Get to know us</h6></li> 
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About Amazon</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Amazon Devices</a></li>
                            <li><a href="#">Amazon Science</a></li>
                        </ul>


                    </div>
                    <div className="col-2">
                        
                        <ul>
                         <h6>Make Money with Us</h6>
                            <li><a href="#">Sell products on Amazon</a></li>
                            <li><a href="#">Sell on Amazon Business</a></li>
                            <li><a href="#">Sell apps on Amazon</a></li>
                            <li><a href="#">Become an Affiliate</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Self-Publish with Us</a></li>
                            <li><a href="#">Host an Amazon Hub</a></li>
                            <li><a href="#">See More Make Money with Us</a></li>
                        </ul>
                    </div>





                    <div className="col-2">
                       
                        <ul>
                        <h6>Amazon Payment Products</h6>
                            <li><a href="#"> Amazon Business Card</a></li>
                            <li><a href="#">Shop with Points</a></li>
                            <li><a href="#">Reload Your Balance</a></li>
                            <li><a href="#">Amazon Currency Converter</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                       
                        <ul>
                        <h6>Let Us Help You</h6>
                            <li><a href="#">Amazon and COVID-19</a></li>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Your Orders</a></li>
                            <li><a href="#">Shipping Rates & Policies</a></li>
                            <li><a href="#">Returns & Replacements</a></li>
                            <li><a href="#">Manage Your Content and Devices</a></li>
                            <li><a href="#">Amazon Assistant</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row backtop-amazon-logo">
                    <div className="col-3"></div>
                    <div className="col-2"><img src={Greenamazonlogo} alt="" /></div>
                    <div className="col-4 d-flex text-white">
                       <div className='backtop-english'>English</div>
                       <div className='backtop-USD'>$ USD-US Dollar</div>
                       <div className='backtop-US'>United State</div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>

        </div>
    )
}

export default Backtotop;
