import React from 'react';
import CarouselComponent from "./home/CarouselComponent";
import BannersHomeComponent from "./home/BannersHomeComponent";
import CategoriesHomeComponent from "./home/CategoriesHomeComponent";
import FeaturedProductsComponent from "./home/FeaturedProductsComponent";
import Header from "./header/Header";
import FooterComponent from "./home/FooterComponent";

class HomeContainer extends React.Component {

    render () {
        return (
            <div >
                <Header/>
                <CarouselComponent/>
                <BannersHomeComponent/>
                <CategoriesHomeComponent/>
                <FeaturedProductsComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default HomeContainer;