import Icon__Star from '../Icons/Icon__Star'
import Icon__Arrowleft from '../Icons/Icon__Arrowleft'
import Fade from 'react-reveal/Fade';

function Hero() {
    return(
        <>
            <Fade bottom>
            <div className="hero__wrapper">
                <div className="hero">
                    <div className="benefits__grid">
                        <div className="benefit">
                            <div className="star__grid">
                                { Icon__Star }{ Icon__Star }{ Icon__Star }{ Icon__Star }{ Icon__Star }
                            </div>
                            <p>פשוט לשימוש</p>
                        </div>
                        <div className="benefit">
                            <div className="star__grid">
                                { Icon__Star }{ Icon__Star }{ Icon__Star }{ Icon__Star }{ Icon__Star }
                            </div>
                            <p>חוסך מאות שקלים</p>
                        </div>
                        <div className="benefit">
                            <div className="star__grid">
                                { Icon__Star }{ Icon__Star }{ Icon__Star }{ Icon__Star }{ Icon__Star }
                            </div>
                            <p>בדיקה מהירה</p>
                        </div>
                    </div>

                    <div className="hero__title">
                        כלי למציאת<br/>
                        המדינה הזולה ביותר<br/>
                        לסל הקניות שלך<br/>
                        באסוס
                    </div>

                    <div className="hero__subtitle">
                        הכנס את סל הקניות שלך אל המחשבון, המתן מספר שניות ונמצא לך איפה הדיל הטוב ביותר
                    </div>

                    <div className="hero__buttons">
                        <a href="#mockups" className="btn btn__inverse">
                            <p>איך זה עובד ?</p>
                            <span className='icon'>
                                { Icon__Arrowleft }
                            </span>
                        </a>
                        <a href="#calculator" className="btn btn__primary">
                            <p>לבדיקת מחירים</p>
                            <span className='icon'>
                                { Icon__Arrowleft }
                            </span>
                        </a>
                    </div>

                </div>
            </div>
            </Fade>
        </>
    )
}

export default Hero