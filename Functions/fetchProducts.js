const axios = require('axios');
const res = require('express/lib/response');
const fs = require('fs')

const fetchProduct = async (url) => {
    let product = {};
    let sizes = []
    await axios.get(url)
        .then((res) =>  {
            product.price = res.data.price.current.value
            product.name = res.data.name
            if(res.data.isInStock) {
                for(let j=0; j < res.data.variants.length; j++) {
                    if(res.data.variants[j].isInStock) {
                        sizes.push(res.data.variants[j].brandSize)
                    }
                }
            }

            product.sizes = sizes;
        })       
        .catch(err => {
            if(err) {
                product = {
                    sizes: "Product Not Available"
                }
            }
        })
    
    return product;
}

const fetchBag = async (bag) => {
    let finalResults = [];
    const ilsPrice = JSON.parse(fs.readFileSync('./ils.json'));
    for(let i=0; i < bag.length; i++) {
        let country = await fetchCountry(bag[i][Object.keys(bag[i])[0]], ilsPrice)
        finalResults.push(country)
    }
    await finalResults.sort((a,b) => (a.totalBagPrice > b.totalBagPrice) ? 1 : ((b.totalBagPrice > a.totalBagPrice) ? -1 : 0))
    return finalResults
}

const fetchCountry = async (country, ils) => {
    let fetchedCountry = {}
    let total = 0;

    fetchedCountry.country = country.country
    fetchedCountry.currency = country.currency
    fetchedCountry.code = country.code
    fetchedCountry.CountryCode = country.CountryCode

    fetchedCountry.products = []

    for(let i=0; i < country.urls.length; i++) {
        let pro = await fetchProduct(country.urls[i])
        total += pro.price
        fetchedCountry.products.push(pro)
    }

    fetchedCountry.totalBagPrice = (total / ils[country.currency]).toFixed(2)
    return fetchedCountry
}

const getProductImage = async (url) => {
    let product = {}
    let config = {
        method: 'GET',
        url: url,
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
        }
    };

    axios(config).then(async (response) => {
        let data = response.data;
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

    return product
}

module.exports.fetchProduct = fetchProduct;
module.exports.getProductImage = getProductImage;
module.exports.fetchBag = fetchBag;
module.exports.fetchCountry = fetchCountry;