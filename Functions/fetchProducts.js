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
        body: null,
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "cross-site",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "featuresId=6d226af0-1b8d-4996-9626-555059d6326e; _gcl_au=1.1.827872607.1651922179; bt_stdstatus=NOTSTUDENT; _cs_c=0; s_ecid=MCMID%7C47957229809061181442674293492207148102; FPID=FPID2.2.1N7G3%2FVeKc2BkoXDCoUVo6I1fQd73lRdu%2F3K1KI9Hfo%3D.1651922179; FPAU=1.1.827872607.1651922179; fita.sid.asos=kEhSPcKeLSDJf-LJEsEs6b76NCdZb4Ho; __gads=ID=34117b82bf741907:T=1651922185:S=ALNI_MbO6vbV-UYwQJeLKhsL8v-I6CAFug; browseCountry=GB; geocountry=IL; AMCVS_C0137F6A52DEAFCC0A490D4C%40AdobeOrg=1; s_cc=true; _gid=GA1.2.1099932240.1655497346; FPLC=NZCImxq5EjOdqhHbd8z%2BrY1ycpnYO3Ra53aazmXCKKFIB%2FnpPn0tL2i5ZZDrmNWDiyhYHSa2bwfH%2F9W8du50lzbi81oD72EnwPinVZ0hxmeTmoNzvd2ER72jdxcZwA%3D%3D; __gpi=UID=000005ff259b8c8a:T=1651922185:RT=1655497428:S=ALNI_MaQIQi81a_7ctSYzI5WFaGMuoabOw; gig_bootstrap_3_Gl66L3LpFTiwZ8jWQ9x_4MLyUUHPRmPtRni0hzJ9RH5WA2Ro6tUv47yNXtKn3HQ8=social_ver4; gac_3_Gl66L3LpFTiwZ8jWQ9x_4MLyUUHPRmPtRni0hzJ9RH5WA2Ro6tUv47yNXtKn3HQ8=st2.s.AcbHWd5gxA.YLyeKvFqeXTy-Mwcig2nJ8JsjubjvJHBfSQ46BrbKfYr7lfvYmU-xgTNillWe3Fhvpl1WBUttE7QmD7ecFJ9itDnpadWLIehlIUPKt9x3nA.iq71Ol4KiVkZkOlp5tXEAaX2_5q4LnY3FRNBRiRkClKmPpKD0-VxxDSFcFP0NzB1r1W-MvboWufU9NUvtzv_LA.sc3; analytics-lp747=s; asos-cgd26=f9a9250040064b0bb84f626928623b08; _gtm_session=1; simon=1; sd_client_id=fff4ebaf-5bba-4c77-80bb-e53d27155f1f; sd_identity={\"userId\":\"121555798\",\"traits\":{\"email\":\"121555798@nxdomain.asos.simondata.com\",\"properties\":{\"customerid\":\"121555798\",\"customerguid\":\"121555798\",\"google_cid\":\"1193848588.1651922179\"}}}; AMCV_C0137F6A52DEAFCC0A490D4C%40AdobeOrg=-1303530583%7CMCMID%7C47957229809061181442674293492207148102%7CMCAAMLH-1656102452%7C6%7CMCAAMB-1656102452%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1655504546s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C3.3.0%7CMCCIDH%7C-1426764496; s_pers=%20s_vnum%3D1656622800104%2526vn%253D1%7C1656622800104%3B%20gpv_eVar230%3Dno%2520value%7C1655499575128%3B%20gpv_p6%3D%2520%7C1655499575129%3B%20eVar225%3D10%7C1655499753047%3B%20visitCount%3D1%7C1655499753049%3B%20s_invisit%3Dtrue%7C1655499753470%3B%20s_nr%3D1655497953472-Repeat%7C1687033953472%3B%20gpv_e47%3Dno%2520value%7C1655499753473%3B%20gpv_p10%3Ddesktop%2520com%257Ccategory%2520page%257C3602%2520refined%7C1655499753475%3B; OptanonConsent=isIABGlobal=false&datestamp=Fri+Jun+17+2022+23%3A32%3A33+GMT%2B0300+(Israel+Daylight+Time)&version=6.36.0&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false; _cs_id=2fdaf42e-fd8a-a7f9-defe-3f1667829787.1651922179.12.1655497955.1655497346.1628755191.1686086179018; _ga=GA1.2.1193848588.1651922179; s_sq=asoscomprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Ddesktop%252520com%25257Ccategory%252520page%25257C3602%252520refined%2526link%253DBody%252520Fit%2526region%253DmediumRefinements%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c; RT=\"z=1&dm=asos.com&si=a4deb064-8132-436d-a6ac-1a8ef66c1202&ss=l4iwdhi2&sl=l&tt=f4b&bcn=%2F%2F684d0d48.akstat.io%2F&ul=mp8j&hd=mpa1\"; _ga_1JR0QCFRSY=GS1.1.1655548649.12.0.1655548652.57; bm_sz=38EC2408B7F883CB1C4173A0C76BB84D~YAAQhJf2SKLGDDqBAQAA9r6CdhCTdpB/Qa8FIa/HnnkVctMhnRR5muYnFZioNj6REkejin47gEEcOryDa5rFyiufcEYdhifG0AtJann4FyzQJ6LAaRVXVHWB3ScpoAOGL3OXcCYFpaNprO10vghI+Kv3X+SSdSnAb+YWYEXNstnpxtQi5h2wliRxsIGV+34kt4XGSOficGokum7kJh7uuHF4Oa9BsldCapDS05LaNrr29COV1wQZ5JOiuVO1333MOrYojnq2ZjjMIkkWXomtU7AHCJwBzW7XTF8rc6pNtkqX~3552581~4272946; ak_bmsc=D77CA85306847E07713BC6AFF8D4925F~000000000000000000000000000000~YAAQhJf2SKTGDDqBAQAAgMCCdhDIcole+t8IueHJI/YZCQYPVNxz1IRAM0/3hrCcN/AfIVALR5btdbFT/sBPfb6Gm0yrUmizNNyQdPT+26OfMJW3FVD2J/AJhlCJzTOEBQPkhfs0Wu0o/xj1QASru8VrUGGKogzBOd3B6unSqKkAuqzLIu1ZAGlKl9ux1ySfFaIYKDFONS20pBuc7Qtx7R6JkHiQvoEIwOEsa9Ys058aIMfb/LC7f0FLLL9wl3gc1mByEghxpcBl0fwoeOU7fE4sxII89RWHUAbnS34LJ8o2CnyZyl4aQM8eVm2aSCE3Jq7p26HoG51ZvhbxUqIA3w54Ji2RBjygozih6TQ8p6YokbT7x6QO46CLX3TebcXquIWfl/5NZAFs; _abck=D1FFF3EEF0539F7B1F2ACD642A980D36~-1~YAAQhJf2SDHTDDqBAQAAZAyOdggtuA3wHJBXVHkS/VRj0jHdhbwCiR6ePGqY0vAFBupehUlMfh7N9hZ8YJ2tTvqDcSFuLDdWHnZVrBqnJbQS8KT1ZnsRFcR4UIU2W5HJs8Y8zGq0kb0DX3H3YjTpcv+enJzHV3IJeGx7JekimUa58S5FKby9fJt3Aj/qplh5OHb2f71yJQUgtGy2K9/BmMLksBHjwDe+HV9Go+MqOIr/Hi9gvubtnjpTXoR6XIXJs0ZOaLUkxMcIyCC1OOt7WQycfESCIDOE2uOu30t3vYolecYHndCyICWlCL8VKoYmzPb8kOTxWct7350NwhTQWzGkhar6sxp1W3oZcy2XLUuWWJjTcnZHgXrQ0IyVeuX9cGv0SU6BcLjlEQhyWMKk4Si/e48yM24=~-1~-1~-1",
            "Referer": "https://google.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
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