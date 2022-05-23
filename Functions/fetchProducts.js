const axios = require('axios');
const res = require('express/lib/response');
const fs = require('fs')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url)

    xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36");
    xhr.setRequestHeader("Upgrade-Insecure-Requests", "1");
    xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
    xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    xhr.send()
    
    return product
}

module.exports.fetchProduct = fetchProduct;
module.exports.getProductImage = getProductImage;
module.exports.fetchBag = fetchBag;
module.exports.fetchCountry = fetchCountry;