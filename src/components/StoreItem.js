import CommandButton from "./CommandButton";
import React, {useEffect, useState} from "react";


const StoreItem = ({item, onBuy, onAddToCart}) => {
    console.log("item: ", item)

    return (<div className="item">
            <img src={item.imageUrls[0]} alt={item.name} className="item-image"/>
            <h2 className="item-topic">{item.name}</h2>
            <div className='item-buttons'>
                <CommandButton text="Buy Now" onClick={onBuy} className="custom-button1"/>
                <CommandButton text="Add to Cart" onClick={onAddToCart} className="custom-button1"/>
            </div>
        </div>);
};

export default StoreItem;
