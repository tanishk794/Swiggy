
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.js'
import Budy from "./Budy.js";
import Footer from "./Footer.js";





const AppLayout = () =>{
return(
    <>
<Header/>
<Budy/>
<Footer/>
</>
)

}

const root = ReactDOM.createRoot(document.querySelector(".app"))

root.render(<AppLayout/>)
