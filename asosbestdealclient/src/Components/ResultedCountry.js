import Product from './Product'

function ResultedConutry(props) {
    return(
        <div className={ "resultedCountry" + (props.active ? ' active' : '') }>
            {
                props.index == 0 ?
                (<h1>הסל הזול ביותר<div className={"flag-icon " + (props.country.CountryCode ? props.country.CountryCode.toLowerCase() : props.country.code.toLowerCase() )}></div></h1>) :
                (<h1> 
                    { props.country.CountryCode ? props.countries[props.country.CountryCode.toLowerCase()] : props.countries[props.country.code.toLowerCase()]  }
                    <div className={"flag-icon " + (props.country.CountryCode ? props.country.CountryCode.toLowerCase() : props.country.code.toLowerCase() )}></div>
                </h1>)
            }
            <div className="block">
                {
                    props.country.products.length > 0 ?
                        (
                            props.country.products.map((item,index) => {
                                return <Product
                                            currencyCode={ props.country.currency }
                                            ils={ props.ils } 
                                            product={item} 
                                            index={index} 
                                            allProducts={props.allProducts} />
                            })
                        ) :
                        (<div className="loader"></div>)
                }
                <div className="subTotal">
                    {
                        props.country.totalBagPrice != null ?
                        (
                            ((props.country.totalBagPrice * 0.83 * props.ils.USD) < 75) ?
                            (
                                <>
                                <p>סכום כולל (-17%) :</p>
                                <div className="total">
                                    {(props.country.totalBagPrice * 0.83 * props.ils.USD).toFixed(2)} $ / {(props.country.totalBagPrice * 0.83).toFixed(2)} ₪<br/>
                                    לא חוצה את מכסת המע"מ
                                </div>
                                </>
                            ) :
                            (
                                <>
                                <p>סכום כולל (-17%) :</p>
                                <div className="total red">
                                    {(props.country.totalBagPrice * 0.83 * props.ils.USD).toFixed(2)} $ / {(props.country.totalBagPrice * 0.83).toFixed(2)} ₪<br/>
                                    על ההזמנה הזו ישולם מע"מ(בערך) : +₪{(props.country.totalBagPrice * 0.83 * 0.17).toFixed(2)}
                                </div>
                                </>
                            )
                        ) : (<p>חלק מהמוצרים אינם זמינים במדינה זו</p>)
                    }

                </div>
            </div>
        </div>
    )
}

export default ResultedConutry