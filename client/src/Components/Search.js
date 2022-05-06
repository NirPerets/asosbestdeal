import { Component } from "react";
import Check from '../Icons/check.svg'
import Remove from '../Icons/remove.svg'
import Results from './Result'
import Icon__ATC from "../Icons/Icon__ATC";

const countries = {
    us: "ארצות הברית",
    com: "בריטניה",
    dk:  "דנמרק",
    pl: "פולין",
    se: "שבדייה",
    de: "גרמניה",
    fr: "צרפת",
    es: "ספרד",
    nl: "הולנד",
    it: "איטליה",
    au: "אוסטרליה",
    hk: "הונג קונג",
    cn: 'סין',
    cx: 'איי כריסמס'
}

class Search extends Component {
    state = {
        products: [],
        url: "",
        fullResults: [],
        ils: this.props.ils,
        showResults: false,
        addingProduct: false,
        max: false,
        searchError: false,
        bagError: false,
    }

    fetchAll = () => {
        if(this.state.products.length == 0) {
            this.setState({bagError: true})
            return;
        } else if(this.setState == true) {
            this.setState({bagError: false})
        }
        this.setState({showResults: true})
        fetch('/bulkFetch', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: this.state.products,
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ fullResults : data})
            })
    }

    addProduct = async (e) => {
        e.preventDefault();
        document.querySelector("#productInput").value = ""
        if(this.state.url == "" || !this.state.url.includes(".asos.")) {
            this.setState({searchError: true})
            return;
        } else {
            this.setState({searchError: false})
        }
        await this.setState({addingProduct: true})
        fetch('/getImage', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: this.state.url,
            })
        }).then(res => res.json())
            .then(async(data) => {
                const product = {
                    url: this.state.url,
                    image: data.image.url,
                    name: data.name,
                }
                this.setState(prevState => ({
                    products: [...prevState.products,product],
                }));
                await this.setState({addingProduct: false})
                this.setState({url: ""})
                if(this.state.products.length == 8) {
                    this.setState({max: true})
                }
            })
    }

    anotherSearch = () => {
        this.setState({
            products: [],
            showResults: false,
            fullResults: [],
            searchError: false,
            bagError: false,
            max: false,
        });
    }

    handleInput = (e) => {
        this.setState({url: e.target.value});
    }

    deleteProduct = (index) => {
        let tempArr = this.state.products;
        tempArr.splice(index,1);
        this.setState({products: tempArr});
    }

    render() {
        if(this.state.ils == 0) {
            return(
                <div className="resultsPage">
                    <div className="loader"></div>
                </div>
            )
        }

        if(!this.state.showResults) {
            return(
                <>
                    <div className="searchPage_container">
                        <div className="searchPage">
                            <div className="searchPageGrid">
                                <div className="right-side">
                                    <form onSubmit={this.addProduct}>
                                        <label>הדבק את הקישור למוצר (מקסימום 8)</label>
                                        <div className="group">
                                            {
                                                this.state.max ?
                                                (<p className="maxedBtn" disabled>הגעתה למקסימום</p>) :
                                                (<button disabled={this.state.addingProduct}>{ Icon__ATC }</button>)
                                            }
                                            <input id="productInput" onChange={this.handleInput} placeholder="...https://www.asos.com" type="text" />
                                        </div>
                                        {
                                            this.state.searchError ? 
                                            (<p className="error">קישור ריק או קישור לא מאסוס</p>) : (<></>)
                                        }
                                    </form>

                                    <div className="buttonCont">
                                        <button onClick={this.fetchAll} className="calcButton">
                                            הראה לי תוצאות
                                        </button>
                                        {
                                            this.state.bagError ?
                                            (<p className="error">הסל ריק</p>) : (<></>)
                                        }
                                    </div>
                                </div>

                                <div className="bag">
                                    <h1>הסל שלך</h1>
                                    <div className="readyProducts">
                                            {
                                                this.state.products.map((item,index) => {
                                                    return(
                                                        <div className="miniProduct">
                                                            <button onClick={() => this.deleteProduct(index)}>
                                                                <div className="image" style={{background:("url(https://" + item.image + ")")}}>
                                                                    <img className="check" src={Check} />
                                                                    <img className="remove" src={Remove} />
                                                                </div>
                                                            </button>
                                                            <p>{ item.name }</p>
                                                        </div>
                                                    );
                                                })
                                            }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <div class="searchPage_container">
                    <Results 
                        products={this.state.products} 
                        sums={this.state.fullResults} 
                        countries={countries} 
                        ils={this.state.ils} 
                        anotherSearch={this.anotherSearch}
                        />
                </div>
            )
        }
    }
}

export default Search;