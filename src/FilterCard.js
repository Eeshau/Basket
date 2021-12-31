import React, {useEffect} from 'react'
import "./FilterTypes.css"

export default function FilterCard(props) {
    
    function changeItemsStream(type){
        props.setStreamFilter(type)
    }

    // useEffect(() => {
    //     console.log("from filter card useeffect")
    //     changeItemsStream(props.filterName)
    // }, [props.items])

    return (
        <div className="FilterCard_Parent">
            <h3 onClick={() => changeItemsStream(props.filterName)}>{props.filterName}</h3>
        </div>
    )
}
