import React from "react";
import Announce from "../componenents/Announce";
import Navbar from "../componenents/Navbar";
import Slider from "../componenents/Slider";
import Categories from "../componenents/Categories";
import Products from "../componenents/Products";
import Newsletter from "../componenents/Newsletter";
import Footer from '../componenents/Footer';

function Home(){
    return <div>
        <Announce/>
        <Navbar/>
        <Slider/>
        <Categories/>
          <Products/>
          <Newsletter/>
          <Footer/>
    </div>;
}

export default Home;