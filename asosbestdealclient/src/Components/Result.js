import { Component } from "react";
import Country from './country'
import ResultedConutry from './ResultedCountry'

class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCountry: ""
        }
    }
    
    setActiveCountry = (country) => {
        this.setState({ activeCountry : country })
    }

    render() {
        if(this.props.sums.length == 0 || this.props.products.length == 0) {
            return(
                <div className="resultsPage">
                    <div className="loader"></div>
                </div>
            )
        }
        return(
            <>
                <div className="resultsPage">
                    <div className="inside">
                        <div className="right">
                            <h1>
                                תוצאות
                                <span>לחץ לצפייה במדינה</span>
                                </h1>
                            <div className="block">
                                {
                                    this.props.sums.length > 0 ?
                                        (
                                            this.props.sums.map(item => {
                                                return <Country 
                                                            country={ item } 
                                                            countries={ this.props.countries } 
                                                            setActiveCountry={ this.setActiveCountry } />
                                            })
                                        ) :
                                    
                                        (<div className="loader"></div>)
                                }
                            </div>
                        </div>

                        <div className="left">
                            {
                                this.props.sums.map((country, index) => {
                                    return(
                                        <ResultedConutry 
                                            country={ country } 
                                            index={ index }
                                            active={ (this.state.activeCountry == country.country) } 
                                            ils={ this.props.ils } 
                                            countries={this.props.countries}
                                            allProducts={ this.props.products } />
                                    )
                                })
                            }

                            <button onClick={this.props.anotherSearch} className="moreSearch">לחיפוש נוסף</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ResultPage