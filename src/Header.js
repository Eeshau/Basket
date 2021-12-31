import React, {useContext} from 'react'
import "./Header.css"
import {StoreContext} from "./Store"
import logo from "./Logo.png"

function Header(props){

    function changeFilterStream(type){
        props.setPage(type)
    }


    return (
        <div className="Header_Super_Parent">
            <div className="Header_top">
                {/* <img onClick={() => changeFilterStream("ALL")} src={logo} /> */}
                <h2 onClick={() => changeFilterStream("ALL")} src={logo}>Basket</h2>
            </div>
        <div className="Header_Parent">        
            <h3 onClick={() => changeFilterStream("catagory")}>Lists</h3>
            <h3 onClick={() => changeFilterStream("store")}>Stores</h3>
            <h3 onClick={() => changeFilterStream("date")}>Date</h3>

        </div>
        </div>
    )
}

export default Header 