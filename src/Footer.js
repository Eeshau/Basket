import React from 'react'
import "./Footer.css"

function Footer(props) {
    function changeFilterStream(type){
        props.setPage(type)
    }

    return (
        <div className="Footer_Parent">
            {/* <input className="InputBar"></input> */}
            <button  onClick={() => changeFilterStream("Add")} >ADD ITEM</button>
        </div>
    )
}

export default Footer