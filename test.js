const fetch = require('node-fetch')

fetch('https://dev.ralali.com:1027/api/v1/shippings?addressId=5969', {
    headers: {
        'Authorization': 'Bearer MQXc8c04d3a14fd4a39e73485bac93680e21075db642b4fba26a376de0444e3d228-_-zeHmsMH'
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