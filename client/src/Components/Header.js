import Logo from '../LOGO.png'
import Icon__Arrowleft from '../Icons/Icon__Arrowleft'
import Icon__Calc from '../Icons/Icon__Calc'

function Header() {
    return(
        <>
            <div className="site__header">
                <div className="logo">
                    <img src={ Logo } />
                </div>
                <a href="#calculator" className="btn price__checker">
                    <p>לבדיקת מחירים</p>
                    <div className='icon'>
                        <span className="desktop__icon">
                            { Icon__Arrowleft }
                        </span>
                        <span className="mobile__icon">
                            { Icon__Calc }
                        </span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Header