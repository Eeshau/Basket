import React, { useState, useEffect } from 'react';
import ItemCard from "./ItemCard.js"




function Stream(props) {

  const streamFilter = props.streamFilter;
  var filterType = props.filterType;

  var items = props.items;

  useEffect(() => {
    items = props.items
  }, [props.items])

      if ( props.filterType == "ALL" && props.searchTerm != "") {
        return (
          <ul>
            {items.filter(item => item["name"].includes(props.searchTerm)).map(items => (
              <ItemCard key={items.number}
                itemName={items.name}
                itemPrice={items.price} 
                itemCatagory={items.catagory}
                itemImage= {items.image}
                itemStore= {items.store}
                itemLink ={items.link}
                itemNumber ={items.number}

                setItems = {props.setItems}
                items={props.items}
              />
            ))}
          </ul>
          )
      } else if (props.filterType == "ALL") { 
        return (
          <ul>
            {(items || []).map(items => (
              <ItemCard key={items.number}
                itemName={items.name}
                itemPrice={items.price} 
                itemCatagory={items.catagory}
                itemImage= {items.image}
                itemStore= {items.store}
                itemLink ={items.link}
                itemNumber ={items.number}

                setItems = {props.setItems}
                items={props.items}
              />
            ))}
          </ul>
        )
      } else {
        return (
          <ul>
            {items.filter(item => item[filterType] == streamFilter ).map(items=> (
              <ItemCard key={items.number}
                itemName={items.name}
                itemPrice={items.price} 
                itemCatagory={items.catagory}
                itemImage= {items.image}
                itemStore= {items.store}
                itemLink ={items.link}
                itemNumber ={items.number}

                setItems = {props.setItems}
                items={props.items}
              />
            ))}
          </ul>
          )
        } 
}

export default Stream;