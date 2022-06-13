import Icon__Check from '../Icons/Icon__Check'
import Icon__Globe from '../Icons/Icon__Globe'
import Icon__Rocket from '../Icons/Icon__Rocket'
import Icon__Tax from '../Icons/Icon__Tax'
import Icon__Asos from '../Icons/Icon__Asos'
import Icon__Gift from '../Icons/Icon__Gift'
import Fade from 'react-reveal/Fade';

function Benefits() {
    return(
        <Fade bottom>
        <div className="benefits__wrapper">
            <div className="benefits">
                <div className="benefits__title">שימוש חובה לפני כל רכישה</div>
                <div className="benefits__grid">
                    <div className="left">
                        <div className="benefit">
                            { Icon__Rocket }
                            <div className="benefit__title">למה לבדוק אצלנו?</div>
                            <div className="benefit__text">
                                <p>
                                    למחשבון שלנו יתרונות רבים שפשוט לפני כל קנייה חובה להשתמש בו ולבדוק שאנחנו משיגים את הדיל הטוב ביותר.
                                    שימוש במחשבון יכול לחסוך עשרות ומאות שקלים במחירים ובמיסים
                                </p>
                                <p>
                                    
                                </p>
                                <div className="icons__grid">
                                    <div className='icon'>
                                        { Icon__Check }
                                        <p>מחיר הסל בכל מדינה</p>
                                    </div>
                                    <div className='icon'>
                                        { Icon__Check }
                                        <p>איזה מידות זמינות ואיפה ?</p>
                                    </div>
                                    <div className='icon'>
                                        { Icon__Check }
                                        <p>הבנת המחיר הסופי</p>
                                    </div>
                                    <div className='icon'>
                                        { Icon__Check }
                                        <p>מצב המסים של הסל</p>
                                    </div>
                                    <div className='icon'>
                                        { Icon__Check }
                                        <p>מצב המסים של הסל</p>
                                    </div>
                                    <div className='icon'>
                                        { Icon__Check }
                                        <p>מצב המסים של הסל</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="benefit">
                            <div className="benefit__title">ASOS</div>
                            <div className="benefit__text">
                            <p>
                                אין צורך לומר הרבה מידי על אסוס שלא אמרו כבר – אין כמעט מישהו בישראל שלא שמע על החנות הזאת במיוחד בשנים האחרונות, שהפכה לפופולרית מאוד בקרב הצרכנים בישראל ובצדק.
                            </p>
                            <p>
                                קנייה באסוס הפכה לדבר מאוד משמעותי בחיי היום-יום לחלקינו , וכל זה קרה בעיקר בזכות איכות המוצרים, שלל המותגים העולמי והמחירים הזולים שמפתיעים אותי כמעט כל פעם מחדש.
                            </p>
                            </div>
                        </div>
                        <div className="benefit">
                            { Icon__Tax }
                            <div className="benefit__title">המנעות ממיסים</div>
                            <div className="benefit__text">
                            <p>
                                במידה וקניתם בסכום הזמנה כולל של פחות מ-75$, שימו לב שאתם לא מתקרבים ממש לסכום זה – שלא ייקרה מצב שתתנו למכס אפשרות לגבות מכם מע"מ ועמלות נוספות.                            </p>
                            <p>
                                במידה ואתם חוששים שאתם קרובים מומלץ לקחת מרווח "ביטחון"– שלא ייקרה מצב שבו שער המטבע ישתנה בעת הבדיקה במכס (במידה ותיהיה) או בתשלום המע"מ מראש שיכול להיות שתתקלו באסוס, ותצטרכו לשלם מע"מ ועמלות בגלל שחרגתם מתקרת הפטור ממש בקצת.                            </p>
                            </div>
                        </div>
                        <div className="benefit">
                            { Icon__Globe }
                            <div className="benefit__title">מציאת המדינה הזולה ביותר</div>
                            <div className="benefit__text">
                            <p>
                                כאמור אסוס מנהלת מספר אתרים נפרדים למדינות שונות בעולם. תוכלו למצוא לעיתים הבדלים בין האתרים השונים, בין היתר: מחירים שונים, מלאי שונה, מותגים נוספים וכו'.
                            </p>
                            <p>
                                טעות נפוצה של ישראלים רבים היא רכישה דרך האתר הישראלי שהוא סטטיסטית בממוצע בין היקרים ביותר (לא מפתיע)
                            </p>
                            </div>
                        </div>
                        <div className="benefit">
                            { Icon__Gift }
                            <div className="benefit__title">קודי הנחה</div>
                            <div className="benefit__text">
                                <p>
                                 לנו, הלקוחות הישראלים יש קוד הנחה קבוע של 17% הנחה על ההזמנה אשר ניתן להשתמש בו בסכום קנייה של 50 פאונד ומעלה. קוד הההנחה הוא IL17.
                                </p>
                                <p>
                                כאשר מזמינים בסכום קנייה של 100 פאונד ומעלה יש קוד הנחה והוא כולל 17% הנחה על ההזמנה וגם משלוח מהיר (אקספרס) ללא עלות. קוד הקופון הוא IL17PLUS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Benefits