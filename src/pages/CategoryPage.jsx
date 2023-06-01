import React from "react";
import Announce from "../componenents/Announce";
import Navbar from "../componenents/Navbar";
import Products from "../componenents/Products";
import NewsLetter from "../componenents/Newsletter";
import Footer from "../componenents/Footer";

import { Slider } from "@mui/material";

function CategoryPage (){
    return <div>
        <Announce/>
        <Navbar/>
    
        <div className="flex flex-col p-5">
            <h1 className="text-[30px]">Men's Cloth</h1>
            <div className="flex items-center justify-between mt-3">
                <div className="flex">
                    <p>Filter By</p>
                    <select className="ml-3 border-2 border-silver">
                        <option selected disabled>Size</option>
                        <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Extra Large</option>
                    </select>
                    <select className="ml-3 border-2 border-silver">
                        <option selected disabled>Color</option>
                          <option>Yellow</option>
                      <option>Blue</option>
                      <option>Red</option>
                      <option>Green</option>
                    </select>
                </div>
                <div className="flex ">
                    <p>Sort by</p>
                    <select className="ml-3 border-2 border-2 border-silver">
                         <option selected >Newest (first)</option>
                      <option>Oldest (first)</option>
                      <option>Price (asc)</option>
                      <option>Price (desc)</option>
                    </select>
                </div>
            </div>
        </div>
       
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
}
export default CategoryPage;