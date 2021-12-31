import React, { Component, useEffect } from 'react'
import FilterCard from "./FilterCard.js"
import "./FilterTypes.css"

function FilterTypes(props) {       
    // const catagory = ["furniture","cosmetics"]
    const catagory = [...new Set(props.items.map((item)=> item.catagory))]
    const store = [...new Set(props.items.map((item)=> item.store))]
    const date = [...new Set(props.items.map((item)=> item.date))]

    var filterType = null;
    if (props.filterType == "catagory") {
        filterType = catagory
    } else if (props.filterType == "store") {
        filterType = store
    } else if (props.filterType == "date") {
        filterType = date
    }

        return (
            <div className="FilterType_Parent">
                <ul>
                    {filterType.map((filterCatagory) => 
                        <FilterCard key={filterCatagory}
                            filterName={filterCatagory}
                            setStreamFilter={props.setStreamFilter}
                        />
                    )}
                </ul>
            </div>
        )
}

export default FilterTypes;