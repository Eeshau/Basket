import React, { useState, Component, useContext, useEffect } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import './App.css';
import ItemCard from "./ItemCard.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Stream from "./Stream.js"
import FilterTypes from "./FilterTypes.js"
import StoreProvider from "./Store"
import AddItem from './AddItem';

function App() {
  const [page, setPage] = useState("ALL");
  const [link, setLink] = useState("");
  const [streamFilter, setStreamFilter] = useState(null);
  const [items, setItems] = useState([{
    name: "couch",
    number: "0",
    image: "https://cdn-images.article.com/products/SKU25A/2890x1500/image48829.jpg",
    catagory: "furniture",
    price: "100",
    store: "bedbath",
    date: "nov 10th"
  }, {
    name: "bed",
    number: "1",
    image: "https://www.ikea.com/ca/en/images/products/malm-bed-frame-high-black-brown-luroey__0638608_pe699032_s5.jpg",
    catagory: "furniture",
    price: "150",
    store: "bedbath",
    date: "nov 11th"
  }, {
    name: "sunscreen",
    number: "2",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-sunscreens-1590160013.png?crop=0.449xw:0.897xh;0.274xw,0.0449xh&resize=640:*",
    catagory: "cosmetics",
    price: "9",
    store: "sephora",
    date: "nov 12th"
  }]);
  const [listCatagories, setListCatagories] = useState([])
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setPage("ALL");
    setSearchTerm(event.target.value);
  };

  function setStorage (value) {
    window.chrome.storage.local.set({"key": value}, function() {
      console.log('Value is set to ' + value.at(-1).name);
    });
    getStorage(value)
	}


  //run this function as soon as the app starts, to get the list updated historical values
  function getStorage (value) {
		window.chrome.storage.local.get("key", function(result) {
      console.log('Value currently is ' + result.key.at(-1).name);
      setItems(result.key)
    });
	}


  window.chrome.windows.getCurrent({populate:true}, window => {
    const site = window.tabs.filter(tab => tab.active)[0].url
    setLink(site)
    console.log(window.tabs.filter(tab => tab.active)[0])
  });





//   function modifyDOM() {
//     //You can play with your DOM here or check URL against your regex
//     console.log('Tab script:');
//     console.log(document.body);
//     return document.body.innerHTML;
// }

//   window.chrome.tabs.executeScript({
//     code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
//   }, (results) => {
//     //Here we have just the innerHTML and not DOM structure
//     console.log('Popup script:')
//     console.log(results[0]);
//   });



  

  return (
    <div>
      <StoreProvider>
      <Header setPage={setPage}/>
      <input placeholder="search" value={searchTerm} onChange={handleChange} style={{width:"60%"}} className="SearchBar"/>


      { (page == "ALL" && setSearchTerm =="") &&
        <Stream filterType={page} streamFilter={streamFilter} items={items} setItems={setItems} setListCatagories={setListCatagories}/>
      }

      { (page == "catagory" || page == "store" || page == "date") &&
        <FilterTypes filterType={page} setStreamFilter={setStreamFilter} items={items} setItems={setItems} setListCatagories={setListCatagories}/>
      }

      { (page == "catagory" || page == "store" || page == "date")  &&
        <Stream filterType={page} streamFilter={streamFilter} items={items} setItems={setItems} setListCatagories={setListCatagories}/>
      }

      { (page == "Add")  &&
        <AddItem filterType={page} items={items} setItems={setItems} listCatagories={listCatagories} setListCatagories={setListCatagories} link={link}/>
      }

      {/* SEARCH FILTER */}
      { (page == "ALL" && setSearchTerm !="") &&
        <Stream filterType={page} items={items} setItems={setItems} streamFilter={streamFilter}  searchTerm={searchTerm}/>
      }

      <button onClick={() => getStorage(items)}>GET value</button>
      {/* <button onClick={() => modifyDOM()}>GET DOM</button> */}

      <Footer setPage={setPage}/>
      </StoreProvider>
    </div>


  );
}

export default App;