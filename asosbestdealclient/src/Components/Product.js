import { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        console.log(this.props.product)
    }

    render() {
        if(this.props.product == null) {
            return (<div className="loader"></div>)
        }
        
        return(
                <div className="product">
                    <div className="image">
                        <img src={"https://" + this.props.allProducts[this.props.index].image} />
                    </div>
                    <div className="text">
                        <div className="top">
                            <a href={this.props.allProducts[this.props.index].url} target="_blank">פתח באסוס</a>
                            <p className="productPrice">
                                {
                                    this.props.product.price != null ?
                                    (this.props.product.price / this.props.ils[this.props.currencyCode]).toFixed(2) + '₪' :
                                    ''
                                }
                            </p>
                        </div>
                        <h1 className="productName">{this.props.product.name}</h1>
                        <div className="bottom">
                            <p className="available__sizes">מידות זמינות : </p>
                                {
                                    
                                    (this.props.product.sizes.length == 0) ?
                                    (<p className="productSizes">אין מידות זמינות</p>) :
                                    (this.props.product.sizes == 'Product Not Available') ?
                                    (<p className="productSizes">מוצר לא זמין</p>) :
                                    (<p className="productSizes">{[...this.props.product.sizes].join(' , ')}</p>)
                                }
                        </div>
                    </div>
                </div>
        )
    }
}

export default Product;

/*

*/