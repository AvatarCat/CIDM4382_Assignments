const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('./app_api/models/stock');
const Input = mongoose.model('Input');

const StockSymbols = [
    "SNAP", // Snap Inc.
    "TWTR", // Twitter
    "AAPL", // Apple
    "DIS" // Disney
];

class ParsedInput {
    constructor( symbol,name,price,currency,price_open,day_high,day_low,day_change,change_pct,close_yesterday,market_cap,volume,
    volume_avg,shares,stock_exchange_long,stock_exchange_short,timezone,timezone_name,gmt_offset,last_trade_time,pe,eps)
    {
        this.symbol = symbol;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.price_open = price_open;
        this.day_high = day_high;
        this.day_low = day_low;
        this.day_change = day_change;
        this.change_pct = change_pct;
        this.close_yesterday = close_yesterday;
        this.market_cap = market_cap;
        this.volume = volume;
        this.volume_avg = volume_avg;
        this.shares = shares;
        this.stock_exchange_long = stock_exchange_long;
        this.stock_exchange_short = stock_exchange_short;
        this.timezone = timezone;
        this.timezone_name = timezone_name;
        this.gmt_offset = gmt_offset;
        this.last_trade_time = last_trade_time;
        this.pe = pe;
        this.eps = eps;
    }
}

const IsInARTCC = (inputs) => {

    //check to see departure or arrival is in ZAB Class B, C, or D
    if (StockSymbols.includes(inputs.symbol) || StockSymbols.includes(inputs.name)){
        return true;
    }else{
        return false;
    }
}

const writeInputModelListToPersist = (input_list) => {

    //pull connection string from environment variable
    const uri = process.env.MONGODB_ATLAS_URL;

    //this example uses ES6 template literals for string interpolation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(err => console.log(err));
   
    //insert the most recent list - https://mongoosejs.com/docs/api/model.html#model_Model.insertMany
    var promise = Input.insertMany(input_list, (err, docs) => {
        if(!err){
            console.log(`INSERTED: ${input_list.length} records`);
        }else{
            console.log(err);
        }
    });
}

const createInputModel = (inputs) => {
    return {
        symbol: inputs.symbol,
        name: inputs.name,
        price: inputs.price,
        currency: inputs.currency,
        price_open: inputs.price_open,
        day_high: inputs.day_high,
        day_low: inputs.day_low,
        day_change: inputs.day_change,
        change_pct: inputs.change_pct,
        close_yesterday: inputs.close_yesterday,
        volume: inputs.volume,
        volume_avg: inputs.volume_avg,
        shares: inputs.shares,
        stock_exchange_long: inputs.stock_exchange_long,
        stock_exchange_short: inputs.stock_exchange_short,
        timezone:inputs.timezone,
        timezone_name: inputs.timezone_name,
        gmt_offset: inputs.gmt_offset,
        last_trade_time: inputs.last_trade_time,
        pe: inputs.pe,
        eps: inputs.eps,
    }
};

/*
    symbol,name,price,currency,price_open,day_high,day_low,day_change,change_pct,close_yesterday,market_cap,volume,
    volume_avg,shares,stock_exchange_long,stock_exchange_short,timezone,timezone_name,gmt_offset,last_trade_time,pe,eps
*/

const parseInput = (parts) => {
    // symbol:
    let symbol = parts[0];    
    
    // name:
    let name = parts[1];
    
    // price:
    let price = parts[2];
    
    // currency:
    let currency = parts[3];
    
    // price_open:
    let price_open = parts[4];

    // day_high:
    let day_high = parts[5];

    // day_low:
    let day_low = parts[6];

    // day_change:
    let day_change = parts[7];

    // change_pct:
    let change_pct = parts[8];

    // close_yesterday:
    let close_yesterday = parts[9];

    // market_cap:
    let market_cap = parts[10];

    // volume:
    let volume = parts[11];

    // volume_avg:
    let volume_avg = parts[12];

    // shares:
    let shares = parts[13];

    // stock_exchange_long:
    let stock_exchange_long = parts[14];

    // stock_exchange_short:
    let stock_exchange_short = parts[15];

    // timezone:
    let timezone = parts[16];
    
    // timezone_name:
    let timezone_name = parts[17];

    // gmt_offset:
    let gmt_offset = parts[18];

    // last_trade_time:
    let last_trade_time = parts[19];

    // pe:
    let pe = parts[20];

    // eps:
    let eps = parts[21];

    return new ParsedInput(symbol,name,price,currency,price_open,day_high,day_low,day_change,change_pct,close_yesterday,market_cap,volume,
        volume_avg,shares,stock_exchange_long,stock_exchange_short,timezone,timezone_name,gmt_offset,last_trade_time,pe,eps);
}

const parseStock = (data) => {

    const inputModelList = [];

    let start = false;

     //lines = data.split("{");

     (element => {

        parts = element.split(",");

        // call to parseClient here
        //let input = parseInput(parts);

        
        //let symbol = parts[0];
        
        if(start){

            //do filtering here
            if(IsInARTCC(input)){
                //add to list
                inputModelList.push(createInputModel(input));
            }
        } 

        if(input.symbol.startsWith("symbol")){
            start = true;
        }         
 
    });

    console.log("WRITING TO DB " + new Date().toTimeString());    
    writeInputModelListToPersist(inputModelList);

};

const task = cron.schedule('*/2 * * * *', () => {

   axios.get('https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,AAPL,DIS&api_token=pIhwZRdPHpBQQQokD0LlpsYLECY2mM910kBIwumQYvkh0nmQMyPk7mQmTTIA')
    .then( (response) => {
        parseStock(response.data);
    })
    .catch( (error) => {
        console.log(error);
    });

    },{
        scheduled: false
    }
);

module.exports = task;