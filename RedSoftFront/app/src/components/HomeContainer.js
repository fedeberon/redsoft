import React from 'react';
import CarouselComponent from "./home/CarouselComponent";
import BannersHomeComponent from "./home/BannersHomeComponent";
import CategoriesHomeComponent from "./home/CategoriesHomeComponent";
import FeaturedProductsComponent from "./home/FeaturedProductsComponent";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./header/Header";
import FooterComponent from "./home/FooterComponent";

class HomeContainer extends React.Component {

    render () {
        return (
            <div>
                <CarouselComponent/>
                <BannersHomeComponent/>
                <CategoriesHomeComponent/>
                <FeaturedProductsComponent/>
            </div>
        );
    }
}

export default HomeContainer;