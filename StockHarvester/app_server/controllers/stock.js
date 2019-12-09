const request = require('request');
const token = process.env.API_TOKEN;

const selected_port = process.env.PORT || '3000';

const apiOptions = {
  server: 'http://localhost:3000' + selected_port
};

const Symbols = [
    "SNAP", // Snap Inc.
    "TWTR", // Twitter
    "AAPL", // Apple
    "DIS" // Disney
  ];

let selectedSymbol = "AAPL";

const stockSymbolSelection = (req, res) => {
    console.log(req.body);
    selectedSymbol = req.body.selectedStock;
    console.log(`Selected Symbol: ${selectedSymbol}`);
    stockArrivals(req, res);
}

const stockInput = (req, res) => {
    // /arrived/:airport/:howMany/:offset
    console.log(`Selected Symbol: ${selectedSymbol}`);
    //const path = `/api/arrived/${selectedAirport}`;
    const path = `/api/vi/history?symbol=${selectedAirport}&api_token=${token}`;
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
        renderInputPage(req, res, data);
      }
    );
};
  
const renderInputPage = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
      message = 'API lookup error';
      responseBody = [];
    } else {
      if (!responseBody.length) {
        message = 'No results for this symbol';
      }
    }
    res.render('inputs', 
        {
            Symbols: Symbols,
            inputs: responseBody,
            message,
            selectedSymbol
        }
    );
};

  module.exports = {
    stockInput,
    stockSymbolSelection
  };