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
                <div className='!flex  px-10 mx-3'>
                        <div className='!flex flex-col justify-center'>
                            <div   className='!text-3xl font-bold'>
                                En güzel ayakkabılar burada
                            </div>
                            <div>
                            Erdem Göksu
                            </div>
                        </div>
                    <div className='!flex ml-auto' >
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b902d4d-e794-450c-9c34-c225b0f889bc/v2k-run-ayakkab%C4%B1-FfdzNz.png" alt="" />
                    </div>
                </div>
                <div className='!flex  px-10 mx-3'>
                        <div className='flex flex-col justify-center'>
                            <div   className='!text-3xl font-bold'>
                                En güzel ayakkabılar burada
                            </div>
                            <div>
                            Erdem Göksu
                            </div>
                        </div>
                    <div className='flex ml-auto' >
                        <img className="ml-auto " src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b902d4d-e794-450c-9c34-c225b0f889bc/v2k-run-ayakkab%C4%B1-FfdzNz.png" alt="" />
                    </div>
                </div>
                <div className='!flex  px-10 mx-3'>
                        <div className='flex flex-col justify-center'>
                            <div   className='!text-3xl font-bold'>
                                En güzel ayakkabılar burada
                            </div>
                            <div>
                            Erdem Göksu
                            </div>
                        </div>
                    <div className='flex ml-auto' >
                        <img className="ml-auto " src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b902d4d-e794-450c-9c34-c225b0f889bc/v2k-run-ayakkab%C4%B1-FfdzNz.png" alt="" />
                    </div>
                </div>
                    
                </Slider>

            </div>
        </div>
    );
}


export default My_Slider