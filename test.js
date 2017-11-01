const fetch = require('node-fetch')

fetch('https://dev.ralali.com:1027/api/v1/shippings?addressId=5969', {
    headers: {
        'Authorization': 'Bearer put_token_here'
    }
})
    .then(function (response) {
        // console.log(response);
        return response.json()
    }).then(function (json) {
        console.log('parsed json', JSON.stringify(json))
    }).catch(function (ex) {
        console.log('parsing failed', ex)
    })