const request = require('request')

const urlDarkSky = 'https://api.darksky.net/forecast/ea0aaceaeadd9450c77d13f215cbfa31/37.8267,-122.4233?units=si&lang=pt'
const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlvdmFuZXJvc3NhdG8iLCJhIjoiY2s2NnVnNmE4MXBqYTNlb2Y5a2lzZWZodiJ9.SM77Kna6CQnm5VQpcFQrEA&&limit=1'

// Dark Sky
request({ url: urlDarkSky, json: true }, (err, response) => {
    if(err) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error){
        console.log('Unable to find location!')
    } else {
        console.log(response.body)
    }
})

// Map Box
request({ url: urlMapBox, json: true }, (err, response) => {
    if(err){
        console.log('Unable to connect with map box service!')
    } else if (response.body.features.length === 0){
        console.log('Unable to find the address disposed!')
    } else {
        console.log(response.body.features[0].center[1], response.body.features[0].center[0])   
    }
})
