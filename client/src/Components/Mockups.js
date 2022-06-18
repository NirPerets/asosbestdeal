import Mockup1 from '../asos-1.png'
import Mockup2 from '../asos-2.png'
import Mockup3 from '../asos-3.png'
import Mockup4 from '../asos-4.png'
import Icon__Bag from '../Icons/Icon__Bag'
import Icon__Wand from '../Icons/Icon__Wand'
import Icon__Flag from '../Icons/Icon__Flag'
import Icon__Money from '../Icons/Icon__Money'

import Slider from "react-slick"

function Mockups() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
    }

    return(
        <div className="mockups__wrapper" id="mockups">
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <div className="mockups desktop__mockups">
                <div className="mockup mockup-1">
                    <div className='mockup__info'>
                        { Icon__Bag }
                        <p>
                            בחירת הפריטים <strong>לבדיקה</strong> הרצויים 
                        </p>
                    </div>

                    <div className='mockup__img'>
                        <img src={ Mockup1 } />
                    </div>
                </div>
                <div className="mockup mockup-2">
                    <div className='mockup__info'>
                        { Icon__Wand }
                        <p>
                            הדבקת הלינקים והוספת הפריטים לתיק
                        </p>
                    </div>

                    <div className='mockup__img'>
                        <img src={ Mockup2 } />
                    </div>
                </div>
                <div className="mockup mockup-3">
                    <div className='mockup__info'>
                        { Icon__Flag }
                        <p>
                            קבלה של רשימת המדינות ומחיריהם
                        </p>
                    </div>

                    <div className='mockup__img'>
                        <img src={ Mockup3 } />
                    </div>
                </div>
                <div className="mockup mockup-4">
                    <div className='mockup__info'>
                        { Icon__Money }
                        <p>
                            סקירת המדינה <strong>הזולה</strong> ביותר 
                        </p>
                    </div>

                    <div className='mockup__img'>
                        <img src={ Mockup4 } />
                    </div>
                </div>
            </div>

            <div className="mockups mobile__mockups">
                <Slider {...settings}>
                    <div className="mockup mockup-1">
                        <div className='mockup__info'>
                            { Icon__Bag }
                            <p>
                                בחירת הפריטים <strong>לבדיקה</strong> הרצויים 
                            </p>
                        </div>

                        <div className='mockup__img'>
                            <img src={ Mockup1 } />
                        </div>
                    </div>
                    <div className="mockup mockup-2">
                        <div className='mockup__info'>
                            { Icon__Wand }
                            <p>
                                הדבקת הלינקים והוספת הפריטים לתיק
                            </p>
                        </div>

                        <div className='mockup__img'>
                            <img src={ Mockup2 } />
                        </div>
                    </div>
                    <div className="mockup mockup-3">
                        <div className='mockup__info'>
                            { Icon__Flag }
                            <p>
                                קבלה של רשימת המדינות ומחיריהם
                            </p>
                        </div>

                        <div className='mockup__img'>
                            <img src={ Mockup3 } />
                        </div>
                    </div>
                    <div className="mockup mockup-4">
                        <div className='mockup__info'>
                            { Icon__Money }
                            <p>
                                סקירת המדינה <strong>הזולה</strong> ביותר 
                            </p>
                        </div>

                        <div className='mockup__img'>
                            <img src={ Mockup4 } />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Mockups