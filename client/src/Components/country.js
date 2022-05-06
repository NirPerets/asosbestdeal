import { Component } from "react";
import '../Flags/flag-icon.css'

class Country extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            {
                this.props.country != null ?
                (
                    <div className="country" onClick={ () => this.props.setActiveCountry(this.props.country.country) }>
                        <div className="name">
                            <div className={"flag-icon " + (this.props.country.CountryCode ? this.props.country.CountryCode.toLowerCase() : this.props.country.code.toLowerCase() )}></div>
                            <p>{ this.props.country.CountryCode ? this.props.countries[this.props.country.CountryCode.toLowerCase()] : this.props.countries[this.props.country.code.toLowerCase()]  }</p>
                        </div>
                        <div className="price">
                            {
                                this.props.country.totalBagPrice == 'NaN' ? 'לא זמין' : ('₪' + this.props.country.totalBagPrice)
                            }
                        </div>
                    </div>
                ) :
                (<div></div>)
            }
                <hr />
            </>
        )
    }
}

export default Country