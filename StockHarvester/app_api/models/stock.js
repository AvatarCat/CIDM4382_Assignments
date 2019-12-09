const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const inputSchema = new Schema({
    symbol: String,
    name: String,
    price: String,
    currency: String,
    price_open: String,
    day_high: String,
    day_low: String,
    day_change: String,        
    change_pct: String,
    close_yesterday: String,
    market_cap: String,
    volume: String,
    volume_avg: String,
    shares: String,
    stock_exchange_long: String,
    stock_exchange_short: String,
    timezone: String,
    timezone_name: String,
    gmt_offset: String,
    last_trade_time: String,
    pe: String,
    eps: String,
});

mongoose.model('Input', inputSchema);

//const Input = mongoose.model('Input', inputSchema);