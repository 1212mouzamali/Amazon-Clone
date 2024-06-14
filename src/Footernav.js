import React from "react";
import '../src/Footernav.css';
import bars from './Images/bars-solid.svg'
const Footernav = () => {
    return (
        <div>
            <div className="main-footer">
                <ul className="Footernav d-flex">
                    <li>
                        <a href="#" className="d-flex pt-1"><img src={bars} className="icon px-1"/> All</a>
                    </li>
                    <li className="px-3">
                        <a href="#">Today's Deals</a>
                    </li>
                    <li className="px-1">
                        <a href="#">Registry</a>
                    </li>
                    <li className="px-3">
                        <a href="#">Customer Services</a>
                    </li>
                    <li className="px-1">
                        <a href="#">Gift Cards</a>
                    </li>
                    <li className="px-3">
                        <a href="#">Sell</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Footernav;