import Slider from "react-slick";
import React from "react";

const TabBar = ({ categories ,activeCategory, onTabChange }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 3,
    };

    return (
        <div className="tab-bar">
            <Slider {...settings}>
                {categories.map(category => (
                    <div key={category} className={category === activeCategory ? 'active' : ''}>
                        <button onClick={() => onTabChange(category)}>
                            {category.name}
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TabBar;
