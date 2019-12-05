const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

const Airports = [
    "KMCO", // Orlando International Airport
    "KJAX", // Jacksonville International Airport
    "KCHS", // Charleston International Airport
    "KDAB" //Daytona Beach International Airport
  ];

// Airports.forEach((airport) => {
//     console.log(airport);
// })

let selectedAirport = "KJAX";

const vatsimAirportSelection = (req, res) => {
    console.log(req.body);
    selectedAirport = req.body.selectedAirport;
    console.log(`Selected Airport: ${selectedAirport}`);
    vatsimArrivals(req, res);
}

const vatsimArrivals = (req, res) => {
    // /arrived/:airport/:howMany/:offset
    console.log(`Selected Airport: ${selectedAirport}`);
    const path = `/api/arrived/${selectedAirport}/15/0`;
    const requestOptions = {
      url: `${apiOptions.server}${path}`,
      method: 'GET',
      json: {},
    };
    request(
      requestOptions,
      (err, {statusCode}, body) => {
        let data = [];
        if (statusCode === 200 && body.length) {
            data = body;
        }
        renderArrivalsPage(req, res, data);
      }
    );
};
  
const renderArrivalsPage = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
      message = 'API lookup error';
      responseBody = [];
    } else {
      if (!responseBody.length) {
        message = 'No results for this airport';
      }
    }
    res.render('arrivals', 
        {
            airports: Airports,
            clients: responseBody,
            message,
            selectedAirport
        }
    );
};

  module.exports = {
    vatsimArrivals,
    vatsimAirportSelection
  };