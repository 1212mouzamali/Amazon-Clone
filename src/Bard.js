import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import '../src/Bard.css'
import logo from '../src/Topbar images/amazon logo.png';
import location from '../src/Topbar images/location.png';
import usaflag from '../src/Topbar images/usaflag.jpg';
import cart from '../src/Topbar images/cart.png';
import searchicon from '../src/Images/searchicon.svg';
const Bard = () => {
  return (
    <div>
      {/* amazon logo start here
    amazon logo start here */}
      <div className="container-fluid main">
        <div className="row ">
          <div className="col-2 amazon-logo-col">
            <ul className='d-flex alogo'>
              <li className='pt-2'>  <a href=""><img src={logo} alt="" className='amazon' /></a>
              </li>
              <li>
                <a href=""><p className='deliver'>Deliver to</p>
                  <p className='pakistan  d-flex  '><img src={location} alt="" className='location px-1' />Pakistan</p></a>
              </li>
            </ul>
          </div>
          {/* amazon logo ends here
    amazon logo ends here */}
          {/* 
    mid search bar starts here
    mid search bar starts here */}
          <div className="input-col">
            <Navbar>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className='d-flex mid-input flex-grow-1'>

                  <Dropdown className='All-button'>
                    <Dropdown.Toggle className='All '>
                      All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#action/1">Action</Dropdown.Item>
                      <Dropdown.Item href="#action/2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#action/3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                  <input type="text" placeholder="Search Amazon" className=" input-increase" />
                  <Button className="searchicon"><img src={searchicon} alt="" width={20} className='icon-color' /></Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>

          {/* mid search bar ends here
    mid search bar ends here */}



          {/* usa flag dropdown starts here
    usa flag dropdown starts here */}
          <div className="col-4 second-ul">
            <ul className='d-flex'>
              <li className='pt-3'>
                <div className='d-flex justify-content-center'>

                  <div className="image-container">
                    <img src={usaflag} alt="" width={21} height={18} className='usaflag' />
                  </div>
                  <div className="text-container EN">
                    EN
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='EN-btn'>
                      <Dropdown.Menu>
                        {/* Replace the options with your own dropdown content */}
                        <Dropdown.Item href="#option1">Option 1</Dropdown.Item>
                        <Dropdown.Item href="#option2">Option 2</Dropdown.Item>
                        <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Toggle>
                  </Dropdown>
                </div>
              </li>

              <li>
                <a href="#">
                  <div className="text-container hello">
                    Hello, sign in
                  </div>
                  <div className='d-flex justify-content-center'>
                    <div className="text-container accounts">
                      Accounts & Lists
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className='EN-btn'>


                        <Dropdown.Menu>
                          {/* Replace the options with your own dropdown content */}
                          <Dropdown.Item href="#option1">Option 1</Dropdown.Item>
                          <Dropdown.Item href="#option2">Option 2</Dropdown.Item>
                          <Dropdown.Item href="#option3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Toggle>
                    </Dropdown>

                  </div>
                </a>
              </li>
              {/* usa flag dropdown ends here
    usa flag dropdown ends here */}
            <li>
                <a href="#">
                  <div className="text-container return">
                    Returns
                  </div>
                  <div className="text-container order">
                    & Orders
                  </div>
                </a>
              </li>
             
             
             
              <li>
                <a href="#">
                  <div className='d-flex justify-content-center'>
                    <div className="image-container">
                      <img src={cart} className='cart-img' />
                    </div>
                    <div className="text-container cart pt-2 ">
                    <h6>Cart</h6>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Hello and sign in starts here
    Hello and sign in starts here */}


          {/* Hello and sign in ends here
    Hello and sign in ends here*/}

          {/* Returns and orders starts here
    Returns and orders starts here */}

        </div>
      </div>
    </div>
  )
}

export default Bard;
