const baseUrl = 'https://api.asos.com/product/catalogue/v3/products/'
const product_url = 'https://www.asos.com/asos-design/asos-design-baggy-jeans-in-mid-wash-grey/prd/22090948?r=1'

const countries = [
    { country: "US", currency: "USD"}, // 1. United Stated

    { country: "COM", currency: "GBP"}, // 2. United Kingdom
    { country: "DK", currency: "GBP"}, // 3. Denmark
    { country: "PL", currency: "GBP"}, // 4. Poland
    { country: "SE", currency: "GBP"}, // 5. Sweden

    { country: "DE", currency: "EUR"}, // 6. Germany
    { country: "FR", currency: "EUR"}, // 7. France
    { country: "ES", currency: "EUR"}, // 8. Spain
    { country: "NL", currency: "EUR"}, // 9. Netherlands
    { country: "IT", currency: "EUR"}, // 10. Italy

    { country: "AU", currency: "AUD"}, // 11. Australia

    { country: "ROW", currency: "RUB"}, // 12. Turkey
    { country: "RU", currency: "RUB"}, // 13. Russia
]

const urlBuilder = () => {
    let productID = product_url.split('/')[6].split('?')[0];
    let urls = []

    for(let i=0; i < countries.length; i++) {
        let tempUrl = baseUrl + productID + 
                        '?store=' + countries[i].country +
                        '&currency=' + countries[i].currency;
        urls.push(tempUrl);
    }
}

export default urlBuilder;