
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * 
 * <div id="parent">
 * 
 * <div id ="child">
 * 
 * <h1> I'm h1 tag </h1>
 * 
 * </div>
 * 
 * </div>
 * 
 * 
 * 
 * 
 * 
 */



const Header = () => {
    return(
        <div className ="header">
        <div className="logo-container">
            <img className="logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" />
        </div>
        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<AppLayout />); 
