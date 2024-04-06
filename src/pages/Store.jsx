import React, {useEffect, useState} from 'react';
import MainTopic from '../components/MainTopic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Store.css';
import TabBar from "../components/TabBar";
import axios from "axios";
import StoreItem from "../components/StoreItem";


function Store() {

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    const[products, setProducts] = useState([])

    const[items, setItems] = useState([])

    const onBuy = (product) => {

    }

    const onAddToCart = (product) => {

    }

    const handleTabChange = category => {
        setActiveCategory(category);
        const productItems = []
        products.forEach((product) => {
            if(product.categoryId === category.id) {
                productItems.push(product)
            }
        })
        setItems(productItems)
    };

    function getProducts() {
        axios.get("http://localhost:8080/api/v1/products/all")
            .then(function (response) {
                setProducts(response.data)
                getCategories()
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function getCategories() {
        axios.get("http://localhost:8080/api/v1/categories/all")
            .then(function (response) {
                setCategories(response.data)
                handleTabChange(response.data[0])
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (<div className='our-store'>
        <hr className='servicehr2'/>
        <MainTopic title="Our Store"/>
        <TabBar categories={categories} activeCategory={activeCategory} onTabChange={handleTabChange}/>
        <div className="items-container">
            {items.map((item) => (
                <StoreItem item={item} onAddToCart={onAddToCart} onBuy={onBuy}/>
            ))}
        </div>
    </div>);
}

export default Store;

