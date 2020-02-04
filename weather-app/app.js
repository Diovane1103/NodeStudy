const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

//const address = process.argv[2]

yargs.command({
    command: 'search',
    describe: 'Search about the climate of the specific city or region',
    builder: {
        address: {
            describe: 'Address',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        geocode(argv.address, (error, {latitude, longitude, name:location}) => {
            if(error) {
                return console.log('Error: ', error)
            } 
                
            forecast(latitude, longitude, (err, {summary, temperature, apparentTemperature:fellsLike, humidity, precipProbability}) => {
                if(err){
                    return console.log(err)
                }

                console.log('In ' + location + ' the sky is ' + summary.toLowerCase() + ' and the temperature is currently ' + temperature + ' and fells like of ' + fellsLike + '.')
                console.log('The humidity is ' + humidity + ' and the probability of rain is ' + precipProbability + '%.')
            })
            
        })
    }
})

yargs.parse()

// if(address !== undefined && address !== '') {
//     geocode(address, (error, data) => {
//         if(error) {
//             return console.log('Error: ', error)
//         } 
                        
//         forecast(data.latitude, data.longitude, (err, forecastData) => {
//             if(err){
//                 return console.log(err)
//             }
        
//             console.log('In ' + data.name + ' the sky is ' + forecastData.summary.toLowerCase() + ' and the temperature is currently ' + forecastData.temperature + ' and fells like of ' + forecastData.apparentTemperature + '.')
//             console.log('The humidity is ' + forecastData.humidity + ' and the probability of rain is ' + forecastData.precipProbability + '%.')
//         })
                    
//     })
// } else {
//     console.log('Please type a valid address!')
// }





