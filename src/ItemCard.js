import React, {useEffect, useState} from 'react'
import "./ItemCard.css"

function ItemCard(props) {


    function deleteItem() {
        //delete the item from the list using index, but first find the index where the item name is the same.
        var list = props.items
        var index = list.findIndex(i => i.name === props.itemName)
        list.splice(index, 1)
        props.setItems(list)
    
        //update chrome storage with new list, with deleted item
        window.chrome.storage.local.set({"key": list}, function() {
            console.log('Value is set to ' + list.at(-1).name);
        });
        alert(`Item Deleted`);
    }

        return (
            <div>
            
            <div className="ItemCard_Parent">
                <a target='_blank' href={props.itemLink}>
                    <img src={props.itemImage} ></img>
                    <div className="ItemCard_Info">
                        <p>{props.itemStore}</p>
                        <h2>{props.itemName}</h2>
                        <h4>{props.itemCatagory}</h4>
                    </div>
                </a>
                <div>
                    <button onClick={()=>deleteItem()}>X</button>
                    <h3 >$ {props.itemPrice}</h3>
                </div>
            </div>
            
            </div>
        )
    }

export default ItemCard