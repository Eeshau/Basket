import React, {useEffect} from 'react'
import "./FilterTypes.css"

export default function FilterCard(props) {
    
    function changeItemsStream(type){
        props.setStreamFilter(type)
    }


    return (
        <div className="FilterCard_Parent">
            <h3 onClick={() => changeItemsStream(props.filterName)}>{props.filterName}</h3>
        </div>
    )
}
