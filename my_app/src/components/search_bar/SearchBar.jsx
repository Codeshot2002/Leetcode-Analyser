import React from 'react'
import '../search_bar/search.css'
import { useState } from 'react';
function SearchBar() {
  const[values, setValues] = useState({
    easy : '0',
    medium : '0',
    hard : '0'
  });

  function search() {
    const txt = document.getElementById('box').value;
    var xml = new XMLHttpRequest();
    var url = 'https://leetcode-stats-api.herokuapp.com/' + txt;
    
    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var e = myArr.easySolved;
        var m = myArr.mediumSolved;
        var h = myArr.hardSolved;
        setValues({easy: e,medium: m,hard: h});
      }

    };
    xml.open("GET", url, true);
    xml.send();
  }

  return (
    <>
      <div className="container">
        <h1 className="heading">CHECK YOUR STATS</h1>
        <div className='searchContainer'>
          <input type="text" id='box' placeholder='Enter your leetcode ID' />
          <div className="myBtn" >
            <button className="btn btn-dark" onClick={search}>Search</button>
            <h1 className="score" id="lund">
              Easy Questions : {values.easy}
            </h1>
            <h1 className="score">
              Medium Questions : {values.medium}
            </h1>
            <h1 className="score">
              Hard Questions : {values.hard}
            </h1>
          </div>
        
        </div>
      </div>

    </>
  )
}

export default SearchBar