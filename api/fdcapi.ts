const axios = require('axios')

// encodeURIComponent() - changes certain symbols (? = / & :) into therir UTF-8 version(s)
//This excludes A-Z a-z 0-9 - _ . ! ~ * ' () 


//GET - v1/foods/list

const data = async() => {
    const res = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/list?&api_key=qbNhVbW8mmUu0syZQr0KWaviybabo1xlZmUwlJNj`)
    console.log(res.data[0].dataType)
}

data()

//It works but the data is in object