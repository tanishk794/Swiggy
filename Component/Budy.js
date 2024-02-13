import arrList from "../Util.js/arrList";
import Rest from "./Rest";
import React, { useState } from 'react';


const Budy = () => {
  
  const urldata= fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4629171&lng=77.07724549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   urldata.then(urldata.resolve)
  const result = urldata.json();
  return (
    <div className='bodyCon'>
      <div className='searchBox'>
        <input type='text' />
      </div>

      <div className='restCon'>
        {arrList.map((x, index) => (
          <Rest key={index} arrObj={x}/>
        ))}
      </div>
    </div>
  );
};

export default Budy;
