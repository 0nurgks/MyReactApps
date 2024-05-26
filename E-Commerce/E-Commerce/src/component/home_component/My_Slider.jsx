import React from 'react'
import Slider from 'react-slick';

const My_Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>

            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b902d4d-e794-450c-9c34-c225b0f889bc/v2k-run-ayakkab%C4%B1-FfdzNz.png" alt="" />
                    </div>
                    <div>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

            </div>
        </div>
    );
}


export default My_Slider