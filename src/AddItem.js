import React, { useState, useEffect, Component, useContext } from 'react';
import { useInput } from './useInput';
import "./AddItem.css"
// Is it even nessary to have a seperate item page?
// what info would it have that isn't already on the card, just link to the items site?

export default function AddItem(props) {
    const { value:itemName, bind:bindItemName, reset:resetItemName } = useInput(props.name);
    const { value:price, bind:bindPrice, reset:resetPrice } = useInput('');
    const { value:store, bind:bindStore, reset:resetStore } = useInput(props.store);
    const { value:link, bind:bindLink, reset:resetLink} = useInput(props.link); //use the url from chrome tab here, as default state
    const { value:notes, bind:bindNotes, reset:resetNotes} = useInput('');


    const [catagory, setCatagory] = useState('Select List');
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);

    function setStorage (value) {
        window.chrome.storage.local.set({"key": value}, function() {
          console.log('Value is set to ' + value.at(-1).name);
        });
    }
    

    function handleSelectChange(event) {
        setCatagory(event.target.value);
    }

    const onChangeImage = e => {
        if (e.target.files[0]) {
          setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Added Item ${itemName} $${price} from ${store}, notes: ${notes}`);
        resetItemName();
        resetPrice();
        resetStore();
        resetLink();
        resetNotes();

        props.setItems([...props.items, {
            name: itemName,
            image: imgData,
            catagory: catagory,
            number: "2",
            price: price,
            store: store,
            link: link,
            date: new Date().getDay().toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getFullYear().toString()
        }])
    }

    //if the items change, then as a side effect the setStorage function will run
    useEffect(() => {
        setStorage(props.items);
        var list = props.items.map((item) => item.catagory)
        props.setListCatagories([...new Set(list)])
    }, [props.items])


    

    return (
        <div className="AddItem_Parent">
            <div className="AddItem_Upload">
                <img src={imgData}></img>
                <label for="file-upload" className="AddItem_Upload_Label">⬆️ Upload Image</label>
                <input id="file-upload" type="file" name="upload_img" onChange={onChangeImage}></input>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="AddItem_Content">
                <h4>Item Name</h4>
                <input type="text" {...bindItemName}></input>
                <h4>Price</h4>
                <input type="text" {...bindPrice}></input>
                <h4>Store</h4>
                <input type="text" {...bindStore}></input>
                <h4>List</h4>   
                <input type="text" list="data" onChange={handleSelectChange} />
                <datalist id="data">
                    {props.listCatagories.map((item) =>
                    <option value={item} />
                    )}
                </datalist>
                <h4>Link</h4>
                <input type="text" {...bindLink}></input>
                <h4>Notes</h4>
                <input type="text" {...bindNotes}></input>
            </div>
            <button type="submit" value="Submit" > ADD ITEM </button>
            </form>
        </div>
    )

}
